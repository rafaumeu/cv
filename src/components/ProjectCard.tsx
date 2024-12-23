import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  highlights: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  highlights
}) => (
  <Card className="mb-4">
    <CardContent className="pt-4">
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
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