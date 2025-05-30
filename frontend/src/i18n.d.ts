// types/i18n.d.ts
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('../public/locales/en/common.json');
    };
  }
}