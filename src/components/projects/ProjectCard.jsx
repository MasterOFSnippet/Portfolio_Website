import React from 'react';

const ProjectCard = ({ emoji, title, description, tags, githubLink, liveLink }) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-950/30 to-blue-950/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/30 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center text-6xl text-white/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative z-10">{emoji}</span>
      </div>
      
      <div className="p-8 relative z-10">
        <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">
              💻 GitHub →
            </a>
          )}
          {liveLink && (
            
              <a href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
              🌐 Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;