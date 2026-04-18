This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  tauri.svg
  vite.svg
src/
  assets/
    react.svg
  data/
    sql/
      sqliteRepositories.test.ts
      sqliteRepositories.ts
      tauriSqlClient.ts
  domain/
    defaults.ts
    ports.ts
    scheduleEngine.test.ts
    scheduleEngine.ts
    types.ts
  services/
    browserLocationService.test.ts
    browserLocationService.ts
    createDesktopGardenManager.ts
    gardenManager.test.ts
    gardenManager.ts
    locationService.ts
    openMeteoWeatherService.ts
    runtimeLocationService.test.ts
    runtimeLocationService.ts
    tauriNotificationService.ts
  test/
    setup.ts
  App.css
  App.test.tsx
  App.tsx
  main.tsx
  theme.ts
  vite-env.d.ts
src-tauri/
  capabilities/
    default.json
  icons/
    128x128.png
    128x128@2x.png
    32x32.png
    icon.icns
    icon.ico
    icon.png
    Square107x107Logo.png
    Square142x142Logo.png
    Square150x150Logo.png
    Square284x284Logo.png
    Square30x30Logo.png
    Square310x310Logo.png
    Square44x44Logo.png
    Square71x71Logo.png
    Square89x89Logo.png
    StoreLogo.png
  migrations/
    0001_create_core_tables.sql
  src/
    lib.rs
    main.rs
  .gitignore
  build.rs
  Cargo.toml
  Info.plist
  tauri.conf.json
.gitignore
index.html
package.json
README.md
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: public/tauri.svg
```xml
<svg width="206" height="231" viewBox="0 0 206 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z" fill="#FFC131"/>
<ellipse cx="84.1426" cy="147" rx="22" ry="22" transform="rotate(180 84.1426 147)" fill="#24C8DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z" fill="#FFC131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z" fill="#24C8DB"/>
</svg>
```

## File: public/vite.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## File: src/assets/react.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

## File: src/data/sql/sqliteRepositories.test.ts
```typescript
// @vitest-environment node

import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import type { QueryResult } from "@tauri-apps/plugin-sql";
import type {
  GardenSettings,
  ScheduleSnapshot,
  SqlClient,
  WeatherCacheRecord,
} from "../../domain/types";
import {
  SqlitePlantingRepository,
  SqliteScheduleRepository,
  SqliteSettingsRepository,
  SqliteWateringRepository,
  SqliteWeatherRepository,
} from "./sqliteRepositories";

class TestSqliteClient implements SqlClient {
  constructor(private readonly db: DatabaseSync) {}

  async execute(query: string, bindValues: unknown[] = []): Promise<QueryResult> {
    const result = this.db.prepare(query).run(...bindValues);

    return {
      rowsAffected: Number(result.changes ?? 0),
      lastInsertId:
        result.lastInsertRowid === undefined
          ? null
          : Number(result.lastInsertRowid),
    } as QueryResult;
  }

  async select<T>(query: string, bindValues: unknown[] = []): Promise<T[]> {
    return this.db.prepare(query).all(...bindValues) as T[];
  }

  async close(): Promise<void> {
    this.db.close();
  }
}

describe("SQLite repositories", () => {
  let tempDirectory: string;
  let db: DatabaseSync;
  let client: SqlClient;

  beforeEach(async () => {
    tempDirectory = await mkdtemp(join(tmpdir(), "gardener-sqlite-test-"));
    db = new DatabaseSync(join(tempDirectory, "gardener.test.db"));
    client = new TestSqliteClient(db);
    await applyMigrations(db);
  });

  afterEach(async () => {
    await client.close();
    await rm(tempDirectory, { recursive: true, force: true });
  });

  test("creates, updates, lists, and archives planting entries", async () => {
    const repository = new SqlitePlantingRepository(client);
    const created = await repository.create({
      displayName: "Raised Bed Lettuce",
      species: "Lettuce",
      quantity: 8,
      locationType: "bed",
      zoneName: "North bed",
      baseIntervalDays: 3,
      notes: "Morning shade",
    });

    expect(created.displayName).toBe("Raised Bed Lettuce");
    expect(created.archivedAt).toBeNull();

    const updated = await repository.update(created.id, {
      ...created,
      quantity: 10,
      notes: "Morning shade, afternoon sun",
    });

    expect(updated.quantity).toBe(10);

    const activePlantings = await repository.listActive();
    expect(activePlantings).toHaveLength(1);

    await repository.archive(created.id, "2026-04-17T12:00:00.000Z");

    expect(await repository.listActive()).toHaveLength(0);
    expect(await repository.listAll()).toHaveLength(1);
  });

  test("stores watering history and returns the latest event for a planting", async () => {
    const plantingRepository = new SqlitePlantingRepository(client);
    const wateringRepository = new SqliteWateringRepository(client);
    const planting = await plantingRepository.create({
      displayName: "Patio Basil",
      species: "Basil",
      quantity: 1,
      locationType: "pot",
      baseIntervalDays: 2,
    });

    await wateringRepository.create({
      plantingId: planting.id,
      wateredAt: "2026-04-16T07:00:00.000Z",
      note: "Light soak",
    });
    await wateringRepository.create({
      plantingId: planting.id,
      wateredAt: "2026-04-17T06:30:00.000Z",
      note: "Deep soak",
    });

    const latest = await wateringRepository.getLatestForPlanting(planting.id);
    const history = await wateringRepository.listAll();

    expect(latest?.wateredAt).toBe("2026-04-17T06:30:00.000Z");
    expect(history).toHaveLength(2);
    expect(history[0]?.note).toBe("Deep soak");
  });

  test("persists settings, weather cache, and schedule snapshots", async () => {
    const plantingRepository = new SqlitePlantingRepository(client);
    const settingsRepository = new SqliteSettingsRepository(client);
    const weatherRepository = new SqliteWeatherRepository(client);
    const scheduleRepository = new SqliteScheduleRepository(client);
    const planting = await plantingRepository.create({
      displayName: "Front Border Sage",
      species: "Sage",
      quantity: 3,
      locationType: "ground",
      baseIntervalDays: 4,
    });

    const settings: GardenSettings = {
      latitude: 43.615,
      longitude: -116.2023,
      timezone: "America/Boise",
      locationLabel: "Boise Garden",
      notificationsEnabled: true,
      lastWeatherSyncAt: "2026-04-17T08:00:00.000Z",
    };
    const weatherCache: WeatherCacheRecord = {
      locationLabel: "Boise Garden",
      latitude: 43.615,
      longitude: -116.2023,
      timezone: "America/Boise",
      past24hRainMm: 1.2,
      next24hRainMm: 3.8,
      maxTempC: 29,
      maxWindKph: 18,
      fetchedAt: "2026-04-17T08:00:00.000Z",
      isStale: false,
      payloadJson: JSON.stringify({ hourly: {} }),
    };
    const snapshots: ScheduleSnapshot[] = [
      {
        plantingId: planting.id,
        baselineDueAt: "2026-04-18T06:00:00.000Z",
        effectiveDueAt: "2026-04-19T06:00:00.000Z",
        status: "upcoming",
        adjustmentReason: "Delayed 1 day for forecast rain",
      },
    ];

    await settingsRepository.save(settings);
    await weatherRepository.save(weatherCache);
    await scheduleRepository.replaceAll(snapshots);

    expect(await settingsRepository.get()).toEqual(settings);
    expect(await weatherRepository.get()).toEqual(weatherCache);
    expect(await scheduleRepository.listAll()).toEqual(snapshots);
  });
});

async function applyMigrations(db: DatabaseSync): Promise<void> {
  const migrationsDirectory = new URL("../../../src-tauri/migrations/", import.meta.url);
  const entries = (await readdir(migrationsDirectory)).sort();

  for (const entry of entries) {
    const sql = await readFile(new URL(entry, migrationsDirectory), "utf8");
    db.exec(sql);
  }
}
```

