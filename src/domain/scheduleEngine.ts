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
