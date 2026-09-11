# Agent Workflow & Definition of Done

## 1. Understand

Before editing:

-   Restate the requested outcome internally.
-   Identify the relevant feature and architectural boundary.
-   Inspect existing implementation patterns.
-   Check package versions and scripts when framework behavior matters.

Do not start by creating new abstractions.

## 2. Plan

For non-trivial tasks, establish a small plan:

1.  Files/components likely to change.
2.  Data-flow or state-flow implications.
3.  Tests/validation required.
4.  Potential compatibility concerns.

Keep the plan proportional to the task.

## 3. Implement

-   Make the smallest coherent change.
-   Reuse existing primitives.
-   Follow existing naming and folder conventions.
-   Keep unrelated refactors out of the patch.
-   Preserve public behavior unless the request explicitly changes it.

## 4. Verify

Run relevant checks after implementation.

At minimum for meaningful TypeScript/React changes:

-   Typecheck.
-   Lint.
-   Relevant tests.

Also run a production build when the change can affect:

-   Routing.
-   Bundling.
-   Environment variables.
-   Dependency resolution.
-   Production-only behavior.

## 5. Review

Before finishing, inspect the diff for:

-   Accidental changes.
-   Debug logging.
-   Dead code.
-   Unused imports.
-   Unintended API changes.
-   Accessibility regressions.
-   Missing loading/error/empty states.
-   Hard-coded values that should use existing tokens.
-   Tests that assert implementation details.
-   Secrets or sensitive configuration.

## Scope Control

Do not:

-   Upgrade dependencies unless requested or necessary.
-   Rename broad sets of files for aesthetics.
-   Rewrite working code solely to match personal preference.
-   Add a state-management library when existing state/query mechanisms
    are sufficient.
-   Add a UI library when existing primitives are sufficient.
-   Fix unrelated lint warnings in a large refactor unless required by
    the change.

## Dependency Changes

Before adding a package:

1.  Check whether the functionality already exists.
2.  Check whether the project has an established alternative.
3.  Consider bundle size and maintenance cost.
4.  Confirm compatibility with the current framework versions.
5.  Add the smallest dependency that solves the actual problem.

Do not add dependencies speculatively.

## Security

Never:

-   Commit secrets.
-   Print credentials in logs.
-   Put private keys in source code.
-   Trust client-side authorization as the sole security boundary.
-   Render unsanitized HTML without an explicit, reviewed requirement.

Treat all external input as untrusted.

## Accessibility

For user-facing changes, verify:

-   Keyboard accessibility.
-   Focus visibility.
-   Labels and accessible names.
-   Semantic elements.
-   Error messaging.
-   Sufficient non-color cues.
-   Reasonable screen-reader behavior.

## Performance

Prefer correct architecture over premature optimization.

Investigate before optimizing.

Common first-order concerns:

-   Unnecessary network requests.
-   Excessive rerenders caused by avoidable state.
-   Large client bundles.
-   Unbounded lists.
-   Duplicate data fetching.
-   Expensive work during render.

Do not add memoization, caching, virtualization, or code splitting
without a reason.

## Definition of Done

A task is complete when:

-   The requested behavior is implemented.
-   The change follows the repository's established architecture.
-   Types are correct.
-   Relevant tests are added/updated where appropriate.
-   Relevant validation has been run.
-   No unrelated changes are included.
-   The final response accurately reports what was changed and what was
    verified.
