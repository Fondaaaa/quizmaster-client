import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { ExclamationTriangleIcon, HomeIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/common/Button'

export function ErrorPage() {
  const error = useRouteError()

  let title = 'Unexpected Error'
  let message = 'An unexpected error occurred while loading this page.'

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`
    message = typeof error.data === 'string' ? error.data : error.data?.message || message
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
          <ExclamationTriangleIcon className="h-8 w-8" aria-hidden="true" />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {message}
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            leftIcon={<ArrowPathIcon className="h-4 w-4" />}
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
          <Link to="/">
            <Button variant="primary" leftIcon={<HomeIcon className="h-4 w-4" />}>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
