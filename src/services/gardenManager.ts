import { createScheduleSnapshot } from "../domain/scheduleEngine";
import type {
  NotificationService,
  PlantingRepository,
  ScheduleRepository,
  SettingsRepository,
  WateringRepository,
  WeatherRepository,
  WeatherService,
} from "../domain/ports";
import type {
  GardenSettings,
  PlantingEntry,
  PlantingRecordInput,
  ScheduleSnapshot,
  WateringEvent,
  WeatherCacheRecord,
} from "../domain/types";

export interface DashboardItem {
  planting: PlantingEntry;
  latestWateringEvent: WateringEvent | null;
  schedule: ScheduleSnapshot;
}

export interface HistoryItem {
  event: WateringEvent;
  plantingDisplayName: string;
}

export interface GardenAppState {
  dashboard: {
    overdue: DashboardItem[];
    dueToday: DashboardItem[];
    upcoming: DashboardItem[];
  };
  plantings: PlantingEntry[];
  history: HistoryItem[];
  settings: GardenSettings | null;
  weather: WeatherCacheRecord | null;
  snapshots: ScheduleSnapshot[];
}

interface GardenManagerDependencies {
  plantingRepository: PlantingRepository;
  wateringRepository: WateringRepository;
  settingsRepository: SettingsRepository;
  weatherRepository: WeatherRepository;
  scheduleRepository: ScheduleRepository;
  weatherService: WeatherService;
  notificationService: NotificationService;
  now?: () => string;
}

export class GardenManager {
  private readonly now: () => string;
  private lastDigestSignature: string | null = null;

  constructor(private readonly dependencies: GardenManagerDependencies) {
    this.now = dependencies.now ?? (() => new Date().toISOString());
  }

  async loadState(): Promise<GardenAppState> {
    const settings = await this.dependencies.settingsRepository.get();
    const weather = await this.resolveWeather(settings);
    const state = await this.buildState(weather);

    await this.maybeNotify(state);

    return state;
  }

  async createPlanting(input: PlantingRecordInput): Promise<GardenAppState> {
    await this.dependencies.plantingRepository.create(input);

    return this.loadState();
  }

  async updatePlanting(id: string, entry: PlantingEntry): Promise<GardenAppState> {
    await this.dependencies.plantingRepository.update(id, entry);

    return this.loadState();
  }

  async archivePlanting(id: string): Promise<GardenAppState> {
    await this.dependencies.plantingRepository.archive(id, this.now());

    return this.loadState();
  }

  async waterNow(plantingId: string, note?: string | null): Promise<GardenAppState> {
    await this.dependencies.wateringRepository.create({
      plantingId,
      wateredAt: this.now(),
      note: note ?? null,
    });

    return this.loadState();
  }

  async saveSettings(settings: GardenSettings): Promise<GardenAppState> {
    await this.dependencies.settingsRepository.save(settings);

    return this.loadState();
  }

  private async resolveWeather(
    settings: GardenSettings | null,
  ): Promise<WeatherCacheRecord | null> {
    const cached = await this.dependencies.weatherRepository.get();

    if (!settings) {
      return cached;
    }

    try {
      const fresh = await this.dependencies.weatherService.fetch(settings);
      await this.dependencies.weatherRepository.save(fresh);

      if (settings.lastWeatherSyncAt !== fresh.fetchedAt) {
        await this.dependencies.settingsRepository.save({
          ...settings,
          lastWeatherSyncAt: fresh.fetchedAt,
        });
      }

      return fresh;
    } catch {
      if (!cached) {
        return null;
      }

      const stale = cached.isStale ? cached : { ...cached, isStale: true };

      if (!cached.isStale) {
        await this.dependencies.weatherRepository.save(stale);
      }

      return stale;
    }
  }

  private async buildState(weather: WeatherCacheRecord | null): Promise<GardenAppState> {
    const plantings = await this.dependencies.plantingRepository.listActive();
    const dashboardItems: DashboardItem[] = [];

    for (const planting of plantings) {
      const latestWateringEvent =
        await this.dependencies.wateringRepository.getLatestForPlanting(planting.id);
      const schedule = createScheduleSnapshot({
        planting,
        latestWateringEvent,
        weather,
        now: this.now(),
      });

      dashboardItems.push({
        planting,
        latestWateringEvent,
        schedule,
      });
    }

    const snapshots = dashboardItems.map((item) => item.schedule);
    await this.dependencies.scheduleRepository.replaceAll(snapshots);

    const allPlantings = await this.dependencies.plantingRepository.listAll();
    const plantingNameById = new Map(
      allPlantings.map((planting) => [planting.id, planting.displayName]),
    );
    const history = (await this.dependencies.wateringRepository.listAll()).map(
      (event) => ({
        event,
        plantingDisplayName:
          plantingNameById.get(event.plantingId) ?? "Archived planting",
      }),
    );

    return {
      dashboard: {
        overdue: dashboardItems.filter((item) => item.schedule.status === "overdue"),
        dueToday: dashboardItems.filter(
          (item) => item.schedule.status === "due_today",
        ),
        upcoming: dashboardItems.filter((item) => item.schedule.status === "upcoming"),
      },
      plantings: allPlantings,
      history,
      settings: await this.dependencies.settingsRepository.get(),
      weather,
      snapshots,
    };
  }

  private async maybeNotify(state: GardenAppState): Promise<void> {
    if (!state.settings?.notificationsEnabled) {
      return;
    }

    const dueItems = [...state.dashboard.overdue, ...state.dashboard.dueToday];

    if (dueItems.length === 0) {
      this.lastDigestSignature = null;
      return;
    }

    const signature = dueItems
      .map(
        (item) =>
          `${item.planting.id}:${item.schedule.status}:${item.schedule.effectiveDueAt}`,
      )
      .join("|");

    if (signature === this.lastDigestSignature) {
      return;
    }

    this.lastDigestSignature = signature;

    await this.dependencies.notificationService.notifyDueDigest({
      title: `${dueItems.length} plants need water`,
      body: dueItems
        .slice(0, 3)
        .map((item) => item.planting.displayName)
        .join(", "),
      signature,
    });
  }
}
