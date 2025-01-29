import React from 'react';
import { ExperienceItem } from './ExperienceItem';
import { Experience as ExperienceType } from '@/types/cv';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Work History</h2>
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  </section>
);