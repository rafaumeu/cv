import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  
  return context;
}; 