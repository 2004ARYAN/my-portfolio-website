import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'INTELLITRADE',
      description: 'AI-driven stock prediction model to forecast future stock prices and determine optimal buy and sell points based on historical stock data and news sentiment analysis.',
      tech: ['Python', 'NLP', 'LSTM', 'SVM'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&h=400&fit=crop'
    },
    {
      title: 'PLANTGUARD',
      description: 'AI-powered system for plant disease diagnosis, yield estimation, and crop recommendation to help farmers optimize crop health and improve productivity.',
      tech: ['Python', 'TensorFlow', 'Sklearn', 'CNN', 'RandomForest'],
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=600&h=400&fit=crop'
    },
    {
      title: 'Pneumonia Detection',
      description: 'Deep learning model to detect pneumonia from chest X-ray images, leveraging convolutional neural networks for accurate image classification.',
      tech: ['Python', 'TensorFlow', 'CNN'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&h=400&fit=crop'
    },
    {
      title: 'Brain Tumor Detection',
      description: 'Machine learning model to identify brain tumors from MRI scans, utilizing CNNs for efficient detection and diagnosis.',
      tech: ['Python', 'Sklearn', 'TensorFlow', 'CNN'],
      image: 'https://images.unsplash.com/photo-1559757175-7b46f1a8c464?q=80&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-200 mb-12">
          <span className="text-teal-300 font-mono mr-2">03.</span> Projects
          <span className="ml-4 flex-grow h-px bg-gray-700"></span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <h3 className="text-teal-300 font-mono mb-2">Featured Project</h3>
                  <h4 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h4>
                  <div className="bg-slate-800/90 p-6 rounded-lg mb-4">
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-4 text-sm font-mono text-gray-400 mb-4 
                                ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <a href="#" className="text-gray-300 hover:text-teal-300">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-teal-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                  <div className="relative group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="rounded w-full grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-teal-300/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;