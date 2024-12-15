import { Particle } from '../types/particle';

export const createParticle = (x: number, y: number): Particle => {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 2 + 1;
  
  return {
    x,
    y,
    size: Math.random() * 3 + 1,
    speedX: Math.cos(angle) * speed,
    speedY: Math.sin(angle) * speed,
    life: 1,
    maxLife: 1,
    color: `hsla(173, 70%, 70%, ${Math.random() * 0.5 + 0.5})`
  };
};

export const updateParticle = (particle: Particle): void => {
  particle.x += particle.speedX;
  particle.y += particle.speedY;
  particle.life -= 0.02;
  particle.size *= 0.95;
};

export const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle): void => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
};