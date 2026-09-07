import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs ${
        hoverable
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
