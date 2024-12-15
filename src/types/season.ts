export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export interface SeasonalParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export interface SeasonConfig {
  particleCount: number;
  colors: string[];
  minSize: number;
  maxSize: number;
  minSpeed: number;
  maxSpeed: number;
  wind: number;
}