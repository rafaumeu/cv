import React from 'react';
import { ProjectItem } from './ProjectItem';
import { Project } from '@/types/cv';
import { FormattedMessage } from 'react-intl';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">
      <FormattedMessage id="projects.title" />
    </h2>
    <div className="space-y-4">
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  </section>
);