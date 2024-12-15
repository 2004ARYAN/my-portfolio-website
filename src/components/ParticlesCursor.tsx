import React from 'react';
import { useParticles } from '../hooks/useParticles';

const ParticlesCursor: React.FC = () => {
  const canvasRef = useParticles();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ touchAction: 'none' }}
    />
  );
};

export default ParticlesCursor;