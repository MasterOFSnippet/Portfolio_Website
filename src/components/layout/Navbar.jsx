import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full px-[5%] py-4 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-purple-500/20 shadow-lg shadow-purple-900/20' 
          : 'bg-black/80 backdrop-blur-sm border-purple-500/10'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
               onClick={() => scrollTo('home')}>
            Arav Gautam's Portfolio
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'contact'].map(item => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`transition-all duration-300 capitalize font-medium relative group ${
                    activeSection === item ? 'text-purple-400' : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group z-[60]"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2 bg-cyan-400' : 'bg-white'
            } group-hover:bg-cyan-400`} />
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            } group-hover:bg-cyan-400`} />
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2 bg-cyan-400' : 'bg-white'
            } group-hover:bg-cyan-400`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Simplified with guaranteed visibility */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop - Click to close */}
          <div 
            className="absolute inset-0 bg-black"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)' }}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Glowing background effects */}
            <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 top-1/4 left-1/4 animate-pulse" />
            <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-10 bottom-1/4 right-1/4 animate-pulse" />
          </div>

          {/* Menu Content - Guaranteed to be on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Menu Items */}
            <div className="space-y-8 text-center">
              {['home', 'about', 'projects', 'contact'].map((item, index) => (
                <div 
                  key={item}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-5xl font-bold capitalize text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 block w-full"
                    style={{
                      textShadow: activeSection === item ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none',
                      color: activeSection === item ? 'transparent' : 'white',
                      backgroundImage: activeSection === item ? 'linear-gradient(to right, rgb(192, 132, 252), rgb(59, 130, 246), rgb(34, 211, 238))' : 'none',
                      WebkitBackgroundClip: activeSection === item ? 'text' : 'none',
                      backgroundClip: activeSection === item ? 'text' : 'none'
                    }}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="absolute bottom-24 flex gap-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://github.com/MasterOFSnippet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/arav-gautam-007swerty2024/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/_i_m_arav__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Bottom text */}
            <p className="absolute bottom-8 text-gray-500 text-sm animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              Let's create something amazing ✨
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;