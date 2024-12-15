import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-slate-800/30 p-4 rounded-lg backdrop-blur-sm">
      <Clock className="text-teal-300" size={20} />
      <span className="font-mono text-lg">
        {format(currentTime, 'HH:mm:ss')}
      </span>
    </div>
  );
};

export default TimeDisplay;