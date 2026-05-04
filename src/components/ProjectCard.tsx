import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl md:text-2xl font-bold text-text hover:text-primary transition-colors duration-200">
          {project.name}
        </CardTitle>
        <p className="text-sm text-secondary">
          {project.description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {project.highlights && (
            <div>
              <h4 className="text-sm font-medium text-text mb-1">
                <FormattedMessage id="projects.highlightsLabel" />
              </h4>
              <ul className="list-disc list-inside text-sm text-secondary">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium text-text mb-1">
              <FormattedMessage id="projects.skillsLabel" />
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
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