import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleHoverElements = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      hoverables.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    // Detect current section for color change
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
      if (current) setCurrentSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize hover listeners
    handleHoverElements();
    
    // Re-initialize on DOM changes (for dynamic content)
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Section-specific colors
  const sectionColors = {
    home: 'from-purple-500 to-cyan-500',
    about: 'from-blue-500 to-purple-500',
    projects: 'from-cyan-500 to-blue-500',
    contact: 'from-purple-500 to-pink-500',
  };

  const cursorColor = sectionColors[currentSection] || sectionColors.home;

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[10000] mix-blend-difference transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        {/* Inner Dot */}
        <div
          className={`w-2 h-2 rounded-full bg-gradient-to-r ${cursorColor} transition-all duration-300`}
        />
      </div>

      {/* Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
        }}
      >
        {/* Ring */}
        <div
          className={`w-8 h-8 rounded-full border-2 border-gradient bg-gradient-to-r ${cursorColor} opacity-50`}
          style={{
            background: 'transparent',
            borderImage: `linear-gradient(to right, currentColor, currentColor) 1`,
          }}
        />
      </div>

      {/* Trail Effect */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-700 ease-out ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cursorColor} blur-xl`} />
      </div>

      {/* Hover Text */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[10001] text-white text-xs font-semibold transition-all duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y - 30}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <span className="bg-black/80 px-2 py-1 rounded backdrop-blur-sm">Click</span>
        </div>
      )}
    </>
  );
};

export default CustomCursor;