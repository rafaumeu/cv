import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);