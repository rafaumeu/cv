import React from 'react';
import { Certification } from '@/types/cv';
import { FormattedMessage } from 'react-intl';

interface CertificationListProps {
  certifications: Certification[];
}

export const CertificationList: React.FC<CertificationListProps> = ({
  certifications,
}) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">
      <FormattedMessage id="skills.certifications" />
    </h3>
    <ul className="space-y-2">
      {certifications.map((cert, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="font-medium">
            <a href={cert.link}>{cert.title}</a>
            </span>
          <span className="text-gray-600">
            {cert.issuer} • {cert.year}
          </span>
        </li>
      ))}
    </ul>
  </div>
);