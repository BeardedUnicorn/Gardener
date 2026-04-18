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
