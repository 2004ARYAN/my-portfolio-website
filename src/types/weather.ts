export interface WeatherData {
  temperature: number;
  city: string;
  country: string;
  description: string;
  icon: string;
  timestamp: number; // Add timestamp for cache validation
}

export interface LocationData {
  latitude: number;
  longitude: number;
}

export interface WeatherCache {
  data: WeatherData;
  expiresAt: number;
}