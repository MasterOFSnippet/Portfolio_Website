import React from 'react';

const ContactLink = ({ href, icon, label }) => {
  return (
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-lg px-8 py-4 border-2 border-purple-500/30 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm">
      {icon} {label}
    </a>
  );
};

export default ContactLink;