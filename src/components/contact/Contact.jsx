import React from 'react';
import ContactLink from './ContactLink';

const Contact = () => {
  const links = [
    { href: 'mailto:working.aravgautam@gmail.com', icon: '📧', label: 'Email' },
    { href: 'https://www.linkedin.com/in/arav-gautam-007swerty2024/', icon: '💼', label: 'LinkedIn' },
    { href: 'https://github.com/MasterOFSnippet/', icon: '💻', label: 'GitHub' },
    { href: 'https://www.instagram.com/_i_m_arav__/', icon: '📷', label: 'Instagram' },
    { href: 'https://x.com/_i_m_arav__', icon: '🐦', label: '𝕏 (Twitter)' }
  ];

  return (
    <section id="contact" className="py-24 px-[5%] bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-center relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">
          Get In <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-gray-300 text-xl mb-4 max-w-2xl mx-auto">
          I am always open to discussing new projects, creative ideas, or opportunities to contribute to innovative solutions.
        </p>
        <p className="text-gray-400 mb-8">
          📍 Satna, Madhya Pradesh, India | 📱 +91 883924847X (DM me on Instagram or 𝕏)
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, index) => (
            <ContactLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;