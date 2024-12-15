import React from 'react';
import DynamicGreeting from './DynamicGreeting';
import TimeDisplay from './WeatherDisplay';
import DailyQuote from './DailyQuote';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-12">
      <div className="max-w-4xl">
        <div className="mb-8">
          <TimeDisplay />
        </div>
        <div className="mb-8">
          <DailyQuote />
        </div>
        <DynamicGreeting />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;