import React from 'react';
import { AnimatedTextProps } from '../types/greeting';

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-block transition-all duration-300 ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block hover:text-teal-300 hover:-translate-y-1 transition-all duration-300"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;