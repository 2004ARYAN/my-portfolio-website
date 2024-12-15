import React from 'react';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'Java'],
    'Machine Learning & AI': ['LSTM', 'SVM', 'CNN', 'RandomForestRegressor', 'RandomForestClassifier'],
    'Data Analysis': ['NLP (Natural Language Processing)', 'Data Visualization'],
    'Tools & Frameworks': ['TensorFlow', 'Sklearn', 'PyTorch'],
    'Databases': ['MySQL', 'DBMS'],
    'Soft Skills': [
      'Strong Communication & Teaching Abilities',
      'Team Collaboration & Leadership',
      'Critical Thinking & Analytical Mindset',
      'Time Management & Organization'
    ]
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-200 mb-12">
          <span className="text-teal-300 font-mono mr-2">02.</span> Skills
          <span className="ml-4 flex-grow h-px bg-gray-700"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-slate-900/50 p-6 rounded-lg">
              <h3 className="text-teal-300 font-mono text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="text-gray-400 flex items-center">
                    <span className="text-teal-300 mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;