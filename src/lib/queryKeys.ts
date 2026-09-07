/**
 * Query Key Factory Pattern
 *
 * Query keys in TanStack Query should be structured as arrays.
 * This pattern organizes keys hierarchically from most generic to most specific,
 * enabling granular cache invalidation, updates, and optimistic UI updates.
 *
 * Example Usage:
 * - Invalidate everything related to "items":
 *     queryClient.invalidateQueries({ queryKey: queryKeys.items.all })
 * - Invalidate only item lists:
 *     queryClient.invalidateQueries({ queryKey: queryKeys.items.lists() })
 * - Invalidate a specific item by id:
 *     queryClient.invalidateQueries({ queryKey: queryKeys.items.detail(itemId) })
 */

export const createQueryKeyFactory = <TFilter = unknown>(entity: string) => ({
  all: [entity] as const,
  lists: () => [entity, 'list'] as const,
  list: (filter?: TFilter) => [entity, 'list', { filter }] as const,
  details: () => [entity, 'detail'] as const,
  detail: (id: string | number) => [entity, 'detail', id] as const,
})

/**
 * Centralized Application Query Keys
 * Register your domain entities here as you add new features.
 */
export const queryKeys = {
  // Example entity key factory
  items: createQueryKeyFactory<{ search?: string; status?: string }>('items'),
}
