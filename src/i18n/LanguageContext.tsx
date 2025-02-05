import React, { createContext, useState, PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from './messages/pt-BR';
import enUS from './messages/en-US';

const messages = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <IntlProvider messages={messages[language]} locale={language}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}; 