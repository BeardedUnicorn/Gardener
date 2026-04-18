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
