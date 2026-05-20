import { useState, useEffect, useRef } from 'react';
import type { NavItem } from '../i18n/translations';

const langs = [
  { code: 'es', label: 'ES', href: '/' },
  { code: 'en', label: 'EN', href: '/en/' },
  { code: 'ca', label: 'CA', href: '/ca/' }
];

export default function Nav({ lang = 'es', t = [] }: { lang?: string, t?: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && rootRef.current && !rootRef.current.contains(e.target as Node)) {
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

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const homeHref = lang === 'es' ? '/' : `/${lang}/`;

  return (
    <section ref={rootRef} className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 md:px-4 transition-all duration-500">
      <nav className="relative flex items-center gap-2 px-2 py-3 md:px-4 rounded-full border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-black/80 backdrop-blur-xl transition-colors duration-500 max-w-[calc(100vw-1.5rem)] shadow-2xl shadow-red-500/5">
        <a href={homeHref} className="text-slate-900 dark:text-white font-bold tracking-tighter mx-2 shrink-0 bg-none border-none cursor-pointer decoration-0">
          M<span className="text-red-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto whitespace-nowrap pr-1">
          {t.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10 rounded-full transition-all flex items-center gap-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Language + Theme + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>

          {/* Languages */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/55 dark:border-white/10 dark:bg-black/30 px-1 py-1">
            {langs.map((l) => (
              <a
                key={l.code}
                href={l.href}
                className={`rounded-full px-2 py-1 text-[0.625rem] font-mono uppercase tracking-wider transition-colors ${
                  lang === l.code ? 'bg-red-600 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 dark:text-white">
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
          <div className="absolute left-1/2 top-full z-40 w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white/95 dark:border-none dark:bg-black/95 p-4 shadow-xl md:hidden mt-2">
            <div className="flex flex-col gap-2">
              {t.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-2 border-t border-slate-200 dark:border-white/6 pt-3">
                {langs.map((l) => (
                  <a
                    key={l.code}
                    href={l.href}
                    className={`rounded-full px-3 py-1 text-[0.675rem] font-mono uppercase tracking-wider transition-colors ${
                      lang === l.code ? 'bg-red-600 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
