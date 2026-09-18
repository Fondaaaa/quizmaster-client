import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {en} from './locales/en';
import {it} from './locales/it';
import './types';

export const SUPPORTED_LANGUAGES = ['en', 'it'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
    en: 'English',
    it: 'Italiano',
};

export const LANGUAGE_STORAGE_KEY = 'quizmaster-language';

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            it: {translation: it},
        },
        fallbackLng: 'en',
        supportedLngs: SUPPORTED_LANGUAGES,
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: LANGUAGE_STORAGE_KEY,
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

if (typeof document !== 'undefined') {
    const initialLang = i18n.resolvedLanguage ?? 'en';
    document.documentElement.lang = initialLang;
    i18n.on('languageChanged', (lng) => {
        document.documentElement.lang = lng;
    });
}

export default i18n;
