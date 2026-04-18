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
