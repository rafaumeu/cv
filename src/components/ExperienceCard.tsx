import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Experience } from '@/types/cv';

export const ExperienceCard: React.FC<Experience> = ({
  role,
  company,
  period,
  location,
  achievements,
  skills,
  metrics
}) => (
  <div className="experience-item mb-6 print:mb-4">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
      <div>
        <h3 className="font-bold text-lg text-primary">
          <FormattedMessage 
            id={`experience.role.${role.split('.').pop()}`}
          />
        </h3>
        <p className="text-secondary">
          <FormattedMessage 
            id="experience.company" 
            values={{ name: company.split('.').pop() }}
          />
        </p>
      </div>
      <div className="text-sm text-muted">
        <div>
          <FormattedMessage 
            id="experience.period" 
            values={{ key: period.split('.').pop() }}
          />
        </div>
        {location && (
          <div>
            <FormattedMessage 
              id="experience.location" 
              values={{ key: location.split('.').pop() }}
            />
          </div>
        )}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-semibold">
        <FormattedMessage id="experience.achievements.title" />
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-text-primary">
            <FormattedMessage 
              id={`experience.achievements.${achievement.split('.').pop()}`}
            />
          </li>
        ))}
      </ul>

      {metrics && (
        <div className="mt-4">
          <h4 className="font-semibold">
            <FormattedMessage id="experience.metrics.title" />
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {metrics.map((metric, index) => (
              <li key={index} className="text-text-secondary">
                <FormattedMessage 
                  id={`experience.metrics.${metric.split('.').pop()}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <h4 className="font-semibold">
          <FormattedMessage id="experience.skills.title" />
        </h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
              <FormattedMessage id={skill} />
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

ExperienceCard.displayName = 'ExperienceCard';