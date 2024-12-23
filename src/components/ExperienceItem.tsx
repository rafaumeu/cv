import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '@/types/cv';

export const ExperienceItem: React.FC<Experience> = ({
  role,
  company,
  period,
  location,
  achievements,
  skills,
}) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{role}</h3>
          <p className="text-blue-600">{company}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
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