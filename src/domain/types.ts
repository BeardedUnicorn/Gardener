import type { QueryResult } from "@tauri-apps/plugin-sql";

export type LocationType = "pot" | "bed" | "ground";

export type DueStatus = "overdue" | "due_today" | "upcoming";

export interface PlantingEntry {
  id: string;
  displayName: string;
  species: string;
  quantity: number;
  locationType: LocationType;
  zoneName: string | null;
  baseIntervalDays: number;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  archivedAt: string | null;
}

export interface WateringEvent {
  id: string;
  plantingId: string;
  wateredAt: string;
  note: string | null;
}

export interface GardenSettings {
  latitude: number;
  longitude: number;
  timezone: string;
  locationLabel: string;
  notificationsEnabled: boolean;
  lastWeatherSyncAt: string | null;
}

export interface ScheduleSnapshot {
  plantingId: string;
  baselineDueAt: string;
  effectiveDueAt: string;
  status: DueStatus;
  adjustmentReason: string | null;
}

export interface WeatherSignal {
  past24hRainMm: number;
  next24hRainMm: number;
  maxTempC: number;
  maxWindKph: number;
  fetchedAt: string;
  isStale: boolean;
}

export interface WeatherCacheRecord extends WeatherSignal {
  locationLabel: string;
  latitude: number;
  longitude: number;
  timezone: string;
  payloadJson: string;
}

export interface PlantingRecordInput {
  displayName: string;
  species: string;
  quantity: number;
  locationType: LocationType;
  zoneName?: string | null;
  baseIntervalDays: number;
  notes?: string | null;
}

export interface WateringEventInput {
  plantingId: string;
  wateredAt?: string;
  note?: string | null;
}

export interface SqlClient {
  execute(query: string, bindValues?: unknown[]): Promise<QueryResult>;
  select<T>(query: string, bindValues?: unknown[]): Promise<T[]>;
  close(): Promise<void>;
}
