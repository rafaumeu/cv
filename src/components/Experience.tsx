import React from 'react';
import { ExperienceItem } from './ExperienceItem';
import { Experience as ExperienceType } from '@/types/cv';
import { FormattedMessage } from 'react-intl';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <section className="mb-8" id="work-history">
    <h2 className="text-2xl font-bold mb-4 uppercase">
      <FormattedMessage id="experience.title" />
    </h2>
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  </section>
);