import React from 'react';
import { FormattedMessage } from 'react-intl';
import { EducationItem } from '@/types/cv';

interface Subject {
  id: string;
  status: 'current' | 'future';
}

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  if (!Array.isArray(education)) {
    console.warn('Education prop deve ser um array');
    return null;
  }

  const renderSubjects = (subjects?: Subject[]) => {
    if (!subjects?.length) return null;

    const currentSubjects = subjects.filter(s => s.status === 'current');
    const futureSubjects = subjects.filter(s => s.status === 'future');

    return (
      <div className="mt-4 space-y-4 print:mt-2">
        {currentSubjects.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">
              <FormattedMessage id="education.current_subjects" />
            </h4>
            <ul className="text-sm text-text/80 list-disc list-inside space-y-1">
              {currentSubjects.map((subject, idx) => (
                <li key={idx}>
                  <FormattedMessage id={subject.id} />
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {futureSubjects.length > 0 && (
          <div className="print:hidden">
            <h4 className="text-sm font-semibold text-primary mb-2">
              <FormattedMessage id="education.future_subjects" />
            </h4>
            <ul className="text-sm text-text/80 list-disc list-inside space-y-1">
              {futureSubjects.map((subject, idx) => (
                <li key={idx}>
                  <FormattedMessage id={subject.id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

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