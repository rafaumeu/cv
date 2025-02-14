import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

export const formatDate = (date?: string) => {
  if (!date) return '';
  
  const currentLocale = document.documentElement.lang === 'pt-BR' ? ptBR : enUS;
  
  try {
    return format(new Date(date), 'PP', {
      locale: currentLocale
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
}; 