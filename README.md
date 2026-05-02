# Sudip Tamang — Portfolio (Vite + React + TS + SCSS)

A polished single-page React portfolio with a glass / aurora aesthetic, custom cursor, light/dark toggle, and editorial typography.

## Stack

- **Vite 5** — dev server + bundler
- **React 18** with **TypeScript** (strict mode)
- **SCSS** modules organised as partials under `src/styles/`

## Getting started

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
.
├── index.html              # Vite entry HTML (Google Fonts preconnect)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx            # ReactDOM.createRoot
    ├── App.tsx             # Composes sections + global hooks
    ├── types.ts            # Shared TypeScript interfaces
    ├── components/
    │   ├── CustomCursor.tsx
    │   └── Nav.tsx
    ├── hooks/
    │   ├── useReveal.ts    # IntersectionObserver-driven scroll reveals
    │   └── useTheme.ts     # light/dark with localStorage
    ├── sections/
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Experience.tsx
    │   ├── Projects.tsx
    │   ├── Skills.tsx
    │   ├── Education.tsx
    │   └── Contact.tsx
    └── styles/
        ├── main.scss              # Entry — @use's everything below
        ├── _tokens.scss           # CSS custom properties + breakpoint mixins
        ├── _base.scss             # Reset, layout, typography
        ├── _atmosphere.scss       # Aurora background, grain, custom cursor
        ├── _nav.scss
        ├── _hero-about.scss
        ├── _work.scss             # Experience timeline + Projects
        └── _skills-edu-contact.scss
```

## Notes

- **Theme** is stored in `localStorage` and applied via `data-theme="light|dark"` on `<html>`. Default is light.
- **Custom cursor** auto-disables on touch / coarse pointer devices.
- **SCSS** uses the modern `@use` module system (no `@import`). Each partial declares `@use "tokens" as *;` to pull in the breakpoint mixins.
- **Reduced motion** respected via `prefers-reduced-motion`.

## Deploy

The `npm run build` output in `dist/` is a fully static site — drop it on Vercel, Netlify, Cloudflare Pages, or any static host.
