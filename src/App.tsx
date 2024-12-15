import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticlesCursor from './components/ParticlesCursor';
import SeasonalParticles from './components/SeasonalParticles';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="bg-background text-text min-h-screen transition-colors duration-300">
      <ParticlesCursor />
      <SeasonalParticles />
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="text-center py-6 text-muted font-mono text-sm">
        <p>Designed & Built by Aryan Kumar</p>
      </footer>
    </div>
  );
};

export default App;