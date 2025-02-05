import React from 'react';
import { FormattedMessage } from 'react-intl';

interface SkillCategoryProps {
  title: React.ReactNode;
  skills: string[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const formatTitle = (title: React.ReactNode) => {
    if (typeof title === 'string') {
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
    return title;
  };

  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{formatTitle(title)}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            <FormattedMessage id={skill} />
          </span>
        ))}
      </div>
    </div>
  );
};