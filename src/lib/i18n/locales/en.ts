export const en = {
    common: {
        appName: 'QuizMaster',
    },
    nav: {
        home: 'Home',
    },
    theme: {
        switchToLight: 'Switch to light theme',
        switchToDark: 'Switch to dark theme',
    },
    language: {
        selectLanguage: 'Select language',
        en: 'English',
        it: 'Italian',
    },
    home: {
        title: 'Home',
    },
    notFound: {
        title: '404 - Page Not Found',
        description: 'The page you are looking for does not exist.',
        goHome: 'Go to Home',
    },
} as const;

type DeepStringify<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type TranslationDictionary = DeepStringify<typeof en>;
export type TranslationSchema = typeof en;
