import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export function NotFoundPage() {
    const {t} = useTranslation();

    return (
        <section className="text-center">
            <h2 className="text-2xl font-bold">{t('notFound.title')}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{t('notFound.description')}</p>
            <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400">
                {t('notFound.goHome')}
            </Link>
        </section>
    );
}
