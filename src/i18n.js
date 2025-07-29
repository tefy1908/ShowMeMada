import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "./locales/EN/translation.json"
import frTranslation from "./locales/FR/transaltion.json"
import esTranslation from "./locales/ES/translation.json"


const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(LanguageDetector) // Détecte automatiquement la langue
  .use(initReactI18next) // Liaison avec React
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut
    debug: process.env.NODE_ENV === 'development',
    
    // Langues supportées
    supportedLngs: ['en', 'fr', 'es'],
    
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;