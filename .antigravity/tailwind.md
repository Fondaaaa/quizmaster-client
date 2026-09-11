# Tailwind CSS & UI Styling

Use the repository's installed Tailwind version and existing
configuration. Do not assume configuration APIs from another major
version.

## Styling Principles

-   Prefer Tailwind utilities for local styling.
-   Reuse existing design tokens and component primitives.
-   Keep visual decisions consistent with the existing design system.
-   Avoid arbitrary values when an existing token or utility expresses
    the intent.
-   Do not introduce a second styling system without a concrete
    architectural reason.

## Class Organization

Keep class lists readable and logically grouped:

1.  Layout.
2.  Spacing.
3.  Sizing.
4.  Typography.
5.  Visual treatment.
6.  Interaction/state.
7.  Responsive variants.

Use the project's established class sorting/formatting tooling if
present.

## Responsive Design

Design mobile-first unless the existing application follows another
established strategy.

Prefer content-driven breakpoints over device-specific assumptions.

Avoid:

``` text
mobile
tablet
desktop
```

as hard architectural states. Components should remain usable at
intermediate widths.

## States

Style important interaction states explicitly:

-   `hover`.
-   `focus-visible`.
-   `disabled`.
-   `aria-*` / `data-*` states when supported by the component system.
-   Validation/error states.
-   Loading/pending states.

Keyboard focus must remain visible.

Do not use color alone to communicate an error, success state, or
selection.

## Accessibility

Use semantic HTML before styling it.

Examples:

-   `<button>` for actions.
-   `<a>` for navigation.
-   `<label>` for form controls.
-   Headings in logical order.
-   Lists for lists.

Use ARIA only when native semantics are insufficient.

Interactive controls must have an accessible name.

Do not remove focus outlines without providing an equivalent accessible
focus indicator.

## Components

Prefer reusable primitives for repeated UI patterns.

If the project has a component library, extend it before creating a
parallel implementation.

Do not create a component solely to wrap a single Tailwind class unless
it establishes a meaningful semantic or reuse boundary.

## Conditional Classes

Use the project's established class composition utility, if one exists.

Do not construct fragile class strings manually when the project already
has a standard helper.

## Design Tokens

Prefer semantic tokens such as:

``` text
background
foreground
muted
border
primary
destructive
```

over hard-coded colors repeated throughout the application.

A visual change that should affect a whole product should normally be
implemented at the token/component level rather than through scattered
overrides.
