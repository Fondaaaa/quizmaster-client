# Architecture & Project Structure

## Default Structure

Use the repository's existing structure when it is coherent. For a new
or substantially reorganized app, prefer:

``` text
src/
  app/
    routes/
    providers/
    config/
  components/
    ui/
    layout/
  features/
    <feature>/
      components/
      hooks/
      queries/
      mutations/
      schemas/
      types.ts
      utils.ts
  lib/
    api/
    auth/
    query/
    utils/
  styles/
  main.tsx
  router.tsx
public/
tests/
```

Adapt names to the actual project rather than forcing this layout onto
an established codebase.

## Responsibility Boundaries

### `app/`

Application composition and infrastructure:

-   Router configuration.
-   Global providers.
-   Application configuration.
-   Global error boundaries.
-   Startup/bootstrap code.

Do not put feature-specific business logic here.

### `routes/`

Route-level composition:

-   Route definitions.
-   Route loaders/before-load logic where appropriate.
-   Route-specific page composition.
-   URL/search-parameter validation.

Routes should compose features rather than becoming large business-logic
containers.

### `components/ui/`

Reusable, domain-agnostic UI primitives:

-   Buttons.
-   Inputs.
-   Dialogs.
-   Cards.
-   Tables.
-   Form primitives.

Do not place product-specific business rules here.

### `features/`

Feature/domain code. A feature owns behavior that changes together:

-   UI specific to the feature.
-   Data access for the feature.
-   Validation schemas.
-   Feature-specific types.
-   Feature-specific hooks/utilities.

Avoid cross-feature imports that create circular dependencies.

### `lib/`

Shared infrastructure and utilities that are genuinely reusable across
features.

A utility belongs here only when it is domain-agnostic and has more than
one credible consumer.

## Dependency Direction

Prefer:

``` text
app
 ↓
routes
 ↓
features
 ↓
shared components / lib
```

Lower-level modules should not import upward into route or application
composition.

Avoid:

-   Feature A importing internal implementation details from Feature B.
-   UI primitives importing feature code.
-   `lib` importing feature modules.
-   Route modules becoming the only place where reusable business logic
    exists.

## Domain Logic

Keep business rules close to the domain that owns them.

Prefer pure functions for deterministic rules:

``` ts
export function canArchiveProject(project: Project): boolean {
  return project.status === "active" && project.ownerId !== null
}
```

Keep side effects at boundaries:

-   API clients.
-   Query/mutation functions.
-   Browser APIs.
-   Router navigation.
-   Storage.

## Component Design

Prefer small composable components.

A component should generally:

-   Receive explicit props.
-   Render predictable output.
-   Delegate data operations to established data-access patterns.
-   Avoid owning unrelated state.
-   Avoid hidden global side effects.

Split a component when it has multiple independent responsibilities, not
merely because it reaches a particular line count.

## Naming

Use domain language consistently.

-   Components: `PascalCase`.
-   Hooks: `useSomething`.
-   Functions/variables: `camelCase`.
-   Types/interfaces: `PascalCase`.
-   Constants: `camelCase` unless project conventions require otherwise.
-   Route files: follow the TanStack Router convention used by the
    repository.
-   Feature directories: use stable domain names, not UI labels when
    possible.

Prefer names that describe intent over implementation:

``` text
ProjectStatusBadge
useProjectFilters
getProjectById
```

Avoid vague names:

``` text
Helper
Manager
Common
Stuff
Data
Thing
```
