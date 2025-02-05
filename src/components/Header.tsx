import { Mail, Linkedin, Github, Globe, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';

export const Header = () => (
  <header className="mb-8 text-center" role="banner">
    <div className="flex justify-end mb-4">
      <LanguageSwitcher />
    </div>
    <h1 className="text-4xl font-bold text-gray-900" itemProp="name">
      Rafael Dias Zendron
    </h1>
    <h2 className="text-xl text-blue-600 mt-4" itemProp="jobTitle">
      <FormattedMessage id="header.role" defaultMessage="Full Stack Developer" />
    </h2>
    <nav className="flex flex-col items-center mt-4 text-gray-600" aria-label="Contato">
      <a 
        href="tel:+5511964897587" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
        aria-label="Telefone"
      >
        <Phone size={18} aria-hidden="true" />
        <span>+55 11 96489-7587</span>
      </a>
      <a 
        href="https://linkedin.com/in/rafael-dias-zendron-528290132" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={18} /> 
        <span className="text-sm">https://linkedin.com/in/rafael-dias-zendron-528290132</span>
      </a>
      <a 
        href="https://github.com/rafaumeu" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
      >
        <Github size={18} /> 
        <span className="text-sm">https://github.com/rafaumeu</span>
      </a>
      <a 
        href="mailto:rafael.zendron22@gmail.com" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
      >
        <Mail size={18} /> 
        <span className="text-sm">rafael.zendron22@gmail.com</span>
      </a>
      <a 
        href="https://portfoliordz.netlify.app/" 
        className="flex items-center gap-1 hover:text-blue-600 transition-colors mt-2"
      >
        <Globe size={18} /> 
        <span className="text-sm">https://portfoliordz.netlify.app/</span>
      </a>
    </nav>
  </header>
);
