import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from './messages/pt-BR';
import enUS from './messages/en-US';
import { flattenMessages } from './utils/flattenMessages';
import { LanguageContext, Language } from '@/contexts/language.context';

type TranslationError = {
  code: string;
  message: string;
};

const messages = {
  'pt-BR': ptBR,
  'en-US': enUS
};

const flattenedMessages = {
  'pt-BR': flattenMessages(messages['pt-BR']),
  'en-US': flattenMessages(messages['en-US'])
};

export { LanguageContext } from '@/contexts/language.context';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const handleError = (err: TranslationError) => {
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