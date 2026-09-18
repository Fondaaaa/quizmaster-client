import type {ReactNode} from 'react';
import {QueryProvider} from '@/app/providers/QueryProvider';
import {ThemeProvider} from '@/app/providers/ThemeProvider';

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({children}: AppProvidersProps) {
    return (
        <QueryProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </QueryProvider>
    );
}
