import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skills: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  period,
  location,
  achievements,
  skills,
}) => (
  <Card className="mb-6">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{role}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {period}
          </div>
          <p>{location}</p>
        </div>
      </div>
      <ul className="mt-3 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2 text-gray-700">
            <Star size={16} className="flex-shrink-0 mt-1 text-blue-600" />
            {achievement}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);