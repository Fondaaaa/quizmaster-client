import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/app/providers/useTheme';

export function ThemeToggle() {
    const {t} = useTranslation();
    const {resolvedTheme, toggleTheme} = useTheme();
    const isDark = resolvedTheme === 'dark';
    const label = isDark ? t('theme.switchToLight') : t('theme.switchToDark');

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-slate-500"
            aria-label={label}
            title={label}
        >
            {isDark ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">{label}</span>
        </button>
    );
}
