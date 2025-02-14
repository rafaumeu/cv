import { IntlError } from '@formatjs/intl';

export type MissingTranslationError = IntlError & {
  code: 'MISSING_TRANSLATION';
};

export type IntlErrorCode = MissingTranslationError; 