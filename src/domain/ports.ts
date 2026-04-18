import type {
  GardenSettings,
  PlantingEntry,
  PlantingRecordInput,
  ScheduleSnapshot,
  WateringEvent,
  WateringEventInput,
  WeatherCacheRecord,
} from "./types";

export interface PlantingRepository {
  create(input: PlantingRecordInput): Promise<PlantingEntry>;
  update(id: string, entry: PlantingEntry): Promise<PlantingEntry>;
  archive(id: string, archivedAt: string): Promise<void>;
  getById(id: string): Promise<PlantingEntry | null>;
  listActive(): Promise<PlantingEntry[]>;
  listAll(): Promise<PlantingEntry[]>;
}

export interface WateringRepository {
  create(input: WateringEventInput): Promise<WateringEvent>;
  getLatestForPlanting(plantingId: string): Promise<WateringEvent | null>;
  listAll(): Promise<WateringEvent[]>;
}

export interface SettingsRepository {
  get(): Promise<GardenSettings | null>;
  save(settings: GardenSettings): Promise<void>;
}

export interface WeatherRepository {
  get(): Promise<WeatherCacheRecord | null>;
  save(record: WeatherCacheRecord): Promise<void>;
}

export interface ScheduleRepository {
  replaceAll(snapshots: ScheduleSnapshot[]): Promise<void>;
  listAll(): Promise<ScheduleSnapshot[]>;
}

export interface WeatherService {
  fetch(settings: GardenSettings): Promise<WeatherCacheRecord>;
}

export interface NotificationService {
  notifyDueDigest(input: DueDigest): Promise<void>;
}

export interface DueDigest {
  title: string;
  body: string;
  signature: string;
}
