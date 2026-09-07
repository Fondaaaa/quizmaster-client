import { ArrowPathIcon } from '@heroicons/react/24/outline'

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
}

export function LoadingSpinner({
  size = 'md',
  className = '',
  label = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`} role="status">
      <ArrowPathIcon
        className={`animate-spin text-indigo-600 dark:text-indigo-400 ${sizeClasses[size]}`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
