import { type ReactNode } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const maxWidthStyles = {
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'lg',
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <div className="flex min-h-full items-end justify-center sm:items-center">
          <DialogPanel
            transition
            className={`relative transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 text-left shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-closed:sm:translate-y-0 data-closed:sm:scale-95 w-full ${maxWidthStyles[maxWidth]} border border-slate-200 dark:border-slate-800`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  {title && (
                    <DialogTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                      {title}
                    </DialogTitle>
                  )}
                  {description && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4">{children}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
