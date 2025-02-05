import { FormattedMessage } from 'react-intl';

export const Summary = () => (
  <section 
    aria-labelledby="summary-title"
    className="summary-section"
  >
    <h2 id="summary-title" className="visually-hidden">
      <FormattedMessage id="summary.title" />
    </h2>
    <p role="contentinfo">
      <FormattedMessage id="summary.description" />
    </p>
  </section>
);
