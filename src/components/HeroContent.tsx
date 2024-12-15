import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl md:text-7xl font-bold text-gray-200 mb-4">
        Aryan Kumar.
      </h2>
      <h3 className="text-3xl md:text-6xl font-bold text-gray-400 mb-8">
        Turning Challenges into Solutions, One Line of Code at a Time.
      </h3>
      <p className="text-gray-400 max-w-2xl text-lg mb-12">
        I'm a final-year B.Tech student specializing in AI and ML at Dronacharya College of Engineering. 
        I focus on building AI-driven solutions that make a difference, from stock prediction to plant disease detection.
      </p>
      <a 
        href="#projects"
        className="group inline-flex items-center gap-2 px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors font-mono"
      >
        Check out my projects!
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
      </a>
    </>
  );
};

export default HeroContent;