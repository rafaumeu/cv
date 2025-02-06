import { Mail, Linkedin, Github, Phone, Globe } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

export const Header = () => {
  const intl = useIntl();
  
  // Adiciona os prefixos traduzidos via data-attributes
  const getContactPrefix = (type: string) => {
    return intl.formatMessage({ id: `contact.${type}` }) + ": ";
  };

  return (
    <header className="mb-6 sm:mb-8 text-center print:mb-4" role="banner">
      <div className="flex justify-end mb-4 print:hidden">
        <LanguageSwitcher />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-text print:text-2xl" itemProp="name">
        Rafael Dias Zendron
      </h1>
      <h2 className="text-lg sm:text-xl text-primary mt-2 sm:mt-4 print:text-base print:mt-2" itemProp="jobTitle">
        <FormattedMessage id="header.role" defaultMessage="Full Stack Developer" />
      </h2>
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
