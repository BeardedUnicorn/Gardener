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
