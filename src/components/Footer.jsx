import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-10 lg:flex-row">
        <div className="flex items-center gap-3 text-sm text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500 font-semibold">M.</span>
          <span>© 2026 MIGUEL PUJAZÓN CÁRDENAS</span>
        </div>
        <div className="flex items-center gap-6 text-slate-500">
          <a href="#contacto" className="transition hover:text-white">GitHub</a>
          <a href="#contacto" className="transition hover:text-white">LinkedIn</a>
          <a href="mailto:hola@tudominio.com" className="transition hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
