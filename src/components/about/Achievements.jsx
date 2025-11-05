import React from 'react';

const Achievements = () => {
  const achievements = [
    'Solved 200+ DSA problems across LeetCode, Codeforces, GFG, and CodeChef',
    'Led a 4-member team in multiple hackathons, developing prototypes within 24 hours',
    'Class Representative & Student Coordinator managing events with 100+ attendees'
  ];

  return (
    <div className="mb-6">
      <h3 className="text-white text-xl font-semibold mb-3">Achievements</h3>
      <ul className="text-gray-300 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;