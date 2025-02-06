import React from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FormattedMessage } from 'react-intl';
import { Experience } from '@/types/cv';

export const ExperienceCard: React.FC<Experience> = ({
  role,
  company,
  period,
  location,
  achievements,
  skills,
}) => (
  <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="pt-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-gray-900">
            <FormattedMessage id={role} />
          </h3>
          <p className="text-blue-600 text-sm sm:text-base">
            <FormattedMessage id={company} />
          </p>
        </div>
        <div className="text-sm text-gray-600 flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <FormattedMessage id={period} />
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <FormattedMessage id={location} />
          </div>
        </div>
      </div>
      
      <ul className="mt-3 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2 text-gray-700">
            <Star size={16} className="flex-shrink-0 mt-1 text-blue-600" />
            <FormattedMessage id={achievement} />
          </li>
        ))}
      </ul>
      
      <div className="mt-4 flex flex-wrap gap-2">
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

ExperienceCard.displayName = 'ExperienceCard';