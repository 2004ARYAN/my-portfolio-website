import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-200 mb-8">
          <span className="text-teal-300 font-mono mr-2">01.</span> About Me
          <span className="ml-4 flex-grow h-px bg-gray-700"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-gray-400">
            <p className="mb-4">
              I'm an enthusiastic problem-solver with a strong passion for coding, AI-driven innovations, and teaching. 
              My projects showcase my dedication to building impactful solutions that address real-world challenges.
            </p>
            <p className="mb-4">
              Beyond tech, I find joy in teaching and sharing knowledge with others. I'm fascinated by Japanese culture 
              and language, and I maintain an Instagram page where I share challenging math problems to inspire and 
              educate others.
            </p>
            <p>
              When I'm not coding or teaching, you can find me on the badminton court or at the gym, maintaining a 
              healthy balance between mental and physical well-being.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=400&h=400&fit=crop"
                alt="Profile" 
                className="rounded grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal-300 rounded translate-x-4 translate-y-4 -z-10 
                          group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;