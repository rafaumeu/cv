import React from 'react';
import { Language } from '@/types/cv';
import { FormattedMessage } from 'react-intl';

interface LanguageListProps {
  languages: Language[];
}

export const LanguageList: React.FC<LanguageListProps> = ({ languages }) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">
      <FormattedMessage id="skills.languages" />
    </h3>
    <ul className="space-y-2">
      {languages.map((lang, index) => (
        <li key={index} className="flex justify-between items-center">
          <span>
            <FormattedMessage id={lang.name} />
          </span>
          <span className="text-gray-600">
            <FormattedMessage id={lang.level} />
          </span>
        </li>
      ))}
    </ul>
  </div>
);