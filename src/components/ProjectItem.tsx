import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Star, CheckCircle2, Zap } from 'lucide-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { StarButton } from './StarButton';
import { Tooltip } from '@/components/ui/tooltip';

interface LocalizedProject {
  id: string;
  title: string;
  localizedSubtitle: string;
  localizedDescription: string;
  localizedHighlights: string[];
  techStack: string[];
  github: string;
  demo?: string;
  stars: number;
  featured: boolean;
  metrics?: {
    coverage?: string;
    tests?: string;
    bundlesize?: string;
  };
}

interface ProjectItemProps {
  project: LocalizedProject;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const intl = useIntl();
  const {
    title,
    localizedSubtitle: subtitle,
    localizedDescription: description,
    localizedHighlights: highlights,
    techStack,
    github,
    demo,
    stars,
    featured,
    metrics,
  } = project;

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${featured ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/30' : ''}`}>
      <CardContent className="pt-6">
        {/* Screen version */}
        <div className="print:hidden">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                {title}
                <StarButton stars={stars} repoUrl={github} />
                {featured && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full">
                    <Zap size={12} />
                    Featured
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {subtitle}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              {demo && demo !== github && (
                <Tooltip content={intl.formatMessage({ id: "projects.link.tooltip" })}>
                  <a
                    href={demo}
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

          <p className="text-gray-700 dark:text-gray-300 mb-3 mt-2">
            {description}
          </p>

          {highlights.length > 0 && (
            <Tooltip content={intl.formatMessage({ id: "projects.highlights.tooltip" })}>
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-2">
                  <FormattedMessage id="projects.highlightsLabel" />
                </h4>
                <ul className="space-y-1.5">
                  {highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-green-500 dark:text-green-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tooltip>
          )}

          {metrics && (
            <div className="flex flex-wrap gap-2 mb-3">
              {metrics.coverage && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full">
                  <CheckCircle2 size={12} />
                  {metrics.coverage}
                </span>
              )}
              {metrics.tests && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-full">
                  <Zap size={12} />
                  {metrics.tests}
                </span>
              )}
            </div>
          )}

          <Tooltip content={intl.formatMessage({ id: "projects.skills.tooltip" })}>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300
                           px-3 py-1 rounded-full text-sm hover:bg-blue-200
                           dark:hover:bg-blue-800 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Tooltip>
        </div>

        {/* Print version */}
        <div className="hidden print:block">
          <h3 className="font-bold text-lg text-black mb-1">
            {title}
            {stars > 0 && ` (${stars} \u2B50)`}
            {featured && ' \u2014 Featured'}
          </h3>
          <p className="text-sm text-gray-600 mb-2 font-medium">{subtitle}</p>
          <p className="text-gray-800 mb-2">{description}</p>

          {highlights.length > 0 && (
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

          {metrics && (metrics.coverage || metrics.tests) && (
            <p className="text-sm text-gray-600 mb-2">
              {metrics.coverage && `Coverage: ${metrics.coverage}`}
              {metrics.coverage && metrics.tests && ' | '}
              {metrics.tests && `Tests: ${metrics.tests}`}
            </p>
          )}

          <p className="font-medium mt-2 mb-1">
            <FormattedMessage id="projects.skillsLabel" />
          </p>
          <p className="text-gray-800 mb-2">
            {techStack.join(', ')}
          </p>

          {demo && demo !== github && (
            <p className="text-gray-800 text-sm">
              <FormattedMessage
                id="projects.print.link"
                values={{ url: demo }}
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
