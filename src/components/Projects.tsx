import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useGithubRepositories } from '@/hooks/useGithubRepositories';
import { ProfileType } from '@/types/cv';
import { ProjectItem } from './ProjectItem';
import { useIntl } from 'react-intl';

interface ProjectsProps {
  profile: ProfileType;
}

export const Projects: React.FC<ProjectsProps> = ({ profile }) => {
  const intl = useIntl();
  const { repositories, isLoading, error } = useGithubRepositories(profile);

  if (isLoading) {
    return <div><FormattedMessage id="projects.loading" /></div>;
  }

  if (error) {
    return <div><FormattedMessage id="projects.error" /></div>;
  }

  if (!repositories?.length) {
    return <div><FormattedMessage id="projects.empty" /></div>;
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        <FormattedMessage id="projects.title" />
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {repositories.map((repo) => (
          <ProjectItem
            key={repo.title}
            title={repo.title}
            description={repo.description}
            skills={repo.skills}
            highlights={repo.highlights}
            link={repo.link}
            github={repo.github}
            stars={repo.stars}
            updatedAt={repo.updatedAt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;