import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '@/types/cv';
import { FormattedMessage } from 'react-intl';

export const ExperienceItem: React.FC<Experience> = React.memo(({
  role,
  company,
  period,
  achievements,
  skills,
}) => {
  const renderedSkills = useMemo(() => (
    skills.map((skill, index) => (
      <span
        key={index}
        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs sm:text-sm"
      >
        {skill}
      </span>
    ))
  ), [skills]);

  const renderedAchievements = useMemo(() => (
    achievements.map((achievement, index) => (
      <li key={index} className="text-gray-700">
        <FormattedMessage id={achievement} />
      </li>
    ))
  ), [achievements]);

  return (
    <Card>
      <CardContent className="pt-4 sm:pt-6">
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
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span><FormattedMessage id="experience.remote" /></span>
            </div>
          </div>
        </div>
        <ul className="space-y-2 mb-4 text-sm sm:text-base">
          {renderedAchievements}
        </ul>
        <div className="flex flex-wrap gap-2">
          {renderedSkills}
        </div>
      </CardContent>
    </Card>
  );
});

ExperienceItem.displayName = 'ExperienceItem';