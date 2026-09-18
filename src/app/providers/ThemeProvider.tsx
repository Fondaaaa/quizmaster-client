import {type ReactNode, useEffect, useState} from 'react';
import {ThemeContext, type Theme, type ResolvedTheme} from './theme-context';

const THEME_STORAGE_KEY = 'quizmaster-theme';

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

function getSystemTheme(): ResolvedTheme {
    if (typeof window === 'undefined') {
        return 'light';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(key: string, defaultTheme: Theme): Theme {
    if (typeof window === 'undefined') {
        return defaultTheme;
    }
    try {
        const stored = localStorage.getItem(key);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
            return stored;
        }
    } catch {
        // Ignore localStorage access errors (e.g. privacy mode)
    }
    return defaultTheme;
}

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => getStoredTheme(storageKey, defaultTheme));
    const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event: MediaQueryListEvent) => {
            setSystemTheme(event.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const resolvedTheme: ResolvedTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        const root = document.documentElement;
        if (resolvedTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [resolvedTheme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem(storageKey, newTheme);
        } catch {
            // Ignore localStorage access errors
        }
    };

    const toggleTheme = () => {
        const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, resolvedTheme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
