import type {
  GardenSettings,
  PlantingEntry,
  PlantingRecordInput,
  ScheduleSnapshot,
  SqlClient,
  WateringEvent,
  WateringEventInput,
  WeatherCacheRecord,
} from "../../domain/types";

interface PlantingRow {
  id: string;
  display_name: string;
  species: string;
  quantity: number;
  location_type: PlantingEntry["locationType"];
  zone_name: string | null;
  base_interval_days: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
}

interface WateringEventRow {
  id: string;
  planting_id: string;
  watered_at: string;
  note: string | null;
}

interface SettingsRow {
  latitude: number;
  longitude: number;
  timezone: string;
  location_label: string;
  notifications_enabled: number;
  last_weather_sync_at: string | null;
}

interface WeatherCacheRow {
  location_label: string;
  latitude: number;
  longitude: number;
  timezone: string;
  past_24h_rain_mm: number;
  next_24h_rain_mm: number;
  max_temp_c: number;
  max_wind_kph: number;
  fetched_at: string;
  is_stale: number;
  payload_json: string;
}

interface ScheduleSnapshotRow {
  planting_id: string;
  baseline_due_at: string;
  effective_due_at: string;
  status: ScheduleSnapshot["status"];
  adjustment_reason: string | null;
}

export class SqlitePlantingRepository {
  constructor(private readonly client: SqlClient) {}

  async create(input: PlantingRecordInput): Promise<PlantingEntry> {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await this.client.execute(
      `
        INSERT INTO plantings (
          id,
          display_name,
          species,
          quantity,
          location_type,
          zone_name,
          base_interval_days,
          notes,
          created_at,
          updated_at,
          archived_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)
      `,
      [
        id,
        input.displayName,
        input.species,
        input.quantity,
        input.locationType,
        input.zoneName ?? null,
        input.baseIntervalDays,
        input.notes ?? null,
        now,
        now,
      ],
    );

    return this.getByIdOrThrow(id);
  }

  async update(id: string, entry: PlantingEntry): Promise<PlantingEntry> {
    await this.client.execute(
      `
        UPDATE plantings
        SET display_name = ?,
            species = ?,
            quantity = ?,
            location_type = ?,
            zone_name = ?,
            base_interval_days = ?,
            notes = ?,
            updated_at = ?,
            archived_at = ?
        WHERE id = ?
      `,
      [
        entry.displayName,
        entry.species,
        entry.quantity,
        entry.locationType,
        entry.zoneName ?? null,
        entry.baseIntervalDays,
        entry.notes ?? null,
        new Date().toISOString(),
        entry.archivedAt ?? null,
        id,
      ],
    );

    return this.getByIdOrThrow(id);
  }

  async archive(id: string, archivedAt: string): Promise<void> {
    await this.client.execute(
      `
        UPDATE plantings
        SET archived_at = ?,
            updated_at = ?
        WHERE id = ?
      `,
      [archivedAt, new Date().toISOString(), id],
    );
  }

  async getById(id: string): Promise<PlantingEntry | null> {
    const rows = await this.client.select<PlantingRow>(
      `
        SELECT id,
               display_name,
               species,
               quantity,
               location_type,
               zone_name,
               base_interval_days,
               notes,
               created_at,
               updated_at,
               archived_at
        FROM plantings
        WHERE id = ?
      `,
      [id],
    );

    return rows[0] ? mapPlanting(rows[0]) : null;
  }

  async listActive(): Promise<PlantingEntry[]> {
    const rows = await this.client.select<PlantingRow>(
      `
        SELECT id,
               display_name,
               species,
               quantity,
               location_type,
               zone_name,
               base_interval_days,
               notes,
               created_at,
               updated_at,
               archived_at
        FROM plantings
        WHERE archived_at IS NULL
        ORDER BY display_name ASC
      `,
    );

    return rows.map(mapPlanting);
  }