## File: src/data/sql/sqliteRepositories.ts
```typescript
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
```

## File: src/data/sql/tauriSqlClient.ts
```typescript
import Database from "@tauri-apps/plugin-sql";
import type { SqlClient } from "../../domain/types";

export async function createTauriSqlClient(
  path = "sqlite:app.db",
): Promise<SqlClient> {
  const database = await Database.load(path);

  return {
    execute(query: string, bindValues?: unknown[]) {
      return database.execute(query, bindValues);
    },
    async select<T>(query: string, bindValues?: unknown[]) {
      return database.select<T[]>(query, bindValues);
    },
    async close() {
      await database.close();
    },
  };
}
```

## File: src/domain/defaults.ts
```typescript
import type { LocationType } from "./types";

export const locationIntervalHints: Record<LocationType, number> = {
  pot: 2,
  bed: 3,
  ground: 4,
};

export const locationLabels: Record<LocationType, string> = {
  pot: "Pot",
  bed: "Bed",
  ground: "Ground",
};
```

## File: src/domain/ports.ts
```typescript
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
```

## File: src/domain/scheduleEngine.test.ts
```typescript
import { describe, expect, test } from "vitest";
import { createScheduleSnapshot } from "./scheduleEngine";
import type { PlantingEntry, WateringEvent, WeatherSignal } from "./types";

function buildPlanting(overrides: Partial<PlantingEntry> = {}): PlantingEntry {
  return {
    id: "planting-1",
    displayName: "Patio Tomatoes",
    species: "Tomato",
    quantity: 2,
    locationType: "pot",
    baseIntervalDays: 2,
    createdAt: "2026-04-10T08:00:00.000Z",
    updatedAt: "2026-04-10T08:00:00.000Z",
    notes: null,
    zoneName: "South patio",
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

function buildWeatherSignal(
  overrides: Partial<WeatherSignal> = {},
): WeatherSignal {
  return {
    past24hRainMm: 0,
    next24hRainMm: 0,
    maxTempC: 22,
    maxWindKph: 8,
    fetchedAt: "2026-04-17T07:00:00.000Z",
    isStale: false,
    ...overrides,
  };
}

describe("createScheduleSnapshot", () => {
  test("uses the latest watering event as the schedule baseline", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({ baseIntervalDays: 3 }),
      latestWateringEvent: buildWateringEvent({
        wateredAt: "2026-04-15T06:00:00.000Z",
      }),
      weather: null,
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot).toMatchObject({
      plantingId: "planting-1",
      baselineDueAt: "2026-04-18T06:00:00.000Z",
      effectiveDueAt: "2026-04-18T06:00:00.000Z",
      status: "upcoming",
      adjustmentReason: null,
    });
  });

  test("falls back to the planting creation time when there is no watering history", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({
        createdAt: "2026-04-16T12:30:00.000Z",
        baseIntervalDays: 2,
      }),
      latestWateringEvent: null,
      weather: null,
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot.effectiveDueAt).toBe("2026-04-18T12:30:00.000Z");
    expect(snapshot.status).toBe("upcoming");
  });

  test("delays pot schedules by one day when rain signal reaches 10mm", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({ locationType: "pot", baseIntervalDays: 2 }),
      latestWateringEvent: buildWateringEvent(),
      weather: buildWeatherSignal({
        past24hRainMm: 4,
        next24hRainMm: 6,
      }),
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot.effectiveDueAt).toBe("2026-04-18T06:00:00.000Z");
    expect(snapshot.adjustmentReason).toBe("Delayed 1 day for forecast rain");
  });

  test("applies the larger ground rain delay tiers", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({
        locationType: "ground",
        baseIntervalDays: 4,
      }),
      latestWateringEvent: buildWateringEvent({
        wateredAt: "2026-04-13T06:00:00.000Z",
      }),
      weather: buildWeatherSignal({
        past24hRainMm: 13,
        next24hRainMm: 13,
      }),
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot).toMatchObject({
      baselineDueAt: "2026-04-17T06:00:00.000Z",
      effectiveDueAt: "2026-04-20T06:00:00.000Z",
      status: "upcoming",
      adjustmentReason: "Delayed 3 days for forecast rain",
    });
  });

  test("moves pot schedules earlier during hot windy weather when rain is low", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({
        locationType: "pot",
        baseIntervalDays: 3,
      }),
      latestWateringEvent: buildWateringEvent({
        wateredAt: "2026-04-15T06:00:00.000Z",
      }),
      weather: buildWeatherSignal({
        maxTempC: 30,
        maxWindKph: 26,
        next24hRainMm: 1,
      }),
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot.effectiveDueAt).toBe("2026-04-17T06:00:00.000Z");
    expect(snapshot.status).toBe("due_today");
    expect(snapshot.adjustmentReason).toBe(
      "Moved earlier 1 day for hot, windy weather",
    );
  });

  test("does not advance schedules for heat when rain signal is already high enough", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({
        locationType: "pot",
        baseIntervalDays: 3,
      }),
      latestWateringEvent: buildWateringEvent({
        wateredAt: "2026-04-15T06:00:00.000Z",
      }),
      weather: buildWeatherSignal({
        maxTempC: 34,
        maxWindKph: 28,
        past24hRainMm: 1,
        next24hRainMm: 3,
      }),
      now: "2026-04-18T09:00:00.000Z",
    });

    expect(snapshot.effectiveDueAt).toBe("2026-04-18T06:00:00.000Z");
    expect(snapshot.status).toBe("due_today");
    expect(snapshot.adjustmentReason).toBeNull();
  });

  test("marks already passed schedules as overdue", () => {
    const snapshot = createScheduleSnapshot({
      planting: buildPlanting({
        locationType: "bed",
        baseIntervalDays: 2,
      }),
      latestWateringEvent: buildWateringEvent({
        wateredAt: "2026-04-14T06:00:00.000Z",
      }),
      weather: buildWeatherSignal(),
      now: "2026-04-17T09:00:00.000Z",
    });

    expect(snapshot.status).toBe("overdue");
    expect(snapshot.effectiveDueAt).toBe("2026-04-16T06:00:00.000Z");
  });
});
```

