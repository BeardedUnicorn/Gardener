import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { GardenManager } from "./services/gardenManager";
import type { CurrentLocation, LocationService } from "./services/locationService";
import type {
  GardenSettings,
  PlantingEntry,
  PlantingRecordInput,
  ScheduleSnapshot,
  WateringEvent,
  WateringEventInput,
  WeatherCacheRecord,
} from "./domain/types";
import type {
  NotificationService,
  PlantingRepository,
  ScheduleRepository,
  SettingsRepository,
  WateringRepository,
  WeatherRepository,
  WeatherService,
} from "./domain/ports";

class InMemoryPlantingRepository implements PlantingRepository {
  constructor(private readonly items: PlantingEntry[]) {}

  async create(input: PlantingRecordInput): Promise<PlantingEntry> {
    const now = "2026-04-17T09:00:00.000Z";
    const entry: PlantingEntry = {
      id: `planting-${this.items.length + 1}`,
      displayName: input.displayName,
      species: input.species,
      quantity: input.quantity,
      locationType: input.locationType,
      zoneName: input.zoneName ?? null,
      baseIntervalDays: input.baseIntervalDays,
      notes: input.notes ?? null,
      createdAt: now,
      updatedAt: now,
      archivedAt: null,
    };

    this.items.push(entry);

    return entry;
  }

  async update(id: string, entry: PlantingEntry): Promise<PlantingEntry> {
    const index = this.items.findIndex((item) => item.id === id);
    this.items[index] = {
      ...entry,
      updatedAt: "2026-04-17T09:00:00.000Z",
    };

    return this.items[index];
  }

  async archive(id: string, archivedAt: string): Promise<void> {
    const item = this.items.find((entry) => entry.id === id);

    if (item) {
      item.archivedAt = archivedAt;
    }
  }

  async getById(id: string): Promise<PlantingEntry | null> {
    return this.items.find((item) => item.id === id) ?? null;
  }

  async listActive(): Promise<PlantingEntry[]> {
    return this.items.filter((item) => item.archivedAt === null);
  }

  async listAll(): Promise<PlantingEntry[]> {
    return [...this.items];
  }
}

class InMemoryWateringRepository implements WateringRepository {
  constructor(private readonly events: WateringEvent[]) {}

  async create(input: WateringEventInput): Promise<WateringEvent> {
    const event: WateringEvent = {
      id: `event-${this.events.length + 1}`,
      plantingId: input.plantingId,
      wateredAt: input.wateredAt ?? "2026-04-17T09:00:00.000Z",
      note: input.note ?? null,
    };

    this.events.unshift(event);

    return event;
  }

  async getLatestForPlanting(plantingId: string): Promise<WateringEvent | null> {
    return this.events.find((event) => event.plantingId === plantingId) ?? null;
  }

  async listAll(): Promise<WateringEvent[]> {
    return [...this.events];
  }
}

class InMemorySettingsRepository implements SettingsRepository {
  constructor(private settings: GardenSettings | null) {}

  async get(): Promise<GardenSettings | null> {
    return this.settings;
  }

  async save(settings: GardenSettings): Promise<void> {
    this.settings = settings;
  }
}

class InMemoryWeatherRepository implements WeatherRepository {
  constructor(private weather: WeatherCacheRecord | null) {}

  async get(): Promise<WeatherCacheRecord | null> {
    return this.weather;
  }

  async save(record: WeatherCacheRecord): Promise<void> {
    this.weather = record;
  }
}

class InMemoryScheduleRepository implements ScheduleRepository {
  private snapshots: ScheduleSnapshot[] = [];

  async replaceAll(snapshots: ScheduleSnapshot[]): Promise<void> {
    this.snapshots = snapshots;
  }

  async listAll(): Promise<ScheduleSnapshot[]> {
    return [...this.snapshots];
  }
}

