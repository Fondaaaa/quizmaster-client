import { Link } from 'react-router-dom'
import { QuestionMarkCircleIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/common/Button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
        <QuestionMarkCircleIcon className="h-10 w-10" aria-hidden="true" />
      </div>

      <span className="mt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
        404 error
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It may have been moved or does not exist.
      </p>

      <div className="mt-8">
        <Link to="/">
          <Button variant="primary" leftIcon={<HomeIcon className="h-4 w-4" />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
