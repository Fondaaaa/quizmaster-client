import { NavLink } from 'react-router-dom'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  BoltIcon,
  HomeIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

import { ROUTES } from '@/router/routes.ts'

const navigation = [
  { name: 'Home', href: ROUTES.HOME, icon: HomeIcon },
]

export function Navbar() {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  const isQueryActive = isFetching > 0 || isMutating > 0

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                <BoltIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight tracking-tight">AppTemplate</span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                  Router + Query + TS
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right Header: TanStack Query Sync Indicator & Quick Badges */}
          <div className="flex items-center gap-3">
            {/* Live Query Cache Activity Indicator */}
            <div
              className={`hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                isQueryActive
                  ? 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300'
                  : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400'
              }`}
            >
              <ArrowPathIcon
                className={`h-3.5 w-3.5 ${isQueryActive ? 'animate-spin text-amber-600 dark:text-amber-400' : 'text-slate-400'}`}
                aria-hidden="true"
              />
              <span>{isQueryActive ? 'Syncing cache...' : 'Cache fresh'}</span>
            </div>

            {/* Mobile Menu Popover */}
            <Popover className="md:hidden">
              {({ open, close }) => (
                <>
                  <PopoverButton
                    className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    aria-label="Toggle navigation menu"
                  >
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </PopoverButton>

                  <PopoverBackdrop className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs" />

                  <PopoverPanel className="absolute left-0 right-0 top-16 z-50 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xl">
                    <div className="flex flex-col gap-1">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          onClick={() => close()}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium ${
                              isActive
                                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                            }`
                          }
                        >
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}
