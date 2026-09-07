export interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 ${className}`}
      aria-hidden="true"
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  )
}
