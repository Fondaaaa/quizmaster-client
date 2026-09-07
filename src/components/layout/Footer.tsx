export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>
          Production scaffold template with React 19, React Router v7, TanStack Query v5, Tailwind CSS, Headless UI & Heroicons.
        </p>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
            TypeScript 5+
          </span>
          <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
            Vite 8+
          </span>
        </div>
      </div>
    </footer>
  )
}
