import {Outlet} from 'react-router-dom';

export function RootLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b border-slate-200 px-4 py-3">
                <h1 className="text-lg font-semibold">QuizMaster</h1>
            </header>
            <main className="flex-1 p-4">
                <Outlet/>
            </main>
            <footer className="border-t border-slate-200 px-4 py-3 text-center text-sm text-slate-500">
                QuizMaster
            </footer>
        </div>
    );
}
