import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  RocketLaunchIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { Modal } from '@/components/common/Modal'
import { Dropdown } from '@/components/common/Dropdown'

// Sample query to demonstrate TanStack Query in action on the home page
async function fetchTemplateStatus() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return {
    status: 'online',
    timestamp: new Date().toLocaleTimeString(),
    cacheVersion: 'v5.x',
    routesLoaded: 3,
  }
}

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dropdownSelection, setDropdownSelection] = useState('Option 1')

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['template-health'],
    queryFn: fetchTemplateStatus,
  })

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="text-center py-8 sm:py-12">
        <Badge variant="indigo" className="mb-4">
          React 19 • React Router v7 • TanStack Query v5 • Tailwind CSS v4
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          TypeScript Application Template
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A production-ready scaffold configured with data routing, server-state caching,
          Headless UI accessible primitives, and Heroicons.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            leftIcon={<SparklesIcon className="h-5 w-5" />}
            onClick={() => setIsModalOpen(true)}
          >
            Open Headless UI Modal
          </Button>

          <Button
            variant="outline"
            leftIcon={<ArrowPathIcon className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />}
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? 'Refetching...' : 'Test TanStack Query'}
          </Button>

          <Dropdown
            label={`Selection: ${dropdownSelection}`}
            items={[
              { id: '1', label: 'Option 1', onClick: () => setDropdownSelection('Option 1') },
              { id: '2', label: 'Option 2', onClick: () => setDropdownSelection('Option 2') },
              { id: '3', label: 'Option 3', onClick: () => setDropdownSelection('Option 3') },
            ]}
          />
        </div>
      </section>

      {/* TanStack Query Live Status Card */}
      <section>
        <Card className="bg-gradient-to-br from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-800/80 border-indigo-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-600 p-2.5 text-white shadow-xs">
                <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                  TanStack Query Client Active
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Real-time query cache test with automatic background refetching
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isLoading ? (
                <span className="text-sm text-slate-500 animate-pulse">Loading cache...</span>
              ) : (
                <>
                  <Badge variant="emerald">Healthy ({data?.status})</Badge>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Last sync: {data?.timestamp}
                  </span>
                </>
              )}
            </div>
          </div>
        </Card>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hoverable>
          <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/50 p-3 w-fit text-indigo-600 dark:text-indigo-400">
            <RocketLaunchIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            React Router v7
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Configured in <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">src/routes.ts</code> with
            nested layouts, error boundaries, and type-safe paths.
          </p>
        </Card>

        <Card hoverable>
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/50 p-3 w-fit text-emerald-600 dark:text-emerald-400">
            <CircleStackIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            TanStack Query v5
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Preconfigured <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">QueryClient</code> with
            stale-while-revalidate caching, query key factories, and devtools.
          </p>
        </Card>

        <Card hoverable>
          <div className="rounded-xl bg-sky-50 dark:bg-sky-950/50 p-3 w-fit text-sky-600 dark:text-sky-400">
            <CodeBracketIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
            Backend Agnostic
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            No assumptions made about your API shape. Use <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">src/api/client.ts</code> or
            swap in your favorite REST/GraphQL SDK.
          </p>
        </Card>
      </section>

      {/* Quick Setup Guide */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheckIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          Template Structure & Quick Start
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="font-semibold text-slate-900 dark:text-white">1. Add New Routes</p>
            <p className="mt-1 text-xs">
              Add paths and page components to <code className="font-mono text-indigo-600 dark:text-indigo-400">src/routes.ts</code>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="font-semibold text-slate-900 dark:text-white">2. Point to Your Backend</p>
            <p className="mt-1 text-xs">
              Set <code className="font-mono text-indigo-600 dark:text-indigo-400">VITE_API_URL</code> in your environment or customize <code className="font-mono">src/api/client.ts</code>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="font-semibold text-slate-900 dark:text-white">3. Define Query Keys</p>
            <p className="mt-1 text-xs">
              Register domain keys using the factory in <code className="font-mono text-indigo-600 dark:text-indigo-400">src/lib/queryKeys.ts</code>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="font-semibold text-slate-900 dark:text-white">4. Headless UI & Icons</p>
            <p className="mt-1 text-xs">
              Use pre-built components in <code className="font-mono text-indigo-600 dark:text-indigo-400">src/components/common/</code> or import directly from <code className="font-mono">@headlessui/react</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Headless UI Modal Example */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Headless UI Dialog Component"
        description="Accessible, animated modal powered by @headlessui/react and Tailwind CSS"
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">
          This dialog automatically manages focus trapping, background overlay blur, transition animations, and Escape key handling out-of-the-box.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Got it!
          </Button>
        </div>
      </Modal>
    </div>
  )
}
