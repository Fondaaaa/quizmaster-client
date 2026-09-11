# AGENTS.md --- Antigravity Project Instructions

## Purpose

This repository is a React + TypeScript application using TanStack and
Tailwind CSS. These instructions define the default engineering
standards for Antigravity agents.

Read this file first. It is the routing document for the more specific
instructions in `.antigravity/`.

## Instruction Routing

Before making changes, load the file(s) relevant to the task:

-   `.antigravity/architecture.md` --- project boundaries, dependency
    direction, and structure.
-   `.antigravity/code-style.md` --- TypeScript, React, naming,
    formatting, and implementation conventions.
-   `.antigravity/tanstack.md` --- TanStack Router/Query patterns and
    server-state boundaries.
-   `.antigravity/tailwind.md` --- Tailwind styling, design tokens,
    responsive UI, and class conventions.
-   `.antigravity/testing.md` --- test strategy, test placement, and
    verification requirements.
-   `.antigravity/workflow.md` --- task execution, validation, scope
    control, and definition of done.

If a task crosses multiple areas, read all applicable files. More
specific instructions take precedence over general guidance when they do
not conflict with this file.

## Core Engineering Principles

1.  Prefer simple, explicit solutions over clever abstractions.
2.  Keep changes narrowly scoped to the requested behavior.
3.  Preserve existing conventions unless there is a concrete reason to
    change them.
4.  Use TypeScript's type system instead of runtime workarounds where
    practical.
5.  Treat UI, routing, data fetching, and domain logic as separate
    concerns.
6.  Prefer composition over inheritance.
7.  Avoid introducing dependencies unless the dependency provides clear,
    durable value.
8.  Do not duplicate business rules across components.
9.  Make loading, empty, error, and success states intentional.
10. Optimize for maintainability and readability before micro-optimizing
    performance.

## Before Editing

-   Inspect the relevant directory and nearby files.
-   Identify the existing pattern before creating a new one.
-   Check package scripts and installed versions before assuming APIs.
-   Search for existing utilities, components, hooks, queries, routes,
    and types that can be reused.
-   Do not reorganize unrelated code merely because a different
    structure would be preferred.

## Implementation Rules

-   Do not use `any` unless there is a documented, unavoidable boundary.
-   Do not suppress TypeScript or lint errors without understanding and
    documenting the reason.
-   Do not put API calls directly into presentational components when an
    existing data-access pattern exists.
-   Do not create generic abstractions for one-off behavior.
-   Keep components focused; split them when responsibilities become
    difficult to understand.
-   Keep public interfaces small and explicit.
-   Validate user-controlled data at system boundaries.
-   Never commit secrets, credentials, tokens, generated local
    configuration, or environment-specific private values.

## Validation

After meaningful changes, run the narrowest useful checks first, then
broader checks as appropriate:

1.  Typecheck.
2.  Lint.
3.  Unit/component tests affected by the change.
4.  Build when routing, bundling, dependencies, environment
    configuration, or production behavior may be affected.

Do not claim a check passed unless it was actually run.

## Communication

When completing a task, summarize:

-   What changed.
-   Why the approach was chosen.
-   What validation was run.
-   Any known limitations or follow-up work.

Avoid unnecessary commentary. Keep the implementation itself as the
source of truth.
