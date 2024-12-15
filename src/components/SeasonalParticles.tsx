import React, { useEffect, useRef } from 'react';
import { Season, SeasonalParticle } from '../types/season';
import { getCurrentSeason, seasonConfigs } from '../utils/seasonUtils';

const SeasonalParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SeasonalParticle[]>([]);
  const seasonRef = useRef<Season>(getCurrentSeason());

  const createParticle = (season: Season): SeasonalParticle => {
    const config = seasonConfigs[season];
    const canvas = canvasRef.current;
    if (!canvas) return {} as SeasonalParticle;

    return {
      x: Math.random() * canvas.width,
      y: -20,
      size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
      speedX: (Math.random() - 0.5) * config.wind,
      speedY: Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.5,
      color: config.colors[Math.floor(Math.random() * config.colors.length)]
    };
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: SeasonalParticle, season: Season) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    ctx.globalAlpha = particle.opacity;
    ctx.fillStyle = particle.color;

    switch (season) {
      case 'winter':
        drawSnowflake(ctx, particle.size);
        break;
      case 'spring':
        drawRaindrop(ctx, particle.size);
        break;
      case 'summer':
        drawSunRay(ctx, particle.size);
        break;
      case 'autumn':
        drawLeaf(ctx, particle.size);
        break;
    }

    ctx.restore();
  };

  const drawSnowflake = (ctx: CanvasRenderingContext2D, size: number) => {
    for (let i = 0; i < 6; i++) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, size);
      ctx.strokeStyle = ctx.fillStyle;
      ctx.stroke();
    }
  };

  const drawRaindrop = (ctx: CanvasRenderingContext2D, size: number) => {
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size/2, -size/2, size/2, size/2, 0, size);
    ctx.bezierCurveTo(-size/2, size/2, -size/2, -size/2, 0, -size);
    ctx.fill();
  };

  const drawSunRay = (ctx: CanvasRenderingContext2D, size: number) => {
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawLeaf = (ctx: CanvasRenderingContext2D, size: number) => {
    ctx.beginPath();
    ctx.ellipse(0, 0, size, size/2, Math.PI/4, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateParticles = () => {
      const currentSeason = getCurrentSeason();
      if (currentSeason !== seasonRef.current) {
        seasonRef.current = currentSeason;
        particlesRef.current = [];
      }

      const config = seasonConfigs[seasonRef.current];

      // Add new particles if needed
      while (particlesRef.current.length < config.particleCount) {
        particlesRef.current.push(createParticle(seasonRef.current));
      }

      // Update and draw particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;

        if (particle.y > canvas.height + 20) {
          return false;
        }

        drawParticle(ctx, particle, seasonRef.current);
        return true;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animationFrame = setInterval(updateParticles, 1000 / 60);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default SeasonalParticles;