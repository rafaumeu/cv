import { FormattedMessage } from 'react-intl';
import { ProfileType } from '@/types/cv';

interface SummaryProps {
  profile: ProfileType;
}

export const Summary: React.FC<SummaryProps> = ({ profile }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        <FormattedMessage id="summary.title" />
      </h2>
      <p className="text-text/80 leading-relaxed">
        <FormattedMessage 
          id={`summary.description.${profile}`}
          defaultMessage="Desenvolvedor com experiência em desenvolvimento web"
        />
      </p>
    </section>
  );
};
