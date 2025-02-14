import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { Certification } from '@/types/cv';
import type { ProfileType } from '@/types/cv';

interface CertificationListProps {
  certifications?: Certification[];
  profile: ProfileType;
}

export const CertificationList: React.FC<CertificationListProps> = ({ 
  certifications = [], 
  profile 
}) => {
  if (!certifications?.length) return null;

  const filteredCertifications = certifications.filter(cert => {
    if (!cert.skills) return false;
    
    switch(profile) {
      case 'backend':
        return cert.skills.some(skill => 
          skill === 'skills.nodejs' || 
          skill === 'skills.clean-architecture' ||
          skill === 'skills.nestjs' ||
          skill === 'skills.expressjs' ||
          skill === 'skills.postgresql' ||
          skill === 'skills.mongodb' ||
          skill === 'skills.rest-api'
        );
      case 'frontend':
        return cert.skills.some(skill => 
          skill === 'skills.reactjs' || 
          skill === 'skills.typescript' ||
          skill === 'skills.nextjs' ||
          skill === 'skills.html5' ||
          skill === 'skills.css3' ||
          skill === 'skills.javascript'
        );
      case 'fullstack':
        return true;
      default:
        return false;
    }
  });

  if (!filteredCertifications.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">
        <FormattedMessage id="certifications.title" />
      </h3>
      <ul className="space-y-4">
        {filteredCertifications.map((cert, index) => (
          <li key={index} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-text">
                  <FormattedMessage id={cert.title} />
                </h4>
                <p className="text-sm text-text/80">
                  <FormattedMessage id={cert.issuer} /> • {cert.year}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline print:hidden"
                >
                  <FormattedMessage id="certifications.view" />
                </a>
              )}
            </div>
            {cert.skills?.length > 0 && (
              <div className="text-sm">
                <span className="font-medium">
                  <FormattedMessage id="certifications.skills.title" />:
                </span>{' '}
                <span className="text-text/80">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx}>
                      <FormattedMessage id={skill} />
                      {idx < cert.skills.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};