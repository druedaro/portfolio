import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 py-8 text-slate-500 dark:text-slate-400 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-10 lg:flex-row">
        <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500 font-semibold text-white">M.</span>
          <span>© 2026 MIGUEL PUJAZÓN CÁRDENAS</span>
        </div>
        <div className="flex items-center gap-6 text-slate-400 dark:text-slate-500">
          <a href="#contacto" className="transition hover:text-slate-900 dark:hover:text-white">GitHub</a>
          <a href="#contacto" className="transition hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          <a href="mailto:mpujazoncardenas@gmail.com" className="transition hover:text-slate-900 dark:hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
