# Code Style & React Conventions

## TypeScript

Use strict TypeScript.

Prefer inferred types when the expression is obvious:

``` ts
const projectCount = projects.length
```

Add explicit types when they clarify a public boundary or non-obvious
contract:

``` ts
export function formatProjectStatus(status: ProjectStatus): string {
  // ...
}
```

Prefer discriminated unions for state with mutually exclusive variants:

``` ts
type Result<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: Error }
```

Avoid:

-   `any`.
-   Broad casts.
-   Non-null assertions used as a shortcut.
-   Duplicate type definitions for the same domain object.
-   Optional properties when a discriminated state is clearer.

## React

Prefer function components and composition.

Keep components pure with respect to rendering.

Use state for state that actually belongs to the component. Do not
mirror props into state unless there is a clear synchronization
requirement.

Avoid unnecessary `useEffect`. Effects are for synchronizing React with
external systems, not for deriving values that can be calculated during
render.

Prefer:

``` ts
const filteredProjects = projects.filter(matchesFilter)
```

over an effect that stores `filteredProjects` in state.

Use `useMemo` and `useCallback` only when they solve a demonstrated
rendering or identity problem or are required by an API contract.

## Props

Prefer explicit, meaningful props:

``` ts
type ProjectCardProps = {
  project: Project
  onOpen: (projectId: string) => void
}
```

Avoid large "options" objects that obscure component contracts.

Avoid prop drilling by default, but do not introduce context merely to
avoid passing one or two values through a small component tree.

## Event Handlers

Use names that describe intent:

``` ts
onSubmit
onOpen
onDelete
onValueChange
```

Avoid generic names such as `handleThing` in component APIs.

Internal handler names may use `handleX` when that improves readability.

## Async UI

Every asynchronous user-facing operation should have intentional:

-   Loading state.
-   Success state where useful.
-   Empty state where applicable.
-   Error state.
-   Disabled/pending interaction state where applicable.

Do not hide errors silently.

## Forms

Use the repository's existing form stack and validation conventions.

Validate at the boundary. Keep schema definitions reusable when they are
shared by forms and API/domain boundaries.

Avoid duplicating validation rules in:

-   UI labels.
-   Component conditions.
-   API calls.
-   Separate schema definitions.

## Imports

Prefer stable import boundaries.

-   External packages first.
-   Internal aliases next.
-   Relative imports last, following repository conventions.
-   Remove unused imports.
-   Avoid deep imports into another feature's internals.

## Comments

Write comments for why, not what.

Good:

``` ts
// Preserve the server ordering because users compare this list with the audit log.
```

Avoid comments that merely restate code.

Do not leave stale TODOs. If a TODO represents real planned work, make
it specific enough to be actionable.

## Formatting

Follow the project's formatter configuration exactly.

Do not manually reformat unrelated files.

If Prettier/Biome/ESLint is configured, use the existing configuration
rather than adding competing formatting rules.
