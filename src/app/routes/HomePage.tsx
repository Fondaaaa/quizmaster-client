import {useTranslation} from 'react-i18next';

export function HomePage() {
    const {t} = useTranslation();

    return (
        <section>
            <h2 className="text-xl font-semibold">{t('home.title')}</h2>
        </section>
    );
}