## File: src/domain/scheduleEngine.ts
```typescript
import { addDays } from "date-fns";
import type {
  DueStatus,
  LocationType,
  PlantingEntry,
  ScheduleSnapshot,
  WateringEvent,
  WeatherSignal,
} from "./types";

interface CreateScheduleSnapshotInput {
  planting: PlantingEntry;
  latestWateringEvent: WateringEvent | null;
  weather: WeatherSignal | null;
  now: string;
}

export function createScheduleSnapshot(
  input: CreateScheduleSnapshotInput,
): ScheduleSnapshot {
  const { planting, latestWateringEvent, weather, now } = input;
  const baselineSource = latestWateringEvent?.wateredAt ?? planting.createdAt;
  const baselineDueAt = addDays(
    new Date(baselineSource),
    planting.baseIntervalDays,
  );
  const rainSignalMm = weather
    ? weather.past24hRainMm + weather.next24hRainMm
    : 0;
  const rainDelayDays = getRainDelayDays(planting.locationType, rainSignalMm);
  const dryAdvanceDays = weather
    ? getDryAdvanceDays(planting.locationType, weather, rainSignalMm)
    : 0;
  const effectiveDueAt = addDays(
    baselineDueAt,
    rainDelayDays - dryAdvanceDays,
  );

  return {
    plantingId: planting.id,
    baselineDueAt: baselineDueAt.toISOString(),
    effectiveDueAt: effectiveDueAt.toISOString(),
    status: getDueStatus(effectiveDueAt.toISOString(), now),
    adjustmentReason: getAdjustmentReason(rainDelayDays, dryAdvanceDays, weather),
  };
}

function getRainDelayDays(
  locationType: LocationType,
  rainSignalMm: number,
): number {
  if (locationType === "pot") {
    return rainSignalMm >= 10 ? 1 : 0;
  }

  if (locationType === "bed") {
    if (rainSignalMm >= 15) {
      return 2;
    }

    return rainSignalMm >= 6 ? 1 : 0;
  }

  if (rainSignalMm >= 25) {
    return 3;
  }

  if (rainSignalMm >= 12) {
    return 2;
  }

  return rainSignalMm >= 6 ? 1 : 0;
}

function getDryAdvanceDays(
  locationType: LocationType,
  weather: WeatherSignal,
  rainSignalMm: number,
): number {
  if (locationType === "pot" && rainSignalMm < 4) {
    if (weather.maxTempC >= 32) {
      return 1;
    }

    if (weather.maxTempC >= 29 && weather.maxWindKph >= 24) {
      return 1;
    }
  }

  if (
    locationType === "bed" &&
    rainSignalMm < 4 &&
    weather.maxTempC >= 35 &&
    weather.maxWindKph >= 24
  ) {
    return 1;
  }

  if (
    locationType === "ground" &&
    rainSignalMm < 2 &&
    weather.maxTempC >= 37 &&
    weather.maxWindKph >= 28
  ) {
    return 1;
  }

  return 0;
}

function getDueStatus(effectiveDueAt: string, now: string): DueStatus {
  const dueDay = effectiveDueAt.slice(0, 10);
  const currentDay = now.slice(0, 10);

  if (dueDay < currentDay) {
    return "overdue";
  }

  if (dueDay === currentDay) {
    return "due_today";
  }

  return "upcoming";
}

function getAdjustmentReason(
  rainDelayDays: number,
  dryAdvanceDays: number,
  weather: WeatherSignal | null,
): string | null {
  if (rainDelayDays > 0) {
    return `Delayed ${rainDelayDays} ${pluralizeDay(rainDelayDays)} for forecast rain`;
  }

  if (dryAdvanceDays > 0 && weather) {
    const isWindDriven = weather.maxWindKph >= 24;
    const description = isWindDriven ? "hot, windy weather" : "hot weather";

    return `Moved earlier ${dryAdvanceDays} ${pluralizeDay(dryAdvanceDays)} for ${description}`;
  }

  return null;
}

function pluralizeDay(value: number): string {
  return value === 1 ? "day" : "days";
}
```

## File: src/domain/types.ts
```typescript
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
```

## File: src/services/browserLocationService.test.ts
```typescript
import { afterEach, describe, expect, test, vi } from "vitest";
import { BrowserLocationService } from "./browserLocationService";

describe("BrowserLocationService", () => {
  const originalNavigator = globalThis.navigator;

  afterEach(() => {
    Object.defineProperty(globalThis, "navigator", {
      configurable: true,
      value: originalNavigator,
    });
    vi.unstubAllGlobals();
  });

  test("resolves the current coordinates and timezone from the browser", async () => {
    const getCurrentPosition = vi.fn((success: PositionCallback) => {
      success({
        coords: {
          latitude: 43.615,
          longitude: -116.2023,
        },
      } as GeolocationPosition);
    });

    Object.defineProperty(globalThis, "navigator", {
      configurable: true,
      value: {
        geolocation: {
          getCurrentPosition,
        },
      },
    });

    vi.stubGlobal("Intl", {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({
          timeZone: "America/Boise",
        }),
      }),
    });

    const service = new BrowserLocationService();

    await expect(service.detectCurrentLocation()).resolves.toEqual({
      latitude: 43.615,
      longitude: -116.2023,
      timezone: "America/Boise",
      locationLabel: "Current location",
    });
  });

  test("rejects when geolocation is unavailable", async () => {
    Object.defineProperty(globalThis, "navigator", {
      configurable: true,
      value: {},
    });

    const service = new BrowserLocationService();

    await expect(service.detectCurrentLocation()).rejects.toThrow(
      "Geolocation is not available in this app environment.",
    );
  });
});
```

## File: src/services/browserLocationService.ts
```typescript
import type { CurrentLocation, LocationService } from "./locationService";

const LOCATION_LABEL = "Current location";
const GEOLOCATION_UNAVAILABLE_MESSAGE =
  "Geolocation is not available in this app environment.";

export class BrowserLocationService implements LocationService {
  async detectCurrentLocation(): Promise<CurrentLocation> {
    if (!("geolocation" in navigator) || !navigator.geolocation) {
      throw new Error(GEOLOCATION_UNAVAILABLE_MESSAGE);
    }

    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        (error) => {
          reject(new Error(mapGeolocationError(error)));
        },
        {
          enableHighAccuracy: false,
          maximumAge: 5 * 60 * 1000,
          timeout: 10_000,
        },
      );
    });

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timezone: getCurrentTimezone(),
      locationLabel: LOCATION_LABEL,
    };
  }
}

function getCurrentTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function mapGeolocationError(error: GeolocationPositionError): string {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "Location access was denied. Allow location access and try again.";
    case error.POSITION_UNAVAILABLE:
      return "Your device could not determine its current location.";
    case error.TIMEOUT:
      return "Location detection timed out. Try again.";
    default:
      return error.message || "Location detection failed.";
  }
}
```

## File: src/services/createDesktopGardenManager.ts
```typescript
import { SqlitePlantingRepository, SqliteScheduleRepository, SqliteSettingsRepository, SqliteWateringRepository, SqliteWeatherRepository } from "../data/sql/sqliteRepositories";
import { createTauriSqlClient } from "../data/sql/tauriSqlClient";
import { GardenManager } from "./gardenManager";
import { OpenMeteoWeatherService } from "./openMeteoWeatherService";
import { TauriNotificationService } from "./tauriNotificationService";

let managerPromise: Promise<GardenManager> | null = null;

export function createDesktopGardenManager(): Promise<GardenManager> {
  if (!managerPromise) {
    managerPromise = buildManager();
  }

  return managerPromise;
}

async function buildManager(): Promise<GardenManager> {
  const client = await createTauriSqlClient();

  return new GardenManager({
    plantingRepository: new SqlitePlantingRepository(client),
    wateringRepository: new SqliteWateringRepository(client),
    settingsRepository: new SqliteSettingsRepository(client),
    weatherRepository: new SqliteWeatherRepository(client),
    scheduleRepository: new SqliteScheduleRepository(client),
    weatherService: new OpenMeteoWeatherService(),
    notificationService: new TauriNotificationService(),
  });
}
```

## File: src/services/gardenManager.test.ts
```typescript
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
```

## File: src/services/gardenManager.ts
```typescript
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
```

## File: src/services/locationService.ts
```typescript
export interface CurrentLocation {
  latitude: number;
  longitude: number;
  timezone: string;
  locationLabel: string;
}

export interface LocationService {
  detectCurrentLocation(): Promise<CurrentLocation>;
}
```

