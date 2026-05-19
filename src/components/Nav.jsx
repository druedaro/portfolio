import React from 'react';

const links = ['Sobre mí', 'Educación', 'Competencias', 'Proyectos', 'Contacto'];
const langs = ['ES', 'EN', 'CA'];

export default function Nav() {
  return (
    <section className="fixed inset-x-0 top-0 z-50 bg-slate-950/100 px-6 py-4 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-full border border-white/10 bg-slate-900/95 px-4 py-3 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                M.
              </span>
              <nav className="hidden items-center gap-4 md:flex">
                {links.map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="transition hover:text-white">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              {langs.map((lang, index) => (
                <button
                  key={lang}
                  className={`min-w-[2.25rem] rounded-full border px-3 py-1 text-xs font-semibold uppercase transition ${
                    index === 0 ? 'bg-red-500 text-white border-transparent' : 'border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
