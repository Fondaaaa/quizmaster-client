import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';
import {useTheme} from '@/app/providers/useTheme';

export function ThemeToggle() {
    const {resolvedTheme, toggleTheme} = useTheme();
    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-slate-500"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {isDark ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            </span>
        </button>
    );
}
