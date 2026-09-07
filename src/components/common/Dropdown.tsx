import { type ReactNode } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export interface DropdownItem {
  id: string | number
  label: string
  icon?: ReactNode
  onClick?: () => void
  disabled?: boolean
  danger?: boolean
}

export interface DropdownProps {
  label: ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
  className?: string
}

export function Dropdown({ label, items, align = 'right', className = '' }: DropdownProps) {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <MenuButton className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
        {label}
        <ChevronDownIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
      </MenuButton>

      <MenuItems
        transition
        className={`absolute ${
          align === 'right' ? 'right-0' : 'left-0'
        } z-30 mt-2 w-48 origin-top-right rounded-xl bg-white dark:bg-slate-900 p-1 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0`}
      >
        {items.map((item) => (
          <MenuItem key={item.id} disabled={item.disabled}>
            {({ focus }) => (
              <button
                type="button"
                onClick={item.onClick}
                disabled={item.disabled}
                className={`group flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  focus
                    ? item.danger
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300'
                      : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                    : item.danger
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-slate-700 dark:text-slate-300'
                } ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {item.icon && <span className="h-4 w-4">{item.icon}</span>}
                {item.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
