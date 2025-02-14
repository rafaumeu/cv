import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EducationProps } from '@/types/cv';

export const Education: React.FC<EducationProps> = ({ education }) => {
  if (!Array.isArray(education)) {
    console.warn('Education prop deve ser um array');
    return null;
  }

  return (
    <section className="education-section">
      <h2>
        <FormattedMessage id="education.title" />
      </h2>
      
      {education.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">
            {item.degree}
          </h3>
          <p className="text-secondary">
            <FormattedMessage id={item.institution} />
          </p>
          <p className="text-sm text-muted">
            <FormattedMessage id={item.period} />
          </p>
          
          {item.description && (
            <ul className="list-disc pl-5 mt-2">
              {item.description.map((desc, i) => (
                <li key={i}>
                  <FormattedMessage id={desc} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;