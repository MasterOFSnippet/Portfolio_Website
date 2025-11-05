import React from 'react';

const SkillItem = ({ icon, name }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-purple-500/20 text-white hover:translate-x-2 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm">
      <span className="text-xl">{icon}</span> {name}
    </div>
  );
};

export default SkillItem;