import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showNamaste, setShowNamaste] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Show Namaste text after brief delay
    const namasteTimer = setTimeout(() => setShowNamaste(true), 500);

    // Start fade out when complete
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onComplete(), 800);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(namasteTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-blue-950">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Namaste Text */}
        <div className={`mb-12 transition-all duration-1000 ${showNamaste ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hindi - नमस्ते */}
          <div className="text-center mb-4">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  animation: 'glow 2s ease-in-out infinite'
                }}>
              नमस्ते
            </h1>
            <h2 className="text-gray-400 text-sm tracking-widest">NAMASTE</h2>
          </div>

          {/* Greeting message */}
          <p className={`text-gray-300 text-center text-lg transition-all duration-1000 delay-500 ${showNamaste ? 'opacity-100' : 'opacity-0'}`}>
            Welcome to my digital space
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-300 ease-out rounded-full"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
              }}
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">{progress}%</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-20 flex items-center gap-2 opacity-40">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.5));
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translate(30px, -30px) scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;