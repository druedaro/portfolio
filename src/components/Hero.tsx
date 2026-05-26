import React from 'react';
import type { HeroTranslation } from '../i18n/translations';

export default function Hero({ t = {} as Partial<HeroTranslation>, lang = 'es' }: { t?: Partial<HeroTranslation>, lang?: string }) {
  const projectsHref = lang === 'es' ? '#proyectos' : lang === 'en' ? '#projects' : '#projectes';
  const contactHref = lang === 'es' ? '#contacto' : lang === 'en' ? '#contact' : '#contacte';
  const sectionId = lang === 'es' ? 'sobre-mi' : lang === 'en' ? 'about-me' : 'sobre-mi';

  return (
    <section id={sectionId} className="relative overflow-hidden bg-slate-50/80 dark:bg-slate-950/80 px-6 pb-24 pt-16 lg:pt-28 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 reveal reveal-up">
              <span className="inline-flex h-10 w-1 rounded-full bg-red-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">{t.subtitle}</p>
            </div>
            <h1 className="text-6xl font-black tracking-[-0.04em] text-slate-900 dark:text-white sm:text-7xl lg:text-8xl reveal reveal-up" style={{ transitionDelay: '100ms' }}>
              {t.title}
            </h1>
            <div className="max-w-2xl space-y-6 reveal reveal-up" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={projectsHref}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-500"
                >
                  {t.projectsBtn}
                </a>
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-slate-400"
                >
                  {t.contactBtn}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 reveal reveal-up" style={{ transitionDelay: '300ms' }}>
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
              {t.location}
            </div>
          </div>

          <div className="relative reveal reveal-left" style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-900 dark:via-slate-950 dark:to-slate-800 blur-2xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white/90 shadow-[0_40px_120px_-40px_rgba(148,163,184,0.3)] dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]">
              <div className="aspect-[4/5] min-h-[420px] bg-slate-100 dark:bg-slate-800/80">
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.05),transparent_40%)]" />
                <div className="absolute inset-6 rounded-[2.5rem] border border-slate-200/60 bg-white/70 backdrop-blur-[1.5px] dark:border-white/10 dark:bg-slate-950/70" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-slate-500">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">{t.brandPhoto}</p>
                    <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">{t.photoSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
