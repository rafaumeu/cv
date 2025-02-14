import React from 'react';
import { Mail, Linkedin, Github, Phone, Globe } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useIntl } from 'react-intl';

import { useTheme } from '@/hooks/theme';
import { ProfileType } from '@/types/cv';

interface HeaderProps {
  profile: ProfileType;
  onProfileChange: (profile: ProfileType) => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onProfileChange }) => {
  const intl = useIntl();
  const { theme } = useTheme();
  
  const getContactPrefix = (type: string) => {
    return intl.formatMessage({ id: `contact.${type}` });
  };

  return (
    <header>
      <div className="flex justify-between items-center mb-4 print:hidden">
        <select
          value={profile}
          onChange={(e) => onProfileChange(e.target.value as ProfileType)}
          className={`
            px-4 py-2 rounded-md border
            ${theme === 'dark' 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-700'
            }
            hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary
            transition-colors duration-200
          `}
        >
          <option value="backend">
            {intl.formatMessage({ id: "profile.backend" })}
          </option>
          <option value="frontend">
            {intl.formatMessage({ id: "profile.frontend" })}
          </option>
          <option value="fullstack">
            {intl.formatMessage({ id: "profile.fullstack" })}
          </option>
        </select>
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center">

        <h1 className="text-3xl font-bold text-primary">
          Rafael Dias Zendron
        </h1>
        <h2 className="text-lg sm:text-xl text-primary mt-2 sm:mt-4 print:text-base print:mt-2" itemProp="jobTitle">
          {intl.formatMessage({ 
            id: `header.role.${profile}`
          })}
        </h2>
      </div>
      <nav className="mt-4 text-text/80 text-sm sm:text-base print:text-sm" aria-label="Contato">
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <a 
            href="tel:+5511964897587" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label={intl.formatMessage({ id: 'contact.phone' })}
          >
            <Phone size={16} aria-hidden="true" />
            <span data-prefix={getContactPrefix('phone')}>+55 11 96489-7587</span>
          </a>
          <a 
            href="mailto:rafael.zendron22@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} /> 
            <span data-prefix={getContactPrefix('email')}>rafael.zendron22@gmail.com</span>
          </a>
          <a 
            href="https://linkedin.com/in/rafael-dias-zendron-528290132" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin size={16} /> 
            <span data-prefix={getContactPrefix('linkedin')}>linkedin.com/in/rafael-dias-zendron</span>
          </a>
          <a 
            href="https://github.com/rafaumeu"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={16} />
            <span data-prefix={getContactPrefix('github')}>github.com/rafaumeu</span>
          </a>
          <a 
            href="https://portfoliordz.netlify.app"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Globe size={16} />
            <span data-prefix={getContactPrefix('website')}>portfoliordz.netlify.app</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
