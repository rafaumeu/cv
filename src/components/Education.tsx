import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-bold text-lg">{education.degree}</h3>
        <p className="text-blue-600">{education.focus}</p>
        <p className="text-gray-600 mb-2">{education.period}</p>
        <ul className="list-disc list-inside text-gray-700">
          {education.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);