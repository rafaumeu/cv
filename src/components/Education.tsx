import { FormattedMessage } from 'react-intl';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface EducationProps {
  education?: Education[];
}

export const Education = ({ education = [] }: EducationProps) => {
  if (!Array.isArray(education)) {
    console.warn('Education prop deve ser um array');
    return null;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-text">
        <FormattedMessage id="education.title" />
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-text">
              <FormattedMessage id={edu.degree} />
            </h3>
            <p className="card-foreground font-medium">
              <FormattedMessage id={edu.institution} />
            </p>
            <p className="text-sm card-foreground">
              <FormattedMessage id={edu.period} />
            </p>
            {edu.description && (
              <p className="text-text/80">
                <FormattedMessage id={edu.description} />
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;