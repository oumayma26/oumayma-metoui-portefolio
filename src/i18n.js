// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/i18n/en.json';
import translationFR from './locales/i18n/fr.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

i18n
//   .use(LanguageDetector) // détecte la langue du navigateur
  .use(initReactI18next) // connecte à React
  .init({
    resources,
    fallbackLng: 'fr', // langue par défaut
    interpolation: {
      escapeValue: false, // React échappe déjà les données
    },
  });

export default i18n;
