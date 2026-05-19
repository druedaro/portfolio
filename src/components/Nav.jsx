import React, { useEffect, useRef, useState } from 'react';

const links = ['Sobre mí', 'Educación', 'Competencias', 'Proyectos', 'Contacto'];
const langs = ['ES', 'EN', 'CA'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (open && rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <section ref={rootRef} className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 md:px-4 transition-all duration-500">
      <nav className="relative flex items-center gap-2 px-2 py-3 md:px-4 rounded-full border border-white/10 backdrop-blur-xl transition-colors duration-500 max-w-[calc(100vw-1.5rem)] bg-black/80 shadow-2xl shadow-red-500/5">
        <button type="button" className="text-white font-bold tracking-tighter mx-2 shrink-0 bg-none border-none cursor-pointer">
          M<span className="text-red-500">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto whitespace-nowrap pr-1">
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Language + Hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex ml-1 mr-1 items-center gap-1 rounded-full border border-white/10 bg-black/30 px-1 py-1">
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

          {/* Hamburger Button */}
          <button
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              {open ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        {open && (
          <div className="absolute left-1/2 top-full z-40 w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl bg-black/95 p-4 shadow-xl md:hidden mt-2">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white transition"
                >
                  {link}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-2 border-t border-white/6 pt-3">
                {langs.map((lang, index) => (
                  <button
                    key={lang}
                    className={`rounded-full px-3 py-1 text-[0.675rem] font-mono uppercase tracking-wider transition-colors ${
                      index === 0 ? 'bg-red-600 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {lang.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
