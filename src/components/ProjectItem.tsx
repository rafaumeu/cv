import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/cv';

export const ProjectItem: React.FC<Project> = ({
  title,
  description,
  skills,
  highlights,
}) => (
  <Card>
    <CardContent className="pt-6">
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      {highlights && (
        <ul className="list-disc list-inside mb-3 text-gray-700">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);