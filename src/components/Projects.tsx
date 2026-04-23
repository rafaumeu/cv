import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ProfileType } from '@/types/cv';
import { ProjectItem } from './ProjectItem';
import { getProjectsByProfile } from '@/data/projects';

interface ProjectsProps {
  profile: ProfileType;
}

export const Projects: React.FC<ProjectsProps> = ({ profile }) => {
  const intl = useIntl();
  const projectList = getProjectsByProfile(profile, intl.locale);

  if (!projectList.length) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        <FormattedMessage id="projects.title" />
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {projectList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
