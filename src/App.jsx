import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import LoadingScreen from './components/layout/LoadingScreen';
//import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Prevent scrolling during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Slight delay before showing content for smooth transition
      setTimeout(() => setContentVisible(true), 100);
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
    // Remove LoadingScreen from DOM after fade out completes
    setTimeout(() => setShowLoadingScreen(false), 800);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(30px) translateX(-20px); }
          }
          
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
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.05); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes gradient-slow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 10s ease-in-out infinite;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
          
          .animate-gradient-slow {
            background-size: 200% 200%;
            animation: gradient-slow 5s ease infinite;
          }
          
          .animate-slideInFromTop {
            animation: slideInFromTop 0.8s ease-out;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.6s ease-out;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .content-wrapper {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
          }
        `}</style>
        {/* Add Custom Cursor */}
        {/* <CustomCursor /> */}
        {showLoadingScreen && <LoadingScreen onComplete={handleLoadingComplete} />}
        
        <div className={`${contentVisible ? 'content-wrapper' : 'opacity-0'}`}>
          <Navbar />
          <main className="pt-[72px]">  {/* This creates space for fixed navbar */}
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}