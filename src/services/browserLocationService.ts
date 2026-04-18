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
