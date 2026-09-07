import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'

export interface ErrorMessageProps {
  title?: string
  message: string
  onRetry?: () => void
  className?: string
}

export function ErrorMessage({
  title = 'Something went wrong',
  message,
  onRetry,
  className = '',
}: ErrorMessageProps) {
  return (
    <div
      className={`rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 p-6 ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-rose-100 dark:bg-rose-900/50 p-2 text-rose-600 dark:text-rose-400 shrink-0">
          <ExclamationTriangleIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-rose-900 dark:text-rose-200">{title}</h3>
          <p className="mt-1 text-sm text-rose-700 dark:text-rose-300">{message}</p>
          {onRetry && (
            <div className="mt-4">
              <Button variant="danger" size="sm" onClick={onRetry}>
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
