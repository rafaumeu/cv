import { createContext } from 'react';

type Language = 'pt-BR' | 'en-US';

export const LanguageContext = createContext({
  language: 'pt-BR' as Language,
  setLanguage: () => {}
}); 