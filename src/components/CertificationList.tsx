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
    <ul className="space-y-4">
      {certifications.map((cert, index) => (
        <li key={index} className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="font-medium">
              <FormattedMessage id={cert.title} />
            </span>
            <span className="text-gray-600">
              <FormattedMessage id={cert.issuer} /> • {cert.year} • {cert.hours} <FormattedMessage id="certifications.hours" />
            </span>
          </div>
          <div className="mt-1">
            <a 
              href={cert.link}
              className="text-blue-600 hover:text-blue-800 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="certifications.view-certificate" />
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
              >
                <FormattedMessage id={skill} />
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);