import {Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {ThemeToggle} from '@/components/ui/ThemeToggle';
import {LanguageSelector} from '@/components/ui/LanguageSelector';

export function RootLayout() {
    const {t} = useTranslation();

    return (
        <div className="flex min-h-screen flex-col bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
            <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                <h1 className="text-lg font-semibold">{t('common.appName')}</h1>
                <div className="flex items-center gap-2">
                    <LanguageSelector />
                    <ThemeToggle />
                </div>
            </header>
            <main className="flex-1 p-4">
                <Outlet />
            </main>
            <footer className="border-t border-slate-200 px-4 py-3 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                {t('common.appName')}
            </footer>
        </div>
    );
}
