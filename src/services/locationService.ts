export interface CurrentLocation {
  latitude: number;
  longitude: number;
  timezone: string;
  locationLabel: string;
}

export interface LocationService {
  detectCurrentLocation(): Promise<CurrentLocation>;
}
