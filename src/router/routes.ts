/**
 * Type-safe route path constants.
 * Keep this file free of component imports to prevent circular dependencies.
 *
 * Example:
 *   <Link to={ROUTES.HOME}>Home</Link>
 */
export const ROUTES = {
  HOME: '/',
  // Add your application route paths here:
  // DASHBOARD: '/dashboard',
  // SETTINGS: '/settings',
} as const

export type AppRoutePath = (typeof ROUTES)[keyof typeof ROUTES]
