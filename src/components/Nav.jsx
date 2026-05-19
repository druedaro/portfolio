import React from 'react';

const links = ['Sobre mí', 'Educación', 'Competencias', 'Proyectos', 'Contacto'];
const langs = ['ES', 'EN', 'CA'];

export default function Nav() {
  return (
    <section className="fixed inset-x-0 top-4 z-50 flex justify-center px-3678 md:px-4 transition-all duration-500">
      <nav className="flex items-center gap-2 px-2 py-2 md:px-4 rounded-full border border-white/10 backdrop-blur-xl transition-colors duration-500 max-w-[calc(100vw-1.5rem)] bg-black/80 shadow-2xl shadow-red-500/5">
        <a href="#" className="text-white font-bold tracking-tighter mx-2 shrink-0">
          M<span className="text-red-500">.</span>
        </a>

        <div className="hidden items-center gap-1 overflow-x-auto whitespace-nowrap pr-1 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all flex items-center gap-2"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="ml-1 mr-1 flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-1 py-1">
          {langs.map((lang, index) => (
            <button
              key={lang}
              type="button"
              className={`rounded-full px-2 py-1 text-[0.625rem] font-mono uppercase tracking-wider transition-colors ${
                index === 0 ? 'bg-red-600 text-white' : 'text-neutral-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {lang.toLowerCase()}
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
}