## File: src/services/openMeteoWeatherService.ts
```typescript
import type { WeatherService } from "../domain/ports";
import type { GardenSettings, WeatherCacheRecord } from "../domain/types";

interface OpenMeteoHourlyPayload {
  time: number[];
  precipitation: number[];
  temperature_2m: number[];
  wind_speed_10m: number[];
}

interface OpenMeteoResponse {
  hourly: OpenMeteoHourlyPayload;
}

export class OpenMeteoWeatherService implements WeatherService {
  async fetch(settings: GardenSettings): Promise<WeatherCacheRecord> {
    const now = new Date();
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?" +
        new URLSearchParams({
          latitude: String(settings.latitude),
          longitude: String(settings.longitude),
          timezone: settings.timezone,
          past_days: "1",
          forecast_days: "2",
          timeformat: "unixtime",
          hourly: "precipitation,temperature_2m,wind_speed_10m",
        }).toString(),
    );

    if (!response.ok) {
      throw new Error(`Weather request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as OpenMeteoResponse;
    const nowSeconds = Math.floor(now.getTime() / 1000);
    const pastWindowStart = nowSeconds - 24 * 60 * 60;
    const nextWindowEnd = nowSeconds + 24 * 60 * 60;

    let past24hRainMm = 0;
    let next24hRainMm = 0;
    let maxTempC = Number.NEGATIVE_INFINITY;
    let maxWindKph = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < payload.hourly.time.length; index += 1) {
      const pointTime = payload.hourly.time[index];
      const precipitation = payload.hourly.precipitation[index] ?? 0;
      const temperature = payload.hourly.temperature_2m[index] ?? 0;
      const wind = payload.hourly.wind_speed_10m[index] ?? 0;

      if (pointTime > pastWindowStart && pointTime <= nowSeconds) {
        past24hRainMm += precipitation;
      }

      if (pointTime > nowSeconds && pointTime <= nextWindowEnd) {
        next24hRainMm += precipitation;
        maxTempC = Math.max(maxTempC, temperature);
        maxWindKph = Math.max(maxWindKph, wind);
      }
    }

    return {
      locationLabel: settings.locationLabel,
      latitude: settings.latitude,
      longitude: settings.longitude,
      timezone: settings.timezone,
      past24hRainMm: roundMetric(past24hRainMm),
      next24hRainMm: roundMetric(next24hRainMm),
      maxTempC: maxTempC === Number.NEGATIVE_INFINITY ? 0 : roundMetric(maxTempC),
      maxWindKph:
        maxWindKph === Number.NEGATIVE_INFINITY ? 0 : roundMetric(maxWindKph),
      fetchedAt: now.toISOString(),
      isStale: false,
      payloadJson: JSON.stringify(payload),
    };
  }
}

function roundMetric(value: number): number {
  return Math.round(value * 10) / 10;
}
```

## File: src/services/runtimeLocationService.test.ts
```typescript
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

const mockIsTauri = vi.fn();
const mockCheckPermissions = vi.fn();
const mockRequestPermissions = vi.fn();
const mockGetCurrentPosition = vi.fn();

vi.mock("@tauri-apps/api/core", () => ({
  isTauri: mockIsTauri,
}));

vi.mock("@tauri-apps/plugin-geolocation", () => ({
  checkPermissions: mockCheckPermissions,
  requestPermissions: mockRequestPermissions,
  getCurrentPosition: mockGetCurrentPosition,
}));

describe("RuntimeLocationService", () => {
  beforeEach(() => {
    mockIsTauri.mockReset();
    mockCheckPermissions.mockReset();
    mockRequestPermissions.mockReset();
    mockGetCurrentPosition.mockReset();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("requests permission in tauri before reading the current position", async () => {
    mockIsTauri.mockReturnValue(true);
    mockCheckPermissions.mockResolvedValue({
      location: "prompt",
      coarseLocation: "prompt",
    });
    mockRequestPermissions.mockResolvedValue({
      location: "granted",
      coarseLocation: "granted",
    });
    mockGetCurrentPosition.mockResolvedValue({
      coords: {
        latitude: 43.615,
        longitude: -116.2023,
      },
    });

    vi.stubGlobal("Intl", {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({
          timeZone: "America/Boise",
        }),
      }),
    });

    const { RuntimeLocationService } = await import("./runtimeLocationService");
    const service = new RuntimeLocationService();

    await expect(service.detectCurrentLocation()).resolves.toEqual({
      latitude: 43.615,
      longitude: -116.2023,
      timezone: "America/Boise",
      locationLabel: "Current location",
    });

    expect(mockCheckPermissions).toHaveBeenCalledTimes(1);
    expect(mockRequestPermissions).toHaveBeenCalledWith(["location"]);
    expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
  });

  test("explains how to unblock location access when permission is denied", async () => {
    mockIsTauri.mockReturnValue(true);
    mockCheckPermissions.mockResolvedValue({
      location: "denied",
      coarseLocation: "denied",
    });

    const { RuntimeLocationService } = await import("./runtimeLocationService");
    const service = new RuntimeLocationService();

    await expect(service.detectCurrentLocation()).rejects.toThrow(
      "Location access is blocked. Enable Gardener in System Settings > Privacy & Security > Location Services, then try again.",
    );

    expect(mockRequestPermissions).not.toHaveBeenCalled();
    expect(mockGetCurrentPosition).not.toHaveBeenCalled();
  });

  test("maps plugin permission errors that are returned as strings", async () => {
    mockIsTauri.mockReturnValue(true);
    mockCheckPermissions.mockRejectedValue(
      "Location permissions are managed in System Settings.",
    );

    const { RuntimeLocationService } = await import("./runtimeLocationService");
    const service = new RuntimeLocationService();

    await expect(service.detectCurrentLocation()).rejects.toThrow(
      "Location access is blocked. Enable Gardener in System Settings > Privacy & Security > Location Services, then try again.",
    );
  });
});
```

## File: src/services/runtimeLocationService.ts
```typescript
import { isTauri } from "@tauri-apps/api/core";
import {
  checkPermissions,
  getCurrentPosition,
  requestPermissions,
} from "@tauri-apps/plugin-geolocation";
import { BrowserLocationService } from "./browserLocationService";
import type { CurrentLocation, LocationService } from "./locationService";

const LOCATION_LABEL = "Current location";
const LOCATION_BLOCKED_MESSAGE =
  "Location access is blocked. Enable Gardener in System Settings > Privacy & Security > Location Services, then try again.";

export class RuntimeLocationService implements LocationService {
  private readonly browserLocationService = new BrowserLocationService();

  async detectCurrentLocation(): Promise<CurrentLocation> {
    if (!isTauri()) {
      return this.browserLocationService.detectCurrentLocation();
    }

    try {
      let permissions = await checkPermissions();

      if (
        permissions.location === "prompt" ||
        permissions.location === "prompt-with-rationale"
      ) {
        permissions = await requestPermissions(["location"]);
      }

      if (permissions.location !== "granted") {
        throw new Error(LOCATION_BLOCKED_MESSAGE);
      }

      const position = await getCurrentPosition({
        enableHighAccuracy: false,
        maximumAge: 5 * 60 * 1000,
        timeout: 10_000,
      });

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timezone: getCurrentTimezone(),
        locationLabel: LOCATION_LABEL,
      };
    } catch (cause) {
      throw new Error(mapLocationError(cause));
    }
  }
}

function getCurrentTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function mapLocationError(cause: unknown): string {
  const originalMessage = getErrorMessage(cause);
  const message = originalMessage.toLowerCase();

  if (message.includes("denied") || message.includes("permission")) {
    return LOCATION_BLOCKED_MESSAGE;
  }

  if (message.includes("privacy") || message.includes("system settings")) {
    return LOCATION_BLOCKED_MESSAGE;
  }

  if (message.includes("timeout")) {
    return "Location detection timed out. Try again.";
  }

  if (message.includes("position") || message.includes("location")) {
    return "Your device could not determine its current location.";
  }

  return originalMessage;
}

function getErrorMessage(cause: unknown): string {
  if (cause instanceof Error) {
    return cause.message;
  }

  if (typeof cause === "string" && cause.trim()) {
    return cause;
  }

  if (
    typeof cause === "object" &&
    cause !== null &&
    "message" in cause &&
    typeof cause.message === "string" &&
    cause.message.trim()
  ) {
    return cause.message;
  }

  try {
    const serialized = JSON.stringify(cause);

    return serialized && serialized !== "{}"
      ? serialized
      : "Location detection failed.";
  } catch {
    return "Location detection failed.";
  }
}
```

## File: src/services/tauriNotificationService.ts
```typescript
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
import type { DueDigest, NotificationService } from "../domain/ports";

