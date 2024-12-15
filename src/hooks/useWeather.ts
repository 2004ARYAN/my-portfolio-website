import { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather';
import { getCurrentLocation, fetchWeatherData } from '../utils/weatherUtils';

interface UseWeatherReturn {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useWeather = (): UseWeatherReturn => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!import.meta.env.VITE_WEATHER_API_KEY) {
        throw new Error('Weather API key not configured');
      }

      const location = await getCurrentLocation();
      const weatherData = await fetchWeatherData(location);
      setWeather(weatherData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { weather, loading, error, refetch: fetchData };
};