  async listAll(): Promise<PlantingEntry[]> {
    const rows = await this.client.select<PlantingRow>(
      `
        SELECT id,
               display_name,
               species,
               quantity,
               location_type,
               zone_name,
               base_interval_days,
               notes,
               created_at,
               updated_at,
               archived_at
        FROM plantings
        ORDER BY created_at DESC
      `,
    );

    return rows.map(mapPlanting);
  }

  private async getByIdOrThrow(id: string): Promise<PlantingEntry> {
    const entry = await this.getById(id);

    if (!entry) {
      throw new Error(`Planting ${id} was not found after write`);
    }

    return entry;
  }
}

export class SqliteWateringRepository {
  constructor(private readonly client: SqlClient) {}

  async create(input: WateringEventInput): Promise<WateringEvent> {
    const event: WateringEvent = {
      id: crypto.randomUUID(),
      plantingId: input.plantingId,
      wateredAt: input.wateredAt ?? new Date().toISOString(),
      note: input.note ?? null,
    };

    await this.client.execute(
      `
        INSERT INTO watering_events (
          id,
          planting_id,
          watered_at,
          note
        ) VALUES (?, ?, ?, ?)
      `,
      [event.id, event.plantingId, event.wateredAt, event.note],
    );

    return event;
  }

  async getLatestForPlanting(plantingId: string): Promise<WateringEvent | null> {
    const rows = await this.client.select<WateringEventRow>(
      `
        SELECT id, planting_id, watered_at, note
        FROM watering_events
        WHERE planting_id = ?
        ORDER BY watered_at DESC
        LIMIT 1
      `,
      [plantingId],
    );

    return rows[0] ? mapWateringEvent(rows[0]) : null;
  }

  async listAll(): Promise<WateringEvent[]> {
    const rows = await this.client.select<WateringEventRow>(
      `
        SELECT id, planting_id, watered_at, note
        FROM watering_events
        ORDER BY watered_at DESC
      `,
    );

    return rows.map(mapWateringEvent);
  }
}

export class SqliteSettingsRepository {
  constructor(private readonly client: SqlClient) {}

  async get(): Promise<GardenSettings | null> {
    const rows = await this.client.select<SettingsRow>(
      `
        SELECT latitude,
               longitude,
               timezone,
               location_label,
               notifications_enabled,
               last_weather_sync_at
        FROM settings
        WHERE id = 1
      `,
    );

    return rows[0] ? mapSettings(rows[0]) : null;
  }

  async save(settings: GardenSettings): Promise<void> {
    await this.client.execute(
      `
        INSERT INTO settings (
          id,
          latitude,
          longitude,
          timezone,
          location_label,
          notifications_enabled,
          last_weather_sync_at
        ) VALUES (1, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          latitude = excluded.latitude,
          longitude = excluded.longitude,
          timezone = excluded.timezone,
          location_label = excluded.location_label,
          notifications_enabled = excluded.notifications_enabled,
          last_weather_sync_at = excluded.last_weather_sync_at
      `,
      [
        settings.latitude,
        settings.longitude,
        settings.timezone,
        settings.locationLabel,
        settings.notificationsEnabled ? 1 : 0,
        settings.lastWeatherSyncAt,
      ],
    );
  }
}

export class SqliteWeatherRepository {
  constructor(private readonly client: SqlClient) {}

  async get(): Promise<WeatherCacheRecord | null> {
    const rows = await this.client.select<WeatherCacheRow>(
      `
        SELECT location_label,
               latitude,
               longitude,
               timezone,
               past_24h_rain_mm,
               next_24h_rain_mm,
               max_temp_c,
               max_wind_kph,
               fetched_at,
               is_stale,
               payload_json
        FROM weather_cache
        WHERE id = 1
      `,
    );

    return rows[0] ? mapWeatherCache(rows[0]) : null;
  }

