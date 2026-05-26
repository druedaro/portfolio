import React from 'react';
import type { FooterTranslation } from '../i18n/translations';

export default function Footer({ t = {} as Partial<FooterTranslation>, lang = 'es' }: { t?: Partial<FooterTranslation>, lang?: string }) {
  const contactHref = lang === 'es' ? '#contacto' : lang === 'en' ? '#contact' : '#contacte';
  const copyright = t.copyright || '© 2026 MIGUEL PUJAZÓN CÁRDENAS';

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 py-8 text-slate-500 dark:text-slate-400 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-10 lg:flex-row">
        <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-700 font-semibold text-white">M.</span>
          <span>{copyright}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-400">Built with</span>
            <a
              href="https://astro.build"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-[#FF5D01]"
              aria-label="Astro"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85 107"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M27.5699 88.2418C23.0804 85.0638 21.5856 78.8705 24.1048 74.0819L49.5122 24.9773C50.5507 22.9956 53.4491 22.9956 54.4877 24.9773L79.8951 74.0819C82.4143 78.8705 80.9195 85.0638 76.43 88.2418L56.6498 101.873C53.0977 104.287 49.3321 104.287 45.78 101.873L27.5699 88.2418Z"
                  fill="#FF5D01"
                />
                <path
                  d="M27.5699 88.2418C23.0804 85.0638 21.5856 78.8705 24.1048 74.0819L49.5122 24.9773C50.5507 22.9956 53.4491 22.9956 54.4877 24.9773L79.8951 74.0819C82.4143 78.8705 80.9195 85.0638 76.43 88.2418L56.6498 101.873C53.0977 104.287 49.3321 104.287 45.78 101.873L27.5699 88.2418Z"
                  fill="url(#paint0_linear_astro)"
                  fillOpacity="0.3"
                />
                <path
                  d="M43.5 62.5C43.5 62.5 35 73.5 30.5 80.5C28.3 84 29.5 88 33 90L50 101C51.5 102 52.5 102 54 101L71 90C74.5 88 75.7 84 73.5 80.5C69 73.5 60.5 62.5 60.5 62.5C58 59.5 54 57.5 52 57.5C50 57.5 46 59.5 43.5 62.5Z"
                  fill="#FF5D01"
                />
                <path
                  d="M35 14C35 6.268 41.268 0 49 0H53C60.732 0 67 6.268 67 14V24L52 31L37 24V14Z"
                  fill="#FF5D01"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="paint0_linear_astro" x1="52" y1="23" x2="52" y2="103" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#FF5D01] transition-colors">Astro</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">&</span>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-[#61DAFB]"
              aria-label="React"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span className="font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#61DAFB] transition-colors">React</span>
            </a>
          </div>

          <span className="text-slate-300 dark:text-slate-700">·</span>

          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 transition-colors hover:text-[#06B6D4]"
            aria-label="Styled with TailwindCSS"
          >
            <span className="text-slate-500 dark:text-slate-400">Styled with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 54 33"
              className="h-3.5 w-auto"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
                fill="#06B6D4"
              />
            </svg>
            <span className="font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#06B6D4] transition-colors">TailwindCSS</span>
          </a>
        </div>

        <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400">
          <a href="https://github.com/mpujazon" target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/mpujazon" target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          <a href="mailto:mpujazoncardenas@gmail.com" className="transition hover:text-slate-900 dark:hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
