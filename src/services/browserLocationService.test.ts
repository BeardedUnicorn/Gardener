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
