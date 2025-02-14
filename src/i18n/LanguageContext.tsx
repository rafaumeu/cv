import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from './messages/pt-BR';
import enUS from './messages/en-US';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  setLanguage: () => {},
});

const messages = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <IntlProvider messages={messages[language]} locale={language}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 