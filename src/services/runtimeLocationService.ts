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
