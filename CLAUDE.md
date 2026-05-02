# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on http://localhost:5173 (auto-opens browser)
npm run build      # tsc -b && vite build — TS errors will block the build
npm run typecheck  # tsc -b --noEmit
npm run preview    # serve the built dist/
```

There is no test runner and no lint script. `typecheck` is the only static check.

## Architecture

Single-page React 18 + TypeScript portfolio bundled with Vite 5. SCSS is compiled by Vite via the `sass` dev dependency.

### Composition

`src/main.tsx` mounts `<App />` (StrictMode) into `#root`. `src/App.tsx` is the only composer — it renders the atmosphere layers (`.aurora`, `.grain`), `<CustomCursor />`, `<Nav />`, then sections in fixed order: Hero → About → Experience → Projects → Skills → Education → Contact. Sections are self-contained and own their data inline; only the cross-cutting types live in `src/types.ts`.

### Two app-wide hooks (called once in `App`)

- `useTheme()` — reads/writes `localStorage["theme"]` and sets `data-theme="light|dark"` on `<html>`. Default is `"light"`. All theming is driven by CSS custom properties scoped to `[data-theme="light"]` in `_tokens.scss`; do not branch on theme in JS for styling.
- `useReveal()` — observes every `.reveal` element with `IntersectionObserver` and adds `.in` once. It **unobserves after firing**, so reveals are one-shot. Elements added after mount are not picked up. Falls back to immediately adding `.in` when `IntersectionObserver` is unavailable.

### Custom cursor contract

`CustomCursor` runs a single `requestAnimationFrame` loop and drives two fixed-position elements (`.cursor-dot`, `.cursor-ring`). Hover state is opt-in via DOM:
- Any `a`, `button`, `[role=button]`, or `[data-cursor=hover]` ancestor → `.is-hover` on the ring.
- `[data-cursor=text]` ancestor → `.is-text` on the ring.

The cursor is hidden on coarse-pointer devices in CSS (`_atmosphere.scss`), not JS — keep that gate there.

### Styles

`src/styles/main.scss` is the **only** stylesheet entry, imported once from `main.tsx`. It `@use`s the partials in a fixed order. Rules:
- Modern `@use` module system only — no `@import`.
- Every partial that needs breakpoint mixins (`@include sm`, `@include md`) must start with `@use "tokens" as *;`.
- Design tokens are CSS custom properties in `:root` / `[data-theme="light"]` (`_tokens.scss`); breakpoint values are SCSS vars in the same file. Use the CSS vars in component styles so theme switching is automatic.

### TypeScript config

`strict: true` with `noUnusedLocals` and `noUnusedParameters` deliberately **off** — don't add unused-var lint-equivalents back. `allowImportingTsExtensions` is on but the codebase imports without extensions; follow the existing style. `noEmit: true` — the build relies on Vite for emit and `tsc -b` only for type-checking.
