<div align="center">

# David Rueda — Portfolio

**Frontend Developer & Technical Marketing Expert**

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## Sobre el proyecto

Portfolio personal de **David Rueda**, Frontend Developer especializado en arquitecturas frontend modernas y marketing técnico. El sitio está diseñado para transmitir credibilidad y excelencia técnica a través de una experiencia visual premium, animaciones nativas de alto rendimiento y un diseño completamente responsivo.

> Construido con **Astro** para máxima velocidad, **React** para los componentes interactivos, y **Tailwind CSS** para un sistema de estilos coherente y mantenible.

---

## Stack tecnológico

| Capa | Tecnología | Motivo |
|---|---|---|
| Framework | [Astro 5](https://astro.build) | Renderizado estático, máxima performance y zero JS por defecto |
| UI Components | [React 19](https://react.dev) | Islands architecture para componentes interactivos |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) | Utility-first, dark mode nativo, responsive |
| Lenguaje | [TypeScript 5](https://www.typescriptlang.org) | Tipado estático en todo el proyecto |
| i18n | Custom (`src/i18n/`) | Soporte multiidioma ES / EN / CA |
| Animaciones | IntersectionObserver API | Scroll reveals nativos sin dependencias externas |

---

## Características

- ⚡ **Rendimiento extremo** — Generación estática (SSG) con Astro. Cero hidratación innecesaria.
- 🌐 **Multiidioma** — Español, Inglés y Catalán con rutas `/`, `/en/` y `/ca/`.
- 🎨 **Dark / Light mode** — Con preferencia persistida en `localStorage`.
- 📱 **Totalmente responsivo** — Diseño mobile-first, optimizado para cualquier dispositivo.
- ✨ **Scroll Reveal Animations** — Animaciones de entrada suaves con `IntersectionObserver`, sin librerías.
- ♿ **Accesibilidad WCAG AA** — Contraste correcto, semántica HTML5, atributos ARIA.
- 🔍 **SEO optimizado** — Meta tags, hreflang alternates, títulos y descripciones por idioma.
- 🖼️ **Favicon SVG** — Monograma DR personalizado, compatible con todos los navegadores modernos.

---

## Estructura del proyecto

```
portfolio/
├── public/
│   └── favicon.svg           # Monograma DR
├── src/
│   ├── components/
│   │   ├── Nav.tsx           # Navegación con scrollspy y selector de idioma
│   │   ├── Hero.tsx          # Sección principal con efecto LetterGlitch
│   │   ├── WhatIDo.tsx       # Servicios en acordeón
│   │   ├── Experience.tsx    # Trayectoria profesional (timeline)
│   │   ├── Education.tsx     # Formación académica
│   │   ├── Competencies.tsx  # Competencias técnicas con TechCarousel
│   │   ├── Projects.tsx      # Proyectos destacados
│   │   ├── Contact.tsx       # Sección de contacto
│   │   ├── Footer.tsx        # Footer con créditos de stack
│   │   ├── TechCarousel.tsx  # Carrusel de tecnologías
│   │   ├── LetterGlitch.tsx  # Efecto glitch animado (canvas)
│   │   ├── ScrollToTop.tsx   # Botón volver arriba
│   │   └── PortfolioPage.astro # Layout raíz + IntersectionObserver
│   ├── i18n/
│   │   └── translations.ts   # Diccionario de traducciones ES/EN/CA
│   ├── pages/
│   │   ├── index.astro       # Ruta ES (por defecto)
│   │   ├── en/index.astro    # Ruta EN
│   │   └── ca/index.astro    # Ruta CA
│   └── styles/
│       └── global.css        # Estilos base y clases de animación reveal
├── astro.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

---

## Desarrollo local

### Requisitos previos
- Node.js `>=18`
- npm `>=9`

### Instalación y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:4321/
```

### Otros comandos

```bash
npm run build     # Build de producción (genera /dist)
npm run preview   # Vista previa del build de producción
npm run format    # Formatea el código con Prettier
```

---

## Ramas

| Rama | Propósito |
|---|---|
| `main` | Versión estable y desplegada en producción |
| `develop` | Desarrollo incremental — rama de trabajo principal |

El flujo de trabajo es `develop` → `main` mediante merge sin fast-forward.

---

## Despliegue

El sitio se genera como HTML estático con `astro build` y puede desplegarse en cualquier CDN o plataforma de hosting estático:

- **Vercel** (recomendado) — Detección automática de Astro
- **Netlify** — Compatible con salida estática
- **GitHub Pages** — Con configuración de base path si es necesario

---

<div align="center">

Hecho con ❤️ por **David Rueda**

</div>