export class TauriNotificationService implements NotificationService {
  async notifyDueDigest(input: DueDigest): Promise<void> {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (!permissionGranted) {
      return;
    }

    sendNotification({
      title: input.title,
      body: input.body,
    });
  }
}
```

## File: src/test/setup.ts
```typescript
import "@testing-library/jest-dom/vitest";
```

## File: src/App.css
```css
#root {
  min-height: 100vh;
}
```

## File: src/App.test.tsx
```typescript
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
```

## File: src/App.tsx
```typescript
import { useEffect, useEffectEvent, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Switch,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import { format, formatDistanceToNowStrict } from "date-fns";
import { locationIntervalHints, locationLabels } from "./domain/defaults";
import type { LocationType, PlantingEntry } from "./domain/types";
import { createDesktopGardenManager } from "./services/createDesktopGardenManager";
import type {
  DashboardItem,
  GardenAppState,
  GardenManager,
} from "./services/gardenManager";
import type { LocationService } from "./services/locationService";
import { RuntimeLocationService } from "./services/runtimeLocationService";
import { appTheme } from "./theme";

type AppScreen = "dashboard" | "plantings" | "history" | "settings";

interface PlantingDraft {
  displayName: string;
  species: string;
  quantity: string;
  locationType: LocationType;
  zoneName: string;
  baseIntervalDays: string;
  notes: string;
}

interface SettingsDraft {
  locationLabel: string;
  latitude: string;
  longitude: string;
  timezone: string;
  notificationsEnabled: boolean;
}

interface AppProps {
  manager?: GardenManager;
  locationService?: LocationService;
  initialScreen?: AppScreen;
}

function App({
  manager,
  locationService,
  initialScreen = "dashboard",
}: AppProps) {
  const [resolvedManager, setResolvedManager] = useState<GardenManager | null>(
    manager ?? null,
  );
  const [resolvedLocationService] = useState<LocationService>(
    () => locationService ?? new RuntimeLocationService(),
  );
  const [activeScreen, setActiveScreen] = useState<AppScreen>(initialScreen);
  const [appState, setAppState] = useState<GardenAppState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyLabel, setBusyLabel] = useState<string | null>(null);
  const [settingsDraft, setSettingsDraft] = useState<SettingsDraft>(
    createSettingsDraft(),
  );
  const [isPlantingDialogOpen, setIsPlantingDialogOpen] = useState(false);
  const [editingPlantingId, setEditingPlantingId] = useState<string | null>(null);
  const [plantingDraft, setPlantingDraft] = useState<PlantingDraft>(
    createPlantingDraft(),
  );

  useEffect(() => {
    let active = true;

    if (manager) {
      setResolvedManager(manager);
      return () => {
        active = false;
      };
    }

    void (async () => {
      const desktopManager = await createDesktopGardenManager();

      if (active) {
        setResolvedManager(desktopManager);
      }
    })();

    return () => {
      active = false;
    };
  }, [manager]);

  const loadState = useEffectEvent(async () => {
    if (!resolvedManager) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const nextState = await resolvedManager.loadState();
      setAppState(nextState);
      setSettingsDraft(createSettingsDraft(nextState));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    if (!resolvedManager) {
      return;
    }

    void loadState();
  }, [resolvedManager]);

  const handleForegroundRefresh = useEffectEvent(async () => {
    if (!resolvedManager || isLoading) {
      return;
    }

    await loadState();
  });

  useEffect(() => {
    const onFocus = () => {
      void handleForegroundRefresh();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void handleForegroundRefresh();
      }
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  async function runAction(
    label: string,
    action: () => Promise<GardenAppState>,
  ): Promise<void> {
    setBusyLabel(label);
    setError(null);

    try {
      const nextState = await action();
      setAppState(nextState);
      setSettingsDraft(createSettingsDraft(nextState));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setBusyLabel(null);
    }
  }

  function openCreatePlantingDialog(): void {
    setEditingPlantingId(null);
    setPlantingDraft(createPlantingDraft());
    setIsPlantingDialogOpen(true);
  }

  function openEditPlantingDialog(planting: PlantingEntry): void {
    setEditingPlantingId(planting.id);
    setPlantingDraft(createPlantingDraft(planting));
    setIsPlantingDialogOpen(true);
  }

  async function handleSavePlanting(): Promise<void> {
    if (!resolvedManager) {
      return;
    }

    const payload = {
      displayName: plantingDraft.displayName.trim(),
      species: plantingDraft.species.trim(),
      quantity: Number(plantingDraft.quantity),
      locationType: plantingDraft.locationType,
      zoneName: plantingDraft.zoneName.trim() || null,
      baseIntervalDays: Number(plantingDraft.baseIntervalDays),
      notes: plantingDraft.notes.trim() || null,
    };

    if (!payload.displayName || !payload.species || Number.isNaN(payload.quantity)) {
      setError("Display name, species, and quantity are required.");
      return;
    }

    if (Number.isNaN(payload.baseIntervalDays) || payload.baseIntervalDays < 1) {
      setError("Base interval days must be at least 1.");
      return;
    }

    if (editingPlantingId) {
      const existing = appState?.plantings.find(
        (planting) => planting.id === editingPlantingId,
      );

      if (!existing) {
        setError("The planting you tried to edit no longer exists.");
        return;
      }

      await runAction("Saving planting", () =>
        resolvedManager.updatePlanting(editingPlantingId, {
          ...existing,
          ...payload,
        }),
      );
    } else {
      await runAction("Saving planting", () => resolvedManager.createPlanting(payload));
    }

    setIsPlantingDialogOpen(false);
    setActiveScreen("plantings");
  }

  async function handleSaveSettings(): Promise<void> {
    if (!resolvedManager) {
      return;
    }

    const latitude = Number(settingsDraft.latitude);
    const longitude = Number(settingsDraft.longitude);

    if (
      !settingsDraft.locationLabel.trim() ||
      Number.isNaN(latitude) ||
      Number.isNaN(longitude) ||
      !settingsDraft.timezone.trim()
    ) {
      setError("Location label, latitude, longitude, and timezone are required.");
      return;
    }

    await runAction("Saving settings", () =>
      resolvedManager.saveSettings({
        latitude,
        longitude,
        timezone: settingsDraft.timezone.trim(),
        locationLabel: settingsDraft.locationLabel.trim(),
        notificationsEnabled: settingsDraft.notificationsEnabled,
        lastWeatherSyncAt: appState?.settings?.lastWeatherSyncAt ?? null,
      }),
    );
  }

  async function handleUseCurrentLocation(): Promise<void> {
    setBusyLabel("Detecting location");
    setError(null);

    try {
      const location = await resolvedLocationService.detectCurrentLocation();

      setSettingsDraft((current) => ({
        ...current,
        locationLabel: location.locationLabel,
        latitude: String(location.latitude),
        longitude: String(location.longitude),
        timezone: location.timezone,
      }));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setBusyLabel(null);
    }
  }

  const shellContent =
    !resolvedManager || (isLoading && !appState) ? (
      <LoadingShell />
    ) : (
      <Box
        sx={{
          minHeight: "100vh",
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "280px minmax(0, 1fr)" },
            gap: 2,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "rgba(247, 242, 232, 0.82)",
              backdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="overline" sx={{ color: "text.secondary" }}>
                Garden Watering Tracker
              </Typography>
              <Typography variant="h2">Gardener</Typography>
              <Typography color="text.secondary">
                Soil-aware reminders for pots, beds, and in-ground plantings.
              </Typography>
            </Stack>
            <Divider />
            <Stack
              component="nav"
              aria-label="Primary navigation"
              direction={{ xs: "row", lg: "column" }}
              spacing={1}
              flexWrap="wrap"
            >
              {navigationItems.map((item) => {
                const selected = activeScreen === item.value;

                return (
                  <Button
                    key={item.value}
                    color={selected ? "primary" : "inherit"}
                    variant={selected ? "contained" : "text"}
                    startIcon={<item.icon />}
                    onClick={() => setActiveScreen(item.value)}
                    sx={{
                      justifyContent: "flex-start",
                      color: selected ? "primary.contrastText" : "text.primary",
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
            <Box sx={{ mt: "auto" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "rgba(48, 95, 77, 0.08)",
                }}
              >
                <Typography variant="subtitle2">Reminder posture</Typography>
                <Typography variant="body2" color="text.secondary">
                  Notifications send only while the app is open, and the next digest
                  waits for real schedule changes.
                </Typography>
              </Paper>
            </Box>
          </Paper>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <Header
              activeScreen={activeScreen}
              onAddPlanting={openCreatePlantingDialog}
              isBusy={Boolean(busyLabel)}
              lastSyncAt={appState?.settings?.lastWeatherSyncAt ?? null}
            />
            {appState ? (
              <ScreenContent
                activeScreen={activeScreen}
                state={appState}
                settingsDraft={settingsDraft}
                isBusy={Boolean(busyLabel)}
                onChangeSettings={setSettingsDraft}
                onEditPlanting={openEditPlantingDialog}
                onArchivePlanting={(plantingId) =>
                  void runAction("Archiving planting", () =>
                    resolvedManager.archivePlanting(plantingId),
                  )
                }
                onWaterNow={(plantingId) =>
                  void runAction("Logging watering", () =>
                    resolvedManager.waterNow(plantingId),
                  )
                }
                onSaveSettings={() => void handleSaveSettings()}
                onUseCurrentLocation={() => void handleUseCurrentLocation()}
                onRefreshWeather={() => void runAction("Refreshing weather", () => resolvedManager.loadState())}
                onAddPlanting={openCreatePlantingDialog}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {shellContent}
      <PlantingDialog
        open={isPlantingDialogOpen}
        draft={plantingDraft}
        editing={Boolean(editingPlantingId)}
        onClose={() => setIsPlantingDialogOpen(false)}
        onChange={setPlantingDraft}
        onSave={() => void handleSavePlanting()}
      />
    </ThemeProvider>
  );
}

function LoadingShell() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          px: 4,
          py: 5,
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
          bgcolor: "rgba(247, 242, 232, 0.84)",
        }}
      >
        <CircularProgress size={30} />
        <Typography variant="h3" sx={{ mt: 2 }}>
          Preparing your watering board
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Loading plantings, weather, and today&apos;s due list.
        </Typography>
      </Paper>
    </Box>
  );
}

function Header(props: {
  activeScreen: AppScreen;
  onAddPlanting: () => void;
  isBusy: boolean;
  lastSyncAt: string | null;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.3rem" } }}>
            {screenTitles[props.activeScreen]}
          </Typography>
          <Typography color="text.secondary">
            {props.lastSyncAt
              ? `Last weather sync ${formatDistanceToNowStrict(new Date(props.lastSyncAt), {
                  addSuffix: true,
                })}`
              : "No weather sync yet"}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={props.onAddPlanting}
          disabled={props.isBusy}
        >
          Add Planting
        </Button>
      </Stack>
    </Paper>
  );
}

function ScreenContent(props: {
  activeScreen: AppScreen;
  state: GardenAppState;
  settingsDraft: SettingsDraft;
  isBusy: boolean;
  onChangeSettings: React.Dispatch<React.SetStateAction<SettingsDraft>>;
  onWaterNow: (plantingId: string) => void;
  onEditPlanting: (planting: PlantingEntry) => void;
  onArchivePlanting: (plantingId: string) => void;
  onSaveSettings: () => void;
  onUseCurrentLocation: () => void;
  onRefreshWeather: () => void;
  onAddPlanting: () => void;
}) {
  if (props.activeScreen === "dashboard") {
    return (
      <Stack spacing={2}>
        <WeatherStrip weather={props.state.weather} />
        <ScheduleSection
          title="Overdue"
          items={props.state.dashboard.overdue}
          emptyCopy="Nothing has slipped past its watering window."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
        <ScheduleSection
          title="Due Today"
          items={props.state.dashboard.dueToday}
          emptyCopy="Nothing needs water today."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
        <ScheduleSection
          title="Upcoming"
          items={props.state.dashboard.upcoming}
          emptyCopy="Add a planting to start building a schedule."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
      </Stack>
    );
  }

  if (props.activeScreen === "plantings") {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.86)",
        }}
      >
        <Stack spacing={2}>
          {props.state.plantings.length === 0 ? (
            <EmptyPanel
              title="No plantings yet"
              body="Start with a few grouped entries, then let weather and watering history tune the dashboard."
              actionLabel="Add Planting"
              onAction={props.onAddPlanting}
            />
          ) : (
            props.state.plantings.map((planting) => {
              const snapshot = props.state.snapshots.find(
                (item) => item.plantingId === planting.id,
              );

              return (
                <PlantingCard
                  key={planting.id}
                  planting={planting}
                  snapshotSummary={snapshot?.adjustmentReason ?? "No weather adjustment"}
                  cadenceLabel={`Every ${planting.baseIntervalDays} day${
                    planting.baseIntervalDays === 1 ? "" : "s"
                  }`}
                  onEdit={() => props.onEditPlanting(planting)}
                  onArchive={() => props.onArchivePlanting(planting.id)}
                />
              );
            })
          )}
        </Stack>
      </Paper>
    );
  }

  if (props.activeScreen === "history") {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.86)",
        }}
      >
        {props.state.history.length === 0 ? (
          <EmptyPanel
            title="No watering history"
            body="Use the dashboard quick action to log the next watering and build your recent timeline."
          />
        ) : (
          <List aria-label="Watering history" sx={{ p: 0 }}>
            {props.state.history.map((historyItem) => (
              <ListItem
                key={historyItem.event.id}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  alignItems: "flex-start",
                }}
              >
                <ListItemText
                  primary={historyItem.plantingDisplayName}
                  secondary={`${format(
                    new Date(historyItem.event.wateredAt),
                    "MMM d, yyyy h:mm a",
                  )}${
                    historyItem.event.note ? ` • ${historyItem.event.note}` : ""
                  }`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack spacing={3}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3">Garden settings</Typography>
            <Typography color="text.secondary">
              One location drives weather adjustments for the whole garden.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="text"
              onClick={props.onUseCurrentLocation}
              disabled={props.isBusy}
            >
              Use current location
            </Button>
            <Button
              variant="outlined"
              onClick={props.onRefreshWeather}
              disabled={props.isBusy}
            >
              Refresh weather
            </Button>
            <Button
              variant="contained"
              onClick={props.onSaveSettings}
              disabled={props.isBusy}
            >
              Save settings
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          <TextField
            label="Location label"
            value={props.settingsDraft.locationLabel}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                locationLabel: event.target.value,
              }))
            }
          />
          <TextField
            label="Timezone"
            value={props.settingsDraft.timezone}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                timezone: event.target.value,
              }))
            }
          />
          <TextField
            label="Latitude"
            value={props.settingsDraft.latitude}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                latitude: event.target.value,
              }))
            }
          />
          <TextField
            label="Longitude"
            value={props.settingsDraft.longitude}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                longitude: event.target.value,
              }))
            }
          />
        </Box>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 4,
            border: "1px dashed",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Desktop notifications</Typography>
            <Typography color="text.secondary">
              Ask for permission once, then only send digests when the due list changes.
            </Typography>
          </Box>
          <Switch
            checked={props.settingsDraft.notificationsEnabled}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                notificationsEnabled: event.target.checked,
              }))
            }
          />
        </Paper>
      </Stack>
    </Paper>
  );
}

