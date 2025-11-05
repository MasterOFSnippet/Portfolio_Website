import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md px-[5%] py-4 z-50 border-b border-purple-500/20 shadow-lg shadow-purple-900/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Arav Gautam's Portfolio
        </div>
        <ul className="flex gap-8">
          {['home', 'about', 'projects', 'contact'].map(item => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`transition-colors duration-300 capitalize ${
                  activeSection === item ? 'text-purple-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;