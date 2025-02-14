import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/cv';
import { ExternalLink, Github } from 'lucide-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { StarButton } from './StarButton';
import { Tooltip } from '@/components/ui/tooltip';

interface ProjectItemProps extends Project {
  stars?: number;
  updatedAt?: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  
  try {
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.warn('Erro ao formatar data:', error);
    return '';
  }
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  skills,
  highlights,
  link,
  github,
  stars,
  updatedAt
}) => {
  const intl = useIntl();
  const formattedDate = formatDate(updatedAt);
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">
            {title}
            <StarButton stars={stars || 0} repoUrl={github} />
          </h3>
          <div className="flex gap-2">
            {link && link !== github && (
              <Tooltip content={intl.formatMessage({ id: "projects.link.tooltip" })}>
                <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <ExternalLink size={20} />
                </a>
              </Tooltip>
            )}
            <Tooltip content={intl.formatMessage({ id: "projects.github.tooltip" })}>
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Github size={20} />
              </a>
            </Tooltip>
          </div>
        </div>
        {/* Versão normal */}
        <div className="print:hidden">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {description}
            </p>
          </div>
          {highlights && highlights.length > 0 && (
            <Tooltip content={intl.formatMessage({ id: "projects.highlights.tooltip" })}>
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-2">
                  <FormattedMessage id="projects.highlightsLabel" />
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Tooltip>
          )}
          <Tooltip content={intl.formatMessage({ id: "projects.skills.tooltip" })}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 
                           px-3 py-1 rounded-full text-sm hover:bg-blue-200 
                           dark:hover:bg-blue-800 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Tooltip>
          {formattedDate && (
            <Tooltip content={intl.formatMessage({ id: "projects.date.tooltip" })}>
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                <FormattedMessage 
                  id="projects.lastUpdate" 
                  values={{ date: formattedDate }} 
                />
              </div>
            </Tooltip>
          )}
        </div>

        {/* Versão para impressão */}
        <div className="hidden print:block">
          <h3 className="font-bold text-lg text-black mb-2">
            {title}
            {stars > 0 && ` (${stars} ⭐)`}
          </h3>
          
          <p className="text-gray-800 mb-2">{description}</p>
          
          {highlights && highlights.length > 0 && (
            <>
              <p className="font-medium mt-2 mb-1">
                <FormattedMessage id="projects.highlightsLabel" />
              </p>
              <ul className="list-disc list-inside mb-2 text-gray-800 space-y-1 ml-2">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </>
          )}

          <p className="font-medium mt-2 mb-1">
            <FormattedMessage id="projects.skillsLabel" />
          </p>
          <p className="text-gray-800 mb-2">
            {skills.join(', ')}
          </p>

          {link && link !== github && (
            <p className="text-gray-800 text-sm">
              <FormattedMessage 
                id="projects.print.link" 
                values={{ url: link }}
              />
            </p>
          )}
          
          {github && (
            <p className="text-gray-800 text-sm">
              <FormattedMessage 
                id="projects.print.github" 
                values={{ url: github }}
              />
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};