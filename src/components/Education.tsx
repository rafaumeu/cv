import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormattedMessage } from 'react-intl';

interface EducationProps {
  education: {
    degree: string;
    focus: string;
    period: string;
    highlights: string[];
  };
}

export const Education: React.FC<EducationProps> = ({ education }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">
      <FormattedMessage id="education.title" />
    </h2>
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-bold text-lg">
          <FormattedMessage id={education.degree} />
        </h3>
        <p className="text-blue-600">
          <FormattedMessage id={education.focus} />
        </p>
        <p className="text-gray-600 mb-2">
          <FormattedMessage id={education.period} />
        </p>
        <ul className="list-disc list-inside text-gray-700">
          {education.highlights.map((highlight, index) => (
            <li key={index}>
              <FormattedMessage id={highlight} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);