function WeatherStrip(props: { weather: GardenAppState["weather"] }) {
  if (!props.weather) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          border: "1px dashed",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.78)",
        }}
      >
        <Typography variant="subtitle1">Weather adjustments are waiting on a garden location.</Typography>
        <Typography color="text.secondary">
          Save a latitude, longitude, and timezone in Settings, or use current location, to start weather-aware due dates.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(48, 95, 77, 0.08)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
      >
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
              {props.weather.locationLabel}
            </Typography>
            {props.weather.isStale ? <Chip label="Stale" color="warning" size="small" /> : null}
          </Stack>
          <Typography color="text.secondary">
            Synced {formatDistanceToNowStrict(new Date(props.weather.fetchedAt), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <MetricChip label={`Rain (24h) ${props.weather.past24hRainMm}mm`} />
          <MetricChip label={`Rain (next) ${props.weather.next24hRainMm}mm`} />
          <MetricChip label={`High ${props.weather.maxTempC}°C`} />
          <MetricChip label={`Wind ${props.weather.maxWindKph}kph`} />
        </Stack>
      </Stack>
    </Paper>
  );
}

function MetricChip(props: { label: string }) {
  return (
    <Chip
      label={props.label}
      sx={{
        bgcolor: "rgba(247, 242, 232, 0.9)",
        border: "1px solid",
        borderColor: "divider",
      }}
    />
  );
}

