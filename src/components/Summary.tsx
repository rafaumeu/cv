import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Summary = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-2">
      <FormattedMessage id="summary.title" />
    </h2>
    <p className="text-gray-700">
      <FormattedMessage id="summary.description" />
    </p>
  </section>
);
