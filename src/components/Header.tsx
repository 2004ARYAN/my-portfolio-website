import React from 'react';
import { Menu, X, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <nav className="px-6 md:px-12 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-teal-300 font-mono text-xl">AK.</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-teal-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4">
            <NavLinks mobile />
            <div className="flex justify-center space-x-6 pt-4">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseClasses = "text-gray-300 hover:text-teal-300 transition-colors";
  const mobileClasses = mobile ? "block py-2 text-center" : "";

  return (
    <div className={mobile ? "flex flex-col" : "flex space-x-8"}>
      <a href="#about" className={`${baseClasses} ${mobileClasses}`}><span className="text-teal-300 font-mono">01.</span> About</a>
      <a href="#skills" className={`${baseClasses} ${mobileClasses}`}><span className="text-teal-300 font-mono">02.</span> Skills</a>
      <a href="#projects" className={`${baseClasses} ${mobileClasses}`}><span className="text-teal-300 font-mono">03.</span> Projects</a>
      <a href="#achievements" className={`${baseClasses} ${mobileClasses}`}><span className="text-teal-300 font-mono">04.</span> Achievements</a>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/2004ARYAN" className="text-gray-300 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/aryan-kumar-32745624b/" className="text-gray-300 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} />
      </a>
      <a href="https://www.instagram.com/aryan.37/profilecard/" className="text-gray-300 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
        <Instagram size={20} />
      </a>
      <a href="https://www.youtube.com/@PLACEMENT-ot5sb" className="text-gray-300 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
        <Youtube size={20} />
      </a>
    </div>
  );
};

export default Header;