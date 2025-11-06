import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-black via-purple-950/40 to-blue-950/30 relative overflow-hidden"
    >
      <div className="absolute w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-3xl top-[-300px] right-[-200px] animate-float" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl bottom-[-200px] left-[-150px] animate-float-reverse" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-300 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10 animate-fadeInUp">
        <h1 className="text-8xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-slow">Arav Gautam</span>
        </h1><br></br>
        <p className="text-2xl text-gray-300 mb-2">Computer Science & Engineering Student</p>
        <p className="text-lg text-gray-400 mb-8">MERN Stack Developer | AI Enthusiast | Problem Solver</p>
        <button
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;