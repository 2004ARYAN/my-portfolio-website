import { WeatherData, LocationData, WeatherCache } from '../types/weather';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

// Get weather data from localStorage
const getCachedWeather = (): WeatherCache | null => {
  const cached = localStorage.getItem('weatherCache');
  if (!cached) return null;
  
  try {
    return JSON.parse(cached) as WeatherCache;
  } catch {
    localStorage.removeItem('weatherCache');
    return null;
  }
};

// Save weather data to localStorage
const cacheWeather = (data: WeatherData): void => {
  const cache: WeatherCache = {
    data,
    expiresAt: Date.now() + CACHE_DURATION
  };
  localStorage.setItem('weatherCache', JSON.stringify(cache));
};

export const getCurrentLocation = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    const timeoutId = setTimeout(() => {
      reject(new Error('Location request timed out'));
    }, 10000); // 10 second timeout

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timeoutId);
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        clearTimeout(timeoutId);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Please enable location access to get weather information'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Location information is unavailable'));
            break;
          case error.TIMEOUT:
            reject(new Error('Location request timed out'));
            break;
          default:
            reject(new Error('An unknown error occurred'));
        }
      },
      { 
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
};

export const fetchWeatherData = async (location: LocationData): Promise<WeatherData> => {
  if (!WEATHER_API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  // Check cache first
  const cached = getCachedWeather();
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch weather data');
    }

    const data = await response.json();
    
    const weatherData: WeatherData = {
      temperature: Math.round(data.main.temp),
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      timestamp: Date.now()
    };

    // Cache the new data
    cacheWeather(weatherData);
    
    return weatherData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Weather data fetch failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while fetching weather data');
  }
};