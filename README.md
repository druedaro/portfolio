<div align="center">

# David Rueda — Portfolio

**Frontend Developer & Technical Marketing Expert**

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## About

Personal portfolio of **David Rueda**, Frontend Developer specialised in modern frontend architectures and technical marketing. The site is designed to convey technical credibility and excellence through a premium visual experience, high-performance native animations, and a fully responsive layout.

> Built with **Astro** for maximum speed, **React** for interactive components, and **Tailwind CSS** for a consistent and maintainable design system.

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | [Astro 5](https://astro.build) | Static rendering, maximum performance, zero JS by default |
| UI Components | [React 19](https://react.dev) | Islands architecture for interactive components |
| Styles | [Tailwind CSS 3](https://tailwindcss.com) | Utility-first, native dark mode, responsive |
| Language | [TypeScript 5](https://www.typescriptlang.org) | Static typing across the entire project |
| i18n | Custom (`src/i18n/`) | Multilingual support ES / EN / CA |
| Animations | IntersectionObserver API | Native scroll reveals with no external dependencies |

---

## Features

- ⚡ **Extreme performance** — Static Site Generation (SSG) with Astro. Zero unnecessary hydration.
- 🌐 **Multilingual** — Spanish, English and Catalan at `/`, `/en/` and `/ca/`.
- 🎨 **Dark / Light mode** — With preference persisted in `localStorage`.
- 📱 **Fully responsive** — Mobile-first design, optimised for any device.
- ✨ **Scroll Reveal Animations** — Smooth entry animations with `IntersectionObserver`, no libraries.
- ♿ **WCAG AA Accessible** — Correct contrast ratios, HTML5 semantics, ARIA attributes.
- 🔍 **SEO optimised** — Meta tags, hreflang alternates, per-locale titles and descriptions.
- 🖼️ **SVG Favicon** — Custom DR monogram, supported by all modern browsers.

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg           # DR monogram
├── src/
│   ├── components/
│   │   ├── Nav.tsx           # Navigation with scrollspy and language selector
│   │   ├── Hero.tsx          # Hero section with LetterGlitch effect
│   │   ├── WhatIDo.tsx       # Accordion-based services section
│   │   ├── Experience.tsx    # Professional timeline
│   │   ├── Education.tsx     # Academic background
│   │   ├── Competencies.tsx  # Technical skills with TechCarousel
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Contact.tsx       # Contact section
│   │   ├── Footer.tsx        # Footer with stack credits
│   │   ├── TechCarousel.tsx  # Technology logo carousel
│   │   ├── LetterGlitch.tsx  # Animated glitch effect (canvas)
│   │   ├── ScrollToTop.tsx   # Scroll-to-top button
│   │   └── PortfolioPage.astro # Root layout + IntersectionObserver script
│   ├── i18n/
│   │   └── translations.ts   # ES/EN/CA translation dictionary
│   ├── pages/
│   │   ├── index.astro       # ES route (default)
│   │   ├── en/index.astro    # EN route
│   │   └── ca/index.astro    # CA route
│   └── styles/
│       └── global.css        # Base styles and reveal animation classes
├── astro.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

---

## Local Development

### Prerequisites
- Node.js `>=18`
- npm `>=9`

### Setup & Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in your browser
# http://localhost:4321/
```

### Other Commands

```bash
npm run build     # Production build (outputs to /dist)
npm run preview   # Preview the production build locally
npm run format    # Format code with Prettier
```

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Stable version deployed to production |
| `develop` | Incremental development — main working branch |

Workflow: `develop` → `main` via no-fast-forward merge.

---

## Deployment

The site is generated as static HTML via `astro build` and can be deployed to any CDN or static hosting platform:

- **Vercel** (recommended) — Automatic Astro detection
- **Netlify** — Compatible with static output
- **GitHub Pages** — With base path configuration if needed

---

<div align="center">

Made with ❤️ by **David Rueda**

</div>
