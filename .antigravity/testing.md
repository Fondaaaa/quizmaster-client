# Testing & Verification

## Test Philosophy

Test behavior and contracts rather than implementation details.

Prioritize tests for:

1.  Business rules.
2.  User-visible behavior.
3.  Routing and URL state.
4.  Data transformations.
5.  Important error paths.
6.  Regression-prone integrations.

Do not write tests merely to increase coverage numbers.

## Unit Tests

Use unit tests for deterministic logic:

-   Parsers.
-   Formatters.
-   Validators.
-   Permission rules.
-   Domain calculations.
-   Query-key factories when behavior is non-trivial.

Tests should be small and deterministic.

## Component Tests

Prefer testing through the rendered UI and user interactions.

Good examples:

-   User submits a form and sees validation feedback.
-   User selects a filter and the list updates.
-   Loading state appears while data is pending.
-   Error state is actionable.
-   A button becomes disabled during a mutation.

Avoid asserting implementation details such as internal hook calls or
private component state.

## Integration Tests

Use integration tests when multiple application layers must work
together:

-   Route + query + UI.
-   Form + validation + mutation.
-   Authentication gate + navigation.
-   Cache update + rendered state.

## End-to-End Tests

Use E2E tests for critical user journeys rather than every possible
branch.

Prioritize:

-   Authentication.
-   Core CRUD workflows.
-   Payments or other high-impact flows, if applicable.
-   Important navigation journeys.
-   Critical recovery/error paths.

## Mocking

Mock at stable boundaries.

Prefer mocking network boundaries rather than mocking every internal
function.

Do not make tests depend on:

-   Real production services.
-   Real credentials.
-   Wall-clock timing without control.
-   Random values without deterministic seeding/control.

## Regression Tests

When fixing a bug, add a regression test when practical.

The test should fail for the old behavior and pass for the corrected
behavior.

## Validation Commands

Use the repository's actual scripts. Typical checks may include:

``` bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Do not assume these exact scripts exist; inspect `package.json` first.

## Test Naming

Name tests around behavior:

``` text
shows validation when the title is empty
preserves filters in the URL
disables submit while saving
renders an error when the project cannot be loaded
```

Avoid names tied to internal implementation:

``` text
calls useEffect
sets state variable
calls helper function
```