describe("App", () => {
  test("adds a planting from the plantings screen", async () => {
    const user = userEvent.setup();
    render(<App manager={buildManager()} />);

    const navigation = (
      await screen.findAllByRole("navigation", {
        name: /primary navigation/i,
      })
    )[0];
    await user.click(within(navigation).getByRole("button", { name: /plantings/i }));
    await user.click(
      (await screen.findAllByRole("button", { name: /add planting/i }))[0],
    );
    await user.type(screen.getByLabelText(/display name/i), "Raised Bed Peppers");
    await user.type(screen.getByLabelText(/species/i), "Pepper");
    await user.clear(screen.getByLabelText(/quantity/i));
    await user.type(screen.getByLabelText(/quantity/i), "4");
    await user.click(screen.getByRole("button", { name: /bed/i }));
    await user.clear(screen.getByLabelText(/base interval days/i));
    await user.type(screen.getByLabelText(/base interval days/i), "3");
    await user.click(screen.getByRole("button", { name: /^save planting$/i }));

    expect(await screen.findByText("Raised Bed Peppers")).toBeInTheDocument();
  });

  test("waters a due planting, moves it to upcoming, supports editing, and records history", async () => {
    const user = userEvent.setup();
    const manager = buildManager({
      plantings: [
        buildPlanting({
          id: "planting-1",
          displayName: "Deck Basil",
          createdAt: "2026-04-12T08:00:00.000Z",
        }),
      ],
      wateringEvents: [
        buildWateringEvent({
          plantingId: "planting-1",
          wateredAt: "2026-04-15T06:00:00.000Z",
        }),
      ],
    });

    render(<App manager={manager} />);
    const navigation = (
      await screen.findAllByRole("navigation", {
        name: /primary navigation/i,
      })
    )[0];

    const dueTodayRegion = await screen.findByRole("region", {
      name: /due today/i,
    });
    expect(within(dueTodayRegion).getByText("Deck Basil")).toBeInTheDocument();

    await user.click(within(dueTodayRegion).getByRole("button", { name: /watered now/i }));

    await waitFor(() => {
      expect(
        within(screen.getByRole("region", { name: /upcoming/i })).getByText(
          "Deck Basil",
        ),
      ).toBeInTheDocument();
    });

    await user.click(
      within(screen.getByRole("region", { name: /upcoming/i })).getByRole(
        "button",
        { name: /edit/i },
      ),
    );
    const editDialog = await screen.findByRole("dialog", { name: /edit planting/i });
    await user.clear(within(editDialog).getByLabelText(/base interval days/i));
    await user.type(within(editDialog).getByLabelText(/base interval days/i), "4");
    await user.click(within(editDialog).getByRole("button", { name: /ground/i }));
    await user.click(
      within(editDialog).getByRole("button", { name: /^save planting$/i }),
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    await user.click(within(navigation).getByRole("button", { name: /history/i }));
    const historyList = await screen.findByRole("list", {
      name: /watering history/i,
    });
    expect(within(historyList).getAllByRole("listitem")).toHaveLength(2);

    await user.click(within(navigation).getByRole("button", { name: /plantings/i }));
    expect(
      await screen.findByText(/Basil\s*•\s*1\s*•\s*Ground/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/every 4 days/i)).toBeInTheDocument();
  });

  test("autodetects the current location into settings", async () => {
    const user = userEvent.setup();
    const detectCurrentLocation = vi.fn().mockResolvedValue({
      latitude: 43.615,
      longitude: -116.2023,
      timezone: "America/Boise",
      locationLabel: "Current location",
    } satisfies CurrentLocation);

    render(
      <App
        manager={buildManager({ settings: null })}
        locationService={{
          detectCurrentLocation,
        }}
        initialScreen="settings"
      />,
    );

    await screen.findByRole("heading", { name: /garden settings/i });
    await user.click(
      screen.getByRole("button", { name: /use current location/i }),
    );

    await waitFor(() => {
      expect(detectCurrentLocation).toHaveBeenCalledTimes(1);
      expect(screen.getByLabelText(/location label/i)).toHaveValue(
        "Current location",
      );
    });

    expect(screen.getByLabelText(/latitude/i)).toHaveValue("43.615");
    expect(screen.getByLabelText(/longitude/i)).toHaveValue("-116.2023");
    expect(screen.getByLabelText(/timezone/i)).toHaveValue("America/Boise");
  });
});

function buildManager(input?: {
  plantings?: PlantingEntry[];
  wateringEvents?: WateringEvent[];
  settings?: GardenSettings | null;
}) {
  return new GardenManager({
    plantingRepository: new InMemoryPlantingRepository(input?.plantings ?? []),
    wateringRepository: new InMemoryWateringRepository(
      input?.wateringEvents ?? [],
    ),
    settingsRepository: new InMemorySettingsRepository(
      input?.settings === undefined ? buildSettings() : input.settings,
    ),
    weatherRepository: new InMemoryWeatherRepository(null),
    scheduleRepository: new InMemoryScheduleRepository(),
    weatherService: {
      fetch: vi.fn().mockRejectedValue(new Error("offline")),
    } satisfies WeatherService,
    notificationService: {
      notifyDueDigest: vi.fn(),
    } satisfies NotificationService,
    now: () => "2026-04-17T09:00:00.000Z",
  });
}

function buildPlanting(overrides: Partial<PlantingEntry> = {}): PlantingEntry {
  return {
    id: "planting-1",
    displayName: "Garden Plant",
    species: "Basil",
    quantity: 1,
    locationType: "pot",
    zoneName: null,
    baseIntervalDays: 2,
    notes: null,
    createdAt: "2026-04-10T08:00:00.000Z",
    updatedAt: "2026-04-10T08:00:00.000Z",
    archivedAt: null,
    ...overrides,
  };
}

function buildWateringEvent(
  overrides: Partial<WateringEvent> = {},
): WateringEvent {
  return {
    id: "event-1",
    plantingId: "planting-1",
    wateredAt: "2026-04-15T06:00:00.000Z",
    note: null,
    ...overrides,
  };
}

function buildSettings(
  overrides: Partial<GardenSettings> = {},
): GardenSettings {
  return {
    latitude: 43.615,
    longitude: -116.2023,
    timezone: "America/Boise",
    locationLabel: "Boise Garden",
    notificationsEnabled: false,
    lastWeatherSyncAt: "2026-04-16T08:00:00.000Z",
    ...overrides,
  };
}
