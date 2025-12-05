import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      emoji: '🤖',
      title: 'AI-Powered Personal Fitness Tracker',
      description: 'Developed an AI-based fitness application achieving 92% calorie prediction accuracy using RandomForest Regressor. Designed data pipelines with NumPy, Pandas, Matplotlib, and Scikit-learn for model training and analytics. Deployed via Streamlit Cloud, improving accessibility and interactivity. Improved user adherence by 40% through personalized feedback.',
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit', 'NumPy', 'Pandas'],
      githubLink: 'https://github.com/CodeCosmonautArav/Internship_Project',
      liveLink: 'https://personal-fitness-tracker-01.streamlit.app/'
    },
    {
      emoji: '♟️',
      title: 'Real-Time Online Chess Platform',
      description: 'Built a multiplayer chess web application using React, Node.js, Socket.IO, and Chess.js. Implemented real-time gameplay with move validation and socket-based synchronization. Added authentication, room management, and responsive UI for seamless user experience across devices.',
      tags: ['React', 'Node.js', 'Socket.IO', 'Chess.js', 'Real-time'],
      githubLink: 'https://github.com/MasterOFSnippet/Chess-MinorProject',
      liveLink: 'https://minorproject-chessmaster.vercel.app/'
    },
    {
      emoji: '📦',
      title: 'MERN Stack Mini Projects Collection',
      description: 'Comprehensive collection of MERN-based applications including To-Do List, Notes Organizer, Student Lister, and Climate App. Demonstrated CRUD operations, REST API design, and seamless frontend-backend integration using MongoDB, Express, React, and Node.js.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API'],
      githubLink: 'https://github.com/MasterOFSnippet/Clg_Training-Internship-MERN-Projects',
      liveLink: null
    }
  ];

  return (
    <section id="projects" className="py-24 px-[5%] bg-slate-950 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Featured <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical projects spanning AI/ML, full-stack development, and real-time applications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;