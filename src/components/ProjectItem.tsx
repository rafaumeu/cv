import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/cv';
import { ExternalLink, Github } from 'lucide-react';
import { FormattedMessage } from 'react-intl';

export const ProjectItem: React.FC<Project> = ({
  title,
  description,
  skills,
  highlights,
  link,
  github
}) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="pt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg text-gray-900">
          <FormattedMessage id={title} />
        </h3>
        <div className="flex gap-2">
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700 mb-3">
        <FormattedMessage id={description} />
      </p>
      <ul className="list-disc list-inside mb-3 text-gray-700 space-y-1">
        {highlights?.map((highlight, index) => (
          <li key={index} className="hover:text-blue-600 transition-colors">
            <FormattedMessage id={highlight} />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm
                     hover:bg-blue-200 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);