  async save(record: WeatherCacheRecord): Promise<void> {
    await this.client.execute(
      `
        INSERT INTO weather_cache (
          id,
          location_label,
          latitude,
          longitude,
          timezone,
          past_24h_rain_mm,
          next_24h_rain_mm,
          max_temp_c,
          max_wind_kph,
          fetched_at,
          is_stale,
          payload_json
        ) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          location_label = excluded.location_label,
          latitude = excluded.latitude,
          longitude = excluded.longitude,
          timezone = excluded.timezone,
          past_24h_rain_mm = excluded.past_24h_rain_mm,
          next_24h_rain_mm = excluded.next_24h_rain_mm,
          max_temp_c = excluded.max_temp_c,
          max_wind_kph = excluded.max_wind_kph,
          fetched_at = excluded.fetched_at,
          is_stale = excluded.is_stale,
          payload_json = excluded.payload_json
      `,
      [
        record.locationLabel,
        record.latitude,
        record.longitude,
        record.timezone,
        record.past24hRainMm,
        record.next24hRainMm,
        record.maxTempC,
        record.maxWindKph,
        record.fetchedAt,
        record.isStale ? 1 : 0,
        record.payloadJson,
      ],
    );
  }
}

export class SqliteScheduleRepository {
  constructor(private readonly client: SqlClient) {}

  async replaceAll(snapshots: ScheduleSnapshot[]): Promise<void> {
    await this.client.execute("DELETE FROM schedule_snapshots");

    for (const snapshot of snapshots) {
      await this.client.execute(
        `
          INSERT INTO schedule_snapshots (
            planting_id,
            baseline_due_at,
            effective_due_at,
            status,
            adjustment_reason
          ) VALUES (?, ?, ?, ?, ?)
        `,
        [
          snapshot.plantingId,
          snapshot.baselineDueAt,
          snapshot.effectiveDueAt,
          snapshot.status,
          snapshot.adjustmentReason,
        ],
      );
    }
  }

  async listAll(): Promise<ScheduleSnapshot[]> {
    const rows = await this.client.select<ScheduleSnapshotRow>(
      `
        SELECT planting_id,
               baseline_due_at,
               effective_due_at,
               status,
               adjustment_reason
        FROM schedule_snapshots
        ORDER BY effective_due_at ASC
      `,
    );

    return rows.map(mapScheduleSnapshot);
  }
}

function mapPlanting(row: PlantingRow): PlantingEntry {
  return {
    id: row.id,
    displayName: row.display_name,
    species: row.species,
    quantity: row.quantity,
    locationType: row.location_type,
    zoneName: row.zone_name,
    baseIntervalDays: row.base_interval_days,
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    archivedAt: row.archived_at,
  };
}

function mapWateringEvent(row: WateringEventRow): WateringEvent {
  return {
    id: row.id,
    plantingId: row.planting_id,
    wateredAt: row.watered_at,
    note: row.note,
  };
}

function mapSettings(row: SettingsRow): GardenSettings {
  return {
    latitude: row.latitude,
    longitude: row.longitude,
    timezone: row.timezone,
    locationLabel: row.location_label,
    notificationsEnabled: Boolean(row.notifications_enabled),
    lastWeatherSyncAt: row.last_weather_sync_at,
  };
}

function mapWeatherCache(row: WeatherCacheRow): WeatherCacheRecord {
  return {
    locationLabel: row.location_label,
    latitude: row.latitude,
    longitude: row.longitude,
    timezone: row.timezone,
    past24hRainMm: row.past_24h_rain_mm,
    next24hRainMm: row.next_24h_rain_mm,
    maxTempC: row.max_temp_c,
    maxWindKph: row.max_wind_kph,
    fetchedAt: row.fetched_at,
    isStale: Boolean(row.is_stale),
    payloadJson: row.payload_json,
  };
}

function mapScheduleSnapshot(row: ScheduleSnapshotRow): ScheduleSnapshot {
  return {
    plantingId: row.planting_id,
    baselineDueAt: row.baseline_due_at,
    effectiveDueAt: row.effective_due_at,
    status: row.status,
    adjustmentReason: row.adjustment_reason,
  };
}
