import React, { useEffect, useState } from 'react';
import { getCurrentGreeting } from '../utils/greetingUtils';
import AnimatedText from './AnimatedText';
import { GreetingConfig } from '../types/greeting';

const DynamicGreeting: React.FC = () => {
  const [greeting, setGreeting] = useState<GreetingConfig>(getCurrentGreeting());

  useEffect(() => {
    const updateGreeting = () => setGreeting(getCurrentGreeting());
    
    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-teal-300 font-mono mb-5 flex items-center gap-2">
      <AnimatedText 
        text={`${greeting.text},`} 
        className="hover:text-teal-400"
      />
      <span className="animate-pulse">{greeting.emoji}</span>
    </h1>
  );
};

export default DynamicGreeting;