function ScheduleSection(props: {
  title: string;
  items: DashboardItem[];
  emptyCopy: string;
  onWaterNow: (plantingId: string) => void;
  onEditPlanting: (planting: PlantingEntry) => void;
  onArchivePlanting: (plantingId: string) => void;
}) {
  return (
    <Paper
      component="section"
      role="region"
      aria-label={props.title}
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{props.title}</Typography>
          <Chip
            label={`${props.items.length} entries`}
            color={props.title === "Overdue" ? "error" : "default"}
          />
        </Stack>
        {props.items.length === 0 ? (
          <Typography color="text.secondary">{props.emptyCopy}</Typography>
        ) : (
          props.items.map((item) => (
            <ScheduleCard
              key={item.planting.id}
              item={item}
              onWaterNow={() => props.onWaterNow(item.planting.id)}
              onEdit={() => props.onEditPlanting(item.planting)}
              onArchive={() => props.onArchivePlanting(item.planting.id)}
            />
          ))
        )}
      </Stack>
    </Paper>
  );
}

function ScheduleCard(props: {
  item: DashboardItem;
  onWaterNow: () => void;
  onEdit: () => void;
  onArchive: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.25,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,255,255,0.52)",
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1.5}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
              {props.item.planting.displayName}
            </Typography>
            <Typography color="text.secondary">
              {props.item.planting.species} • {props.item.planting.quantity} in{" "}
              {locationLabels[props.item.planting.locationType].toLowerCase()}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={`Due ${format(new Date(props.item.schedule.effectiveDueAt), "MMM d")}`} />
            <Chip
              label={`Every ${props.item.planting.baseIntervalDays} day${
                props.item.planting.baseIntervalDays === 1 ? "" : "s"
              }`}
            />
          </Stack>
        </Stack>
        <Typography color="text.secondary">
          {props.item.schedule.adjustmentReason ?? "No weather adjustment in effect"}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<OpacityRoundedIcon />}
            onClick={props.onWaterNow}
          >
            Watered now
          </Button>
          <Button
            variant="outlined"
            startIcon={<EditRoundedIcon />}
            onClick={props.onEdit}
          >
            Edit
          </Button>
          <Button variant="text" color="inherit" onClick={props.onArchive}>
            Archive
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

function PlantingCard(props: {
  planting: PlantingEntry;
  cadenceLabel: string;
  snapshotSummary: string;
  onEdit: () => void;
  onArchive: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.25,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,255,255,0.52)",
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
              {props.planting.displayName}
            </Typography>
            <Typography color="text.secondary">
              {props.planting.species} • {props.planting.quantity} •{" "}
              {locationLabels[props.planting.locationType]}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={locationLabels[props.planting.locationType]} />
            <Chip label={props.cadenceLabel} />
          </Stack>
        </Stack>
        <Typography color="text.secondary">{props.snapshotSummary}</Typography>
        {props.planting.zoneName ? (
          <Typography color="text.secondary">
            Zone: {props.planting.zoneName}
          </Typography>
        ) : null}
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={props.onEdit}>
            Edit
          </Button>
          <Button variant="text" color="inherit" onClick={props.onArchive}>
            Archive
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

function EmptyPanel(props: {
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px dashed",
        borderColor: "divider",
        textAlign: "center",
        bgcolor: "rgba(255,255,255,0.32)",
      }}
    >
      <Typography variant="h3">{props.title}</Typography>
      <Typography color="text.secondary" sx={{ mt: 1.5, mb: props.actionLabel ? 2 : 0 }}>
        {props.body}
      </Typography>
      {props.actionLabel && props.onAction ? (
        <Button variant="contained" onClick={props.onAction}>
          {props.actionLabel}
        </Button>
      ) : null}
    </Paper>
  );
}

function PlantingDialog(props: {
  open: boolean;
  draft: PlantingDraft;
  editing: boolean;
  onClose: () => void;
  onChange: React.Dispatch<React.SetStateAction<PlantingDraft>>;
  onSave: () => void;
}) {
  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="sm">
      <DialogTitle>{props.editing ? "Edit planting" : "Add planting"}</DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Display name"
            value={props.draft.displayName}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                displayName: event.target.value,
              }))
            }
          />
          <TextField
            label="Species"
            value={props.draft.species}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                species: event.target.value,
              }))
            }
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 2,
            }}
          >
            <TextField
              label="Quantity"
              type="number"
              value={props.draft.quantity}
              onChange={(event) =>
                props.onChange((current) => ({
                  ...current,
                  quantity: event.target.value,
                }))
              }
            />
            <TextField
              label="Base interval days"
              type="number"
              value={props.draft.baseIntervalDays}
              onChange={(event) =>
                props.onChange((current) => ({
                  ...current,
                  baseIntervalDays: event.target.value,
                }))
              }
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Location
            </Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={props.draft.locationType}
              onChange={(_, nextValue: LocationType | null) => {
                if (!nextValue) {
                  return;
                }

                props.onChange((current) => ({
                  ...current,
                  locationType: nextValue,
                  baseIntervalDays:
                    props.editing && current.baseIntervalDays
                      ? current.baseIntervalDays
                      : String(locationIntervalHints[nextValue]),
                }));
              }}
            >
              {(["pot", "bed", "ground"] as LocationType[]).map((value) => (
                <ToggleButton key={value} value={value} aria-label={locationLabels[value]}>
                  {locationLabels[value]}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <TextField
            label="Zone name"
            value={props.draft.zoneName}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                zoneName: event.target.value,
              }))
            }
          />
          <TextField
            label="Notes"
            multiline
            minRows={3}
            value={props.draft.notes}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                notes: event.target.value,
              }))
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button variant="contained" onClick={props.onSave}>
          Save planting
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function createPlantingDraft(entry?: PlantingEntry): PlantingDraft {
  if (entry) {
    return {
      displayName: entry.displayName,
      species: entry.species,
      quantity: String(entry.quantity),
      locationType: entry.locationType,
      zoneName: entry.zoneName ?? "",
      baseIntervalDays: String(entry.baseIntervalDays),
      notes: entry.notes ?? "",
    };
  }

  return {
    displayName: "",
    species: "",
    quantity: "1",
    locationType: "pot",
    zoneName: "",
    baseIntervalDays: String(locationIntervalHints.pot),
    notes: "",
  };
}

function createSettingsDraft(state?: GardenAppState | null): SettingsDraft {
  return {
    locationLabel: state?.settings?.locationLabel ?? "",
    latitude: state?.settings ? String(state.settings.latitude) : "",
    longitude: state?.settings ? String(state.settings.longitude) : "",
    timezone: state?.settings?.timezone ?? "America/Boise",
    notificationsEnabled: state?.settings?.notificationsEnabled ?? false,
  };
}

