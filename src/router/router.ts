import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout.tsx'
import { HomePage } from '../pages/HomePage.tsx'
import { NotFoundPage } from '../pages/NotFoundPage.tsx'
import { ErrorPage } from '../pages/ErrorPage.tsx'

/**
 * Application route definitions using React Router v7 Data Router format.
 */

export const ROUTES = {
  HOME: '/',
  // Add your application route paths here:
  // DASHBOARD: '/dashboard',
  // SETTINGS: '/settings',
} as const

export type AppRoutePath = (typeof ROUTES)[keyof typeof ROUTES]

export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      // Register child routes here:
      // {
      //   path: 'dashboard',
      //   Component: DashboardPage,
      // },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]

/**
 * Created Browser Router instance ready for <RouterProvider router={router} />
 */
export const router = createBrowserRouter(routes)
