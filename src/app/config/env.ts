export const appConfig = {
    appName: import.meta.env.VITE_APP_NAME || 'QuizMaster',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    environment: import.meta.env.MODE || 'development',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
} as const;