function getErrorMessage(cause: unknown): string {
  if (cause instanceof Error) {
    return cause.message;
  }

  if (typeof cause === "string" && cause.trim()) {
    return cause;
  }

  if (
    typeof cause === "object" &&
    cause !== null &&
    "message" in cause &&
    typeof cause.message === "string" &&
    cause.message.trim()
  ) {
    return cause.message;
  }

  try {
    const serialized = JSON.stringify(cause);

    return serialized && serialized !== "{}"
      ? serialized
      : "Something went wrong.";
  } catch {
    return "Something went wrong.";
  }
}

const navigationItems: Array<{
  label: string;
  value: AppScreen;
  icon: typeof TimelineRoundedIcon;
}> = [
  { label: "Dashboard", value: "dashboard", icon: TimelineRoundedIcon },
  { label: "Plantings", value: "plantings", icon: LocalFloristRoundedIcon },
  { label: "History", value: "history", icon: WaterDropRoundedIcon },
  { label: "Settings", value: "settings", icon: SettingsRoundedIcon },
];

const screenTitles: Record<AppScreen, string> = {
  dashboard: "Watering Board",
  plantings: "Plantings",
  history: "History",
  settings: "Settings",
};

export default App;
```

## File: src/main.tsx
```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/work-sans";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## File: src/theme.ts
```typescript
import { alpha, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#305f4d",
      dark: "#1f4536",
      light: "#4c816c",
      contrastText: "#f7f2e8",
    },
    secondary: {
      main: "#c56e3f",
      dark: "#9d522d",
      light: "#df9166",
    },
    background: {
      default: "#f2ece1",
      paper: "#f7f2e8",
    },
    text: {
      primary: "#1f2a22",
      secondary: "#5c675e",
    },
    divider: alpha("#305f4d", 0.16),
    success: {
      main: "#4b7f4d",
    },
    warning: {
      main: "#b1781d",
    },
    error: {
      main: "#b14c3a",
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily: '"Work Sans Variable", "Work Sans", sans-serif',
    h1: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "3rem",
      fontWeight: 650,
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "1.8rem",
      fontWeight: 620,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Fraunces Variable", "Fraunces", serif',
      fontSize: "1.35rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--soil-base": "#f2ece1",
          "--soil-warm": "#e6d5be",
          "--leaf-deep": "#264638",
          "--leaf-soft": "#a8c6aa",
          "--accent-clay": "#c56e3f",
        },
        "html, body, #root": {
          minHeight: "100%",
        },
        body: {
          margin: 0,
          backgroundColor: "var(--soil-base)",
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(211, 145, 95, 0.26), transparent 28%),
            radial-gradient(circle at 85% 15%, rgba(68, 108, 84, 0.20), transparent 32%),
            linear-gradient(145deg, rgba(255,255,255,0.68), rgba(255,255,255,0)),
            linear-gradient(180deg, #f5efe6 0%, #efe7db 100%)
          `,
          color: "#1f2a22",
        },
        "*": {
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          width: 10,
          height: 10,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: alpha("#305f4d", 0.28),
          borderRadius: 999,
        },
        "::selection": {
          backgroundColor: alpha("#c56e3f", 0.28),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#ffffff", 0.58),
        },
      },
    },
  },
});
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: src-tauri/capabilities/default.json
```json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": [
    "main"
  ],
  "permissions": [
    "core:default",
    "opener:default",
    "sql:default",
    "sql:allow-execute",
    "notification:default",
    "geolocation:default"
  ]
}
```

## File: src-tauri/migrations/0001_create_core_tables.sql
```sql
CREATE TABLE IF NOT EXISTS plantings (
  id TEXT PRIMARY KEY NOT NULL,
  display_name TEXT NOT NULL,
  species TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  location_type TEXT NOT NULL CHECK (location_type IN ('pot', 'bed', 'ground')),
  zone_name TEXT,
  base_interval_days INTEGER NOT NULL,
  notes TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  archived_at TEXT
);

CREATE TABLE IF NOT EXISTS watering_events (
  id TEXT PRIMARY KEY NOT NULL,
  planting_id TEXT NOT NULL,
  watered_at TEXT NOT NULL,
  note TEXT,
  FOREIGN KEY (planting_id) REFERENCES plantings(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_watering_events_planting_time
  ON watering_events (planting_id, watered_at DESC);

CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  timezone TEXT NOT NULL,
  location_label TEXT NOT NULL,
  notifications_enabled INTEGER NOT NULL DEFAULT 1,
  last_weather_sync_at TEXT
);

CREATE TABLE IF NOT EXISTS weather_cache (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  location_label TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  timezone TEXT NOT NULL,
  past_24h_rain_mm REAL NOT NULL,
  next_24h_rain_mm REAL NOT NULL,
  max_temp_c REAL NOT NULL,
  max_wind_kph REAL NOT NULL,
  fetched_at TEXT NOT NULL,
  is_stale INTEGER NOT NULL DEFAULT 0,
  payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS schedule_snapshots (
  planting_id TEXT PRIMARY KEY NOT NULL,
  baseline_due_at TEXT NOT NULL,
  effective_due_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('overdue', 'due_today', 'upcoming')),
  adjustment_reason TEXT,
  FOREIGN KEY (planting_id) REFERENCES plantings(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_schedule_snapshots_status_due
  ON schedule_snapshots (status, effective_due_at ASC);
```

## File: src-tauri/src/lib.rs
```rust
use tauri_plugin_sql::{Migration, MigrationKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_geolocation::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(
            tauri_plugin_sql::Builder::new()
                .add_migrations(
                    "sqlite:app.db",
                    vec![Migration {
                        version: 1,
                        description: "create_core_tables",
                        sql: include_str!("../migrations/0001_create_core_tables.sql"),
                        kind: MigrationKind::Up,
                    }],
                )
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## File: src-tauri/src/main.rs
```rust
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri_app_lib::run()
}
```

## File: src-tauri/.gitignore
```
# Generated by Cargo
# will have compiled files and executables
/target/

# Generated by Tauri
# will have schema files for capabilities auto-completion
/gen/schemas
```

## File: src-tauri/build.rs
```rust
fn main() {
    tauri_build::build()
}
```

## File: src-tauri/Cargo.toml
```toml
[package]
name = "tauri-app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "tauri_app_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
tauri-plugin-sql = { version = "2", features = ["sqlite"] }
tauri-plugin-notification = "2"
tauri-plugin-geolocation = "2"
```

## File: src-tauri/Info.plist
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>NSLocationUsageDescription</key>
  <string>Gardener uses your location to fetch local weather and adjust watering due dates for your garden.</string>
</dict>
</plist>
```

## File: src-tauri/tauri.conf.json
```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "Gardener",
  "version": "0.1.0",
  "identifier": "com.mike.gardener",
  "build": {
    "beforeDevCommand": "npm run dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "npm run build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "tauri-app",
        "title": "Gardener",
        "width": 1440,
        "height": 940,
        "minWidth": 1120,
        "minHeight": 760
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tauri + React + Typescript</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: package.json
```json
{
  "name": "gardener",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run",
    "tauri": "tauri"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@fontsource-variable/fraunces": "^5.2.9",
    "@fontsource-variable/work-sans": "^5.2.8",
    "@mui/icons-material": "^7.3.10",
    "@mui/material": "^7.3.10",
    "@tauri-apps/api": "^2",
    "@tauri-apps/plugin-geolocation": "^2.3.2",
    "@tauri-apps/plugin-notification": "^2.3.3",
    "@tauri-apps/plugin-opener": "^2",
    "@tauri-apps/plugin-sql": "^2.4.0",
    "date-fns": "^4.1.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "jsdom": "^27.0.1",
    "typescript": "~5.8.3",
    "vite": "^7.0.4",
    "vitest": "^4.1.4"
  }
}
```

## File: README.md
```markdown
# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.ts", "src/**/*.test.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  build: {
    target: "baseline-widely-available",
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@mui/material", "@mui/icons-material"],
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
```
