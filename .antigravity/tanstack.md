# TanStack Conventions

Use the TanStack libraries already installed in the repository. Do not
assume a specific major version without checking `package.json` and
existing usage.

## TanStack Router

Treat the URL as application state when state should be:

-   Shareable.
-   Bookmarkable.
-   Navigable with browser history.
-   Meaningful on refresh.

Examples include:

-   Search terms.
-   Pagination.
-   Sort order.
-   Selected filters.
-   Resource identifiers.

Use typed route params and validated search params.

Keep route components focused on composition. Move reusable feature
behavior into feature modules.

Do not duplicate route parsing logic across components.

## Route Loaders / Before-Load

Use route-level lifecycle APIs when the operation is genuinely tied to
navigation:

-   Authentication/authorization gates.
-   Required route data.
-   URL-derived prerequisites.

Avoid turning loaders into general-purpose service containers.

Do not fetch the same resource independently in multiple route/component
layers unless there is a clear reason.

## TanStack Query

Use TanStack Query for server state when the project has it configured.

Server state should generally include:

-   Remote API data.
-   Cache state.
-   Refetching.
-   Background synchronization.
-   Mutation lifecycle.

Do not copy query results into local React state merely to render them.

Prefer stable, descriptive query keys.

Conceptually:

``` ts
["projects", projectId]
["projects", { status, page }]
```

Keep query functions and query-key construction consistent. If the
project has a query factory pattern, follow it.

## Mutations

Mutations should:

-   Express the server-side operation clearly.
-   Expose pending/error/success states.
-   Invalidate or update affected query data deliberately.
-   Avoid broad cache invalidation when a targeted update is possible.

After a mutation, choose deliberately between:

1.  Updating cached data directly.
2.  Invalidating affected queries.
3.  Refetching a specific resource.

Do not rely on accidental cache behavior.

## Query Boundaries

Keep network access outside presentational UI.

A component may consume query state, but the query implementation should
live in an established data-access layer or feature module.

Prefer:

``` text
component → feature query → API client
```

over:

``` text
component → fetch()
```

## API Client

Centralize cross-cutting HTTP behavior:

-   Base URL.
-   Authentication headers.
-   Serialization.
-   Error normalization.
-   Request defaults.

Do not duplicate low-level HTTP configuration across feature queries.

## Pending and Error States

TanStack state should be translated into clear UI behavior.

Do not render a blank page while a query is pending.

Do not treat every error as equivalent. Where useful, distinguish:

-   Not found.
-   Unauthorized/forbidden.
-   Validation failure.
-   Network/server failure.

Follow the application's established error model.
