import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useLanguage } from '@/i18n/useLanguage';

export const LanguageTitle = () => {
  const intl = useIntl();
  const { language } = useLanguage();
  
  const role = intl.formatMessage({ id: 'header.role' });
  const name = 'Rafael Dias Zendron';
  
  const title = language === 'pt-BR' 
    ? `${name} - ${role}`
    : `${name} - ${role}`;

  return (
    <Helmet>
      <title>{title}</title>
      <html lang={language} />
    </Helmet>
  );
}; 