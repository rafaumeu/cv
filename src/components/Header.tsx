import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';

export const Header = () => (
  <header className="mb-6 sm:mb-8 text-center" role="banner">
    <div className="flex justify-end mb-4">
      <LanguageSwitcher />
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold text-text" itemProp="name">
      Rafael Dias Zendron
    </h1>
    <h2 className="text-lg sm:text-xl text-primary mt-2 sm:mt-4" itemProp="jobTitle">
      <FormattedMessage id="header.role" defaultMessage="Full Stack Developer" />
    </h2>
    <nav className="flex flex-col items-center mt-4 text-text/80 text-sm sm:text-base" aria-label="Contato">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full max-w-2xl">
        <a 
          href="tel:+5511964897587" 
          className="flex items-center justify-center sm:justify-start gap-1 hover:text-primary transition-colors"
          aria-label="Telefone"
        >
          <Phone size={16} aria-hidden="true" />
          <span>+55 11 96489-7587</span>
        </a>
        <a 
          href="mailto:rafael.zendron22@gmail.com" 
          className="flex items-center justify-center sm:justify-start gap-1 hover:text-primary transition-colors"
        >
          <Mail size={16} /> 
          <span className="truncate">rafael.zendron22@gmail.com</span>
        </a>
        <a 
          href="https://linkedin.com/in/rafael-dias-zendron-528290132" 
          className="flex items-center justify-center sm:justify-start gap-1 hover:text-primary transition-colors"
        >
          <Linkedin size={16} /> 
          <span className="truncate">LinkedIn</span>
        </a>
        <a 
          href="https://github.com/rafaumeu" 
          className="flex items-center justify-center sm:justify-start gap-1 hover:text-primary transition-colors"
        >
          <Github size={16} /> 
          <span className="truncate">GitHub</span>
        </a>
      </div>
    </nav>
  </header>
);
