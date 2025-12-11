import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax values
  const parallaxX = (mousePosition.x - 50) * 0.5;
  const parallaxY = (mousePosition.y - 50) * 0.5;
  const scrollParallax = scrollY * 0.5;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 50%, #16213e 100%)',
      }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Slowest (Far background) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3 - scrollParallax * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Large glowing orbs */}
          <div className="absolute w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl top-[-200px] right-[-200px] animate-pulse-slow" />
          <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl bottom-[-100px] left-[-100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        {/* Layer 2 - Medium speed */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5 - scrollParallax * 0.5}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-500/20 rounded-lg rotate-45 animate-float" />
          <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-cyan-400/20 rounded-full animate-float-reverse" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-blue-500/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-2 border-purple-400/20 rounded-full animate-float-reverse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Layer 3 - Fastest (Stars/particles) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY - scrollParallax}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Twinkling stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(139,92,246,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translate(${parallaxX * 0.2}px, ${parallaxY * 0.2 - scrollParallax * 0.2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 px-4"
        style={{
          transform: `translateY(${scrollParallax * 0.8}px)`,
        }}
      >


        {/* 3D Animated Name */}
        <div className="relative mb-6">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.09}deg) rotateY(${(mousePosition.x - 50) * 0.15}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span 
                className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-slow"
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Arav Gautam
              </span>
              {/* 3D Shadow Effect */}
              <span 
                className="absolute top-1 left-1 bg-gradient-to-r from-purple-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent -z-10 blur-sm"
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Arav Gautan
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <div className="space-y-2 mb-8">
          <p 
            className="text-2xl md:text-3xl text-gray-300 font-semibold animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Computer Science & Engineering Student
          </p>
          <p 
            className="text-lg md:text-xl text-gray-400 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            MERN Stack Developer | AI Enthusiast | Problem Solver
          </p>
        </div>

        {/* Animated Stats/Highlights */}
        <div 
          className="flex flex-wrap justify-center gap-8 mb-12 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { number: '100+', label: 'DSA Problems' },
            { number: '4+', label: 'Projects Built' },
            { number: '7.7', label: 'CGPA' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
              style={{
                transform: `translateY(${Math.sin((Date.now() / 1000) + index) * 5}px)`,
              }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-6 animate-fadeInUp"
          style={{ animationDelay: '0.8s' }}
        >
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border-2 border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-500/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-scroll-down" />
          </div>
          <p className="text-gray-500 text-xs mt-2"></p>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(45deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(45deg); 
          }
        }

        @keyframes float-reverse {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(20px); 
          }
        }

        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.05); 
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5); 
          }
        }

        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-gradient-slow {
          animation: gradient-slow 5s ease infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;