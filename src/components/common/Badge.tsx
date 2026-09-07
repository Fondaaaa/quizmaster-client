import type { ReactNode } from 'react'

export type BadgeVariant = 'slate' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky'

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  indigo: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-950/50 dark:text-indigo-300',
  emerald: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-950/50 dark:text-emerald-300',
  amber: 'bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-950/50 dark:text-amber-300',
  rose: 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/10 dark:bg-rose-950/50 dark:text-rose-300',
  sky: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-600/10 dark:bg-sky-950/50 dark:text-sky-300',
}

export function Badge({ children, variant = 'slate', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
