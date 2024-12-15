import React, { useEffect, useState } from 'react';
import { Quote, RefreshCw } from 'lucide-react';
import { useQuote } from '../hooks/useQuote';
import AnimatedText from './AnimatedText';

const DailyQuote: React.FC = () => {
  const { quote, loading, refetch } = useQuote();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add fade-in effect when quote loads
    if (quote) {
      setIsVisible(true);
    }
  }, [quote]);

  return (
    <div className="relative bg-slate-800/30 p-6 rounded-lg backdrop-blur-sm">
      <div className="absolute -top-3 -left-3">
        <Quote className="text-teal-300" size={24} />
      </div>
      
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {loading ? (
          <div className="animate-pulse text-teal-300 font-mono">
            Loading daily inspiration...
          </div>
        ) : quote && (
          <>
            <p className="text-lg text-gray-300 italic mb-4 pl-6">
              <AnimatedText text={quote.text} />
            </p>
            <div className="flex items-center justify-between">
              <p className="text-teal-300 font-mono">— {quote.author}</p>
              <button
                onClick={() => refetch()}
                className="p-2 hover:text-teal-300 transition-colors"
                title="Get new quote"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DailyQuote;