import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Lazily load non-English locales only when needed
i18n.on('languageChanged', async (lng) => {
  if (lng === 'en' || i18n.hasResourceBundle(lng, 'translation')) return;
  const locales = {
    pt: () => import('./locales/pt.json'),
    es: () => import('./locales/es.json'),
    fr: () => import('./locales/fr.json'),
  };
  const loader = locales[lng];
  if (!loader) return;
  const { default: data } = await loader();
  i18n.addResourceBundle(lng, 'translation', data);
  i18n.changeLanguage(lng);
});

export default i18n;
