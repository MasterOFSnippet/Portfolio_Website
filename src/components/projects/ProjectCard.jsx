import React, { useRef, useState } from 'react';

const ProjectCard = ({ emoji, title, description, tags, githubLink, liveLink }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    // Calculate shine position
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
      '--shine-x': `${shineX}%`,
      '--shine-y': `${shineY}%`,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        ...tiltStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glass Morphism Card */}
      <div className="relative bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden h-full">
        
        {/* Shine Effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 200px at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.15), transparent)`,
              transition: 'opacity 0.3s',
            }}
          />
        )}

        {/* Top Gradient Bar - Animated */}
        <div 
          className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-500"
          style={{
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />

        {/* Emoji Header with 3D Effect */}
        <div 
          className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center text-6xl relative overflow-hidden"
          style={{
            transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating emoji */}
          <span 
            className="relative z-10 transition-all duration-500"
            style={{
              transform: isHovered ? 'scale(1.2) rotateZ(10deg)' : 'scale(1) rotateZ(0deg)',
              filter: isHovered ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' : 'none',
            }}
          >
            {emoji}
          </span>

          {/* Particles on hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/50 rounded-full animate-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </>
          )}
        </div>
        
        {/* Content with 3D layering */}
        <div 
          className="p-8 relative z-10"
          style={{
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {/* Title */}
          <h3 className="text-white text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-cyan-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30 transition-all duration-300 hover:bg-purple-500/30 hover:scale-105"
                style={{
                  transform: isHovered ? `translateZ(${10 + index * 5}px)` : 'translateZ(0)',
                  transition: `transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.05}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-all duration-300 overflow-hidden"
                style={{
                  transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
                }}
              >
                <span className="relative z-10">💻 GitHub →</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative text-purple-400 hover:text-purple-300 text-sm font-semibold transition-all duration-300"
                style={{
                  transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
                }}
              >
                <span className="relative z-10">🌐 Live Demo →</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            )}
          </div>
        </div>

        {/* Glowing border on hover */}
        <div 
          className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-all duration-500"
          style={{
            borderImage: isHovered ? 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4) 1' : 'none',
            boxShadow: isHovered ? '0 0 30px rgba(168, 85, 247, 0.5)' : 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes particle {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(var(--tx, 20px), var(--ty, -20px)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx, 40px), var(--ty, -40px)) scale(0);
          }
        }

        .animate-particle {
          animation: particle 1s ease-out forwards;
          --tx: ${Math.random() * 60 - 30}px;
          --ty: ${Math.random() * 60 - 30}px;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;