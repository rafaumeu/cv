import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useLanguage } from '@/i18n/useLanguage';
import { type ProfileType } from '@/types/cv';

interface LanguageTitleProps {
  profile: ProfileType;
}

export const LanguageTitle: React.FC<LanguageTitleProps> = ({ profile }) => {
  const intl = useIntl();
  const { language } = useLanguage();
  
  const role = intl.formatMessage({ id: `header.role.${profile}` });
  const name = 'Rafael Dias Zendron';
  
  const title = `${name} - ${role}`;

  return (
    <Helmet>
      <title>{title}</title>
      <html lang={language} />
    </Helmet>
  );
}; 