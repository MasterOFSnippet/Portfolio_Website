import React, { useRef, useState } from 'react';

export const MagneticButton = ({ children, className = '', onClick, href, ...props }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Magnetic effect (max 20px movement)
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;
    const strength = Math.min(distance / maxDistance, 1);
    
    setPosition({
      x: x * strength * 0.3,
      y: y * strength * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    // Create ripple effect
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, ripple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
        />
      ))}

      <style>{`
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
            transform: translate(-50%, -50%);
          }
          100% {
            width: 500px;
            height: 500px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </Component>
  );
};

// Pre-styled button variants
export const PrimaryButton = ({ children, ...props }) => (
  <MagneticButton
    className="px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
    {...props}
  >
    {children}
  </MagneticButton>
);

export const SecondaryButton = ({ children, ...props }) => (
  <MagneticButton
    className="px-10 py-4 border-2 border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-500/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
    {...props}
  >
    {children}
  </MagneticButton>
);

// Magnetic Link Component
export const MagneticLink = ({ children, className = '', href, ...props }) => {
  const linkRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!linkRef.current) return;

    const link = linkRef.current;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 80;
    const strength = Math.min(distance / maxDistance, 1);
    
    setPosition({
      x: x * strength * 0.2,
      y: y * strength * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-all duration-300 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      {children}
    </a>
  );
};