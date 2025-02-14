import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-full bg-card-light dark:bg-card-dark border-border dark:border-border-dark hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl md:text-2xl font-bold text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200">
          {project.name}
        </CardTitle>
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
          {project.description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {project.highlights && (
            <div>
              <h4 className="text-sm font-medium text-text dark:text-text-dark mb-1">
                <FormattedMessage id="projects.highlightsLabel" />
              </h4>
              <ul className="list-disc list-inside text-sm text-text-secondary dark:text-text-secondary-dark">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium text-text dark:text-text-dark mb-1">
              <FormattedMessage id="projects.skillsLabel" />
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;