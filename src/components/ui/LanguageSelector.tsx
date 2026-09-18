import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {LanguageIcon} from '@heroicons/react/24/outline';
import {CheckIcon} from '@heroicons/react/20/solid';
import {useTranslation} from 'react-i18next';
import {SUPPORTED_LANGUAGES, type SupportedLanguage} from '@/lib/i18n';

const LANGUAGE_KEYS: Record<SupportedLanguage, 'language.en' | 'language.it'> = {
    en: 'language.en',
    it: 'language.it',
};

export function LanguageSelector() {
    const {t, i18n} = useTranslation();
    const currentLang = (i18n.resolvedLanguage?.substring(0, 2) ?? 'en') as SupportedLanguage;

    const handleSelectLanguage = (lang: SupportedLanguage) => {
        void i18n.changeLanguage(lang);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton
                type="button"
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-slate-500"
                aria-label={t('language.selectLanguage')}
                title={t('language.selectLanguage')}
            >
                <LanguageIcon className="h-5 w-5" aria-hidden="true" />
                <span className="uppercase">{currentLang}</span>
            </MenuButton>

            <MenuItems
                transition
                className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-lg border border-slate-200 bg-white p-1 shadow-lg transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0 dark:border-slate-800 dark:bg-slate-900"
            >
                {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = currentLang === lang;
                    return (
                        <MenuItem key={lang}>
                            <button
                                type="button"
                                onClick={() => handleSelectLanguage(lang)}
                                className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-sm text-slate-700 transition-colors data-focus:bg-slate-100 data-focus:text-slate-900 dark:text-slate-200 dark:data-focus:bg-slate-800 dark:data-focus:text-slate-100"
                            >
                                <span>{t(LANGUAGE_KEYS[lang])}</span>
                                {isSelected && (
                                    <CheckIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                                )}
                            </button>
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
}
