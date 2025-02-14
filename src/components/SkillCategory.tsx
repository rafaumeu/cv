import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

interface SkillCategoryProps {
  title: React.ReactNode;
  skills: string[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const intl = useIntl();

  if (!Array.isArray(skills)) {
    console.error('Skills deve ser um array:', skills);
    return null;
  }

  return (
    <div className="mb-4 print:mb-2">
      <h3 className="text-xl font-semibold mb-2 print:text-lg print:mb-1">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 print:grid-cols-4 gap-2 print:gap-1">
        {skills.map((skill, index) => {
          try {
            // Verifica se existe tradução para a skill
            intl.formatMessage({ id: skill });
            return (
              <div key={index} className="bg-card-light dark:bg-card-dark p-2 print:p-1 rounded print:text-sm">
                <span className="text-sm print:text-xs">
                  <FormattedMessage id={skill} />
                </span>
              </div>
            );
          } catch  {
            console.warn(`Translation not found for skill: ${skill}`);
            return null;
          }
        })}
      </div>
    </div>
  );
};