import React from 'react';
import { Certification } from '@/types/cv';

interface CertificationListProps {
  certifications: Certification[];
}

export const CertificationList: React.FC<CertificationListProps> = ({
  certifications,
}) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">Certifications</h3>
    <ul className="space-y-2">
      {certifications.map((cert, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="font-medium">{cert.title}</span>
          <span className="text-gray-600">
            {cert.issuer} • {cert.year}
          </span>
        </li>
      ))}
    </ul>
  </div>
);