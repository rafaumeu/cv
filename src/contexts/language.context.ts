import { createContext } from 'react';

export type Language = 'pt-BR' | 'en-US';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt-BR',
  setLanguage: () => {}
}); 