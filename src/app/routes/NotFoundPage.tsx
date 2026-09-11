import {Link} from 'react-router-dom';

export function NotFoundPage() {
    return (
        <section className="text-center">
            <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
            <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
            <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
                Go to Home
            </Link>
        </section>
    );
}
