import { describe, expect, test, vi } from "vitest";
import { GardenManager } from "./gardenManager";
import type {
  GardenSettings,
  PlantingEntry,
  PlantingRecordInput,
  ScheduleSnapshot,
  WateringEvent,
  WateringEventInput,
  WeatherCacheRecord,
} from "../domain/types";
import type {
  NotificationService,
  PlantingRepository,
  ScheduleRepository,
  SettingsRepository,
  WateringRepository,
  WeatherRepository,
  WeatherService,
} from "../domain/ports";

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

describe("GardenManager", () => {
  test("groups dashboard items and persists recomputed snapshots", async () => {
    const plantings = [
      buildPlanting({
        id: "planting-overdue",
        displayName: "Patio Tomato",
        createdAt: "2026-04-10T08:00:00.000Z",
      }),
      buildPlanting({
        id: "planting-upcoming",
        displayName: "Front Sage",
        locationType: "ground",
        baseIntervalDays: 4,
        createdAt: "2026-04-15T08:00:00.000Z",
      }),
    ];
    const wateringEvents = [
      buildWateringEvent({
        plantingId: "planting-overdue",
        wateredAt: "2026-04-14T06:00:00.000Z",
      }),
      buildWateringEvent({
        plantingId: "planting-upcoming",
        wateredAt: "2026-04-16T06:00:00.000Z",
      }),
    ];
    const scheduleRepository = new InMemoryScheduleRepository();
    const manager = new GardenManager({
      plantingRepository: new InMemoryPlantingRepository(plantings),
      wateringRepository: new InMemoryWateringRepository(wateringEvents),
      settingsRepository: new InMemorySettingsRepository(null),
      weatherRepository: new InMemoryWeatherRepository(null),
      scheduleRepository,
      weatherService: {
        fetch: vi.fn(),
      } satisfies WeatherService,
      notificationService: {
        notifyDueDigest: vi.fn(),
      } satisfies NotificationService,
      now: () => "2026-04-17T09:00:00.000Z",
    });

    const state = await manager.loadState();

    expect(state.dashboard.overdue).toHaveLength(1);
    expect(state.dashboard.overdue[0].planting.displayName).toBe("Patio Tomato");
    expect(state.dashboard.upcoming).toHaveLength(1);
    expect(await scheduleRepository.listAll()).toHaveLength(2);
  });

  test("falls back to stale cached weather when refresh fails", async () => {
    const cachedWeather = buildWeather({
      isStale: false,
      fetchedAt: "2026-04-16T08:00:00.000Z",
    });
    const settings = buildSettings();
    const manager = new GardenManager({
      plantingRepository: new InMemoryPlantingRepository([]),
      wateringRepository: new InMemoryWateringRepository([]),
      settingsRepository: new InMemorySettingsRepository(settings),
      weatherRepository: new InMemoryWeatherRepository(cachedWeather),
      scheduleRepository: new InMemoryScheduleRepository(),
      weatherService: {
        fetch: vi.fn().mockRejectedValue(new Error("offline")),
      } satisfies WeatherService,
      notificationService: {
        notifyDueDigest: vi.fn(),
      } satisfies NotificationService,
      now: () => "2026-04-17T09:00:00.000Z",
    });

    const state = await manager.loadState();

    expect(state.weather?.isStale).toBe(true);
    expect(state.weather?.payloadJson).toBe(cachedWeather.payloadJson);
  });

  test("sends one notification digest for due items and skips duplicates on no-op refresh", async () => {
    const notifyDueDigest = vi.fn();
    const manager = new GardenManager({
      plantingRepository: new InMemoryPlantingRepository([
        buildPlanting({
          id: "planting-1",
          displayName: "Deck Basil",
          createdAt: "2026-04-14T08:00:00.000Z",
        }),
      ]),
      wateringRepository: new InMemoryWateringRepository([
        buildWateringEvent({
          plantingId: "planting-1",
          wateredAt: "2026-04-15T06:00:00.000Z",
        }),
      ]),
      settingsRepository: new InMemorySettingsRepository(
        buildSettings({ notificationsEnabled: true }),
      ),
      weatherRepository: new InMemoryWeatherRepository(null),
      scheduleRepository: new InMemoryScheduleRepository(),
      weatherService: {
        fetch: vi.fn().mockRejectedValue(new Error("offline")),
      } satisfies WeatherService,
      notificationService: {
        notifyDueDigest,
      } satisfies NotificationService,
      now: () => "2026-04-17T09:00:00.000Z",
    });

    await manager.loadState();
    await manager.loadState();

    expect(notifyDueDigest).toHaveBeenCalledTimes(1);
  });
});

function buildPlanting(overrides: Partial<PlantingEntry> = {}): PlantingEntry {
  return {
    id: "planting-1",
    displayName: "Garden Plant",
    species: "Tomato",
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

function buildWeather(
  overrides: Partial<WeatherCacheRecord> = {},
): WeatherCacheRecord {
  return {
    locationLabel: "Boise Garden",
    latitude: 43.615,
    longitude: -116.2023,
    timezone: "America/Boise",
    past24hRainMm: 0,
    next24hRainMm: 0,
    maxTempC: 24,
    maxWindKph: 10,
    fetchedAt: "2026-04-17T08:00:00.000Z",
    isStale: false,
    payloadJson: JSON.stringify({ current: {} }),
    ...overrides,
  };
}
