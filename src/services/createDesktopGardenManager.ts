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
