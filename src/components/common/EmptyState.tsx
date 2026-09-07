import type { ComponentType, SVGProps } from 'react'
import { FolderOpenIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'

export interface EmptyStateProps {
  title: string
  description?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({
  title,
  description,
  icon: Icon = FolderOpenIcon,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
      <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4 text-slate-500 dark:text-slate-400">
        <Icon className="h-8 w-8" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm">{description}</p>
      )}
      {actionLabel && onAction && (
        <div className="mt-6">
          <Button onClick={onAction}>{actionLabel}</Button>
        </div>
      )}
    </div>
  )
}
