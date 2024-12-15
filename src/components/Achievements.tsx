import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    '1st Position in Data Prophet (Hackathon) - IIT BHU, Varanasi',
    '1st Position in Innovate and Iterate (Hackathon) - IIIT Sri City, Andhra Pradesh',
    'Finalist in Hack to Crack National Level Hackathon - VIMEET, Maharashtra',
    'Finalist in Analytic Arena (Hackathon) - IIIT Sri City, Andhra Pradesh',
    '1st Position in Mavericks Dronathon',
    '2nd Position in Hack-o-Relay - GDSC–DCE',
    '75th Rank in the NCAT Exam'
  ];

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-200 mb-12">
          <span className="text-teal-300 font-mono mr-2">04.</span> Achievements
          <span className="ml-4 flex-grow h-px bg-gray-700"></span>
        </h2>

        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg flex items-center gap-4 hover:translate-x-2 transition-transform"
            >
              <Trophy className="text-teal-300 flex-shrink-0" size={24} />
              <p className="text-gray-400">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;