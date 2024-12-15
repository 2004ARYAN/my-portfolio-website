import { Season, SeasonConfig } from '../types/season';

export const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
};

export const seasonConfigs: Record<Season, SeasonConfig> = {
  winter: {
    particleCount: 50,
    colors: ['#ffffff', '#e6f3ff'],
    minSize: 3,
    maxSize: 8,
    minSpeed: 1,
    maxSpeed: 3,
    wind: 0.5
  },
  spring: {
    particleCount: 40,
    colors: ['#91c1ff', '#7ba6ff'],
    minSize: 2,
    maxSize: 5,
    minSpeed: 4,
    maxSpeed: 7,
    wind: 1
  },
  summer: {
    particleCount: 30,
    colors: ['#fffacd', '#ffd700'],
    minSize: 4,
    maxSize: 10,
    minSpeed: 0.5,
    maxSpeed: 2,
    wind: 0.2
  },
  autumn: {
    particleCount: 35,
    colors: ['#ff8c42', '#ff6b6b', '#ffd700'],
    minSize: 5,
    maxSize: 12,
    minSpeed: 2,
    maxSpeed: 4,
    wind: 1.5
  }
};