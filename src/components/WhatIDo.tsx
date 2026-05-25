import { useState } from 'react';
import type { WhatIDoTranslation } from '../i18n/translations';
import LetterGlitch from './LetterGlitch';

const icons: Record<string, React.ReactElement> = {
  web: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),
};

export default function WhatIDo({ t }: { t: WhatIDoTranslation }) {
  const [open, setOpen] = useState<string>(t.services[0]?.id ?? '');

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — accordion */}
          <div>
            <h2 className="mb-10 text-5xl font-black tracking-[-0.05em] text-slate-900 dark:text-white sm:text-6xl">
              {t.heading.replace('?', '')}<span className="text-red-500">?</span>
            </h2>

            <div className="space-y-3">
              {t.services.map((svc) => {
                const isOpen = open === svc.id;
                return (
                  <div
                    key={svc.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-slate-200 bg-white shadow-[0_8px_40px_-12px_rgba(148,163,184,0.2)] dark:border-slate-700/60 dark:bg-slate-900/80'
                        : 'border-slate-200/60 bg-white/40 dark:border-slate-800/40 dark:bg-transparent'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? '' : svc.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`transition-colors duration-300 ${isOpen ? 'text-red-500' : 'text-slate-400 dark:text-slate-500'}`}>
                          {icons[svc.id] ?? icons.web}
                        </span>
                        <span className={`text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                          {svc.title}
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <ul className="space-y-2 px-5 pb-5 pt-1">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-red-400">·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right — LetterGlitch animation */}
          <div className="lg:sticky lg:top-28 h-64 lg:h-[400px] w-full max-w-[100vw] overflow-hidden -mx-6 px-6 lg:mx-0 lg:px-0">
            <LetterGlitch />
          </div>
        </div>
      </div>
    </section>
  );
}
