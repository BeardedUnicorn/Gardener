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
