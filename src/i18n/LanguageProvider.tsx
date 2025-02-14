import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from './messages/pt-BR';
import enUS from './messages/en-US';
import { flattenMessages } from './utils/flattenMessages';

type Language = 'pt-BR' | 'en-US';

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const messages = {
  'pt-BR': ptBR,
  'en-US': enUS
};

const flattenedMessages = {
  'pt-BR': flattenMessages(messages['pt-BR']),
  'en-US': flattenMessages(messages['en-US'])
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  setLanguage: () => {}
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const handleError = (err: any) => {
    if (err.code === 'MISSING_TRANSLATION') {
      console.warn('Missing translation:', err.message);
      return;
    }
    console.error('Translation error:', err);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <IntlProvider 
        messages={flattenedMessages[language]} 
        locale={language}
        defaultLocale="pt-BR"
        onError={handleError}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};