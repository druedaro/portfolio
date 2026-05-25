import React from 'react';

const groups = [
  {
    title: 'Angular Moderno',
    items: ['Signals', 'Standalone Components', 'OnPush', 'Lazy Loading', 'RxJS']
  },
  {
    title: 'Arquitectura',
    items: ['Feature-based', 'Separación de responsabilidades', 'APIs REST', 'Asincronía', 'TypeScript']
  },
  {
    title: 'Calidad',
    items: ['Testing unitario', 'Vitest', 'Jest', 'WCAG 2.2 AA', 'Estados de carga y error']
  },
  {
    title: 'Trabajo en equipo',
    items: ['Metodologías ágiles', 'Jira', 'Entrega por sprints', 'Comunicación efectiva', 'Enfoque de producto']
  }
];

import type { CompetenciesTranslation } from '../i18n/translations';

export default function Competencies({ t = {} as Partial<CompetenciesTranslation>, children }: { t?: Partial<CompetenciesTranslation>; children?: React.ReactNode }) {
  const sectionId = t.id || 'competencias';
  const sectionTitle = t.title || 'Competencias';
  const sectionSubtitle = t.subtitle || 'Tecnologías principales';
  const sectionGroups = t.groups || groups;

  return (
    <section id={sectionId} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-5xl font-black uppercase tracking-[-0.06em] text-slate-900 dark:text-white sm:text-7xl mb-6">
            {sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400 mb-12">{sectionSubtitle}</p>

          {/* TechCarousel Astro island injected via children */}
          {children && <div className="mb-20">{children}</div>}

          <div className="grid gap-6 lg:grid-cols-4">
            {sectionGroups.map((group) => (
              <div key={group.title} className="rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/95 p-6 shadow-[0_30px_100px_-60px_rgba(148,163,184,0.2)] dark:shadow-[0_30px_100px_-60px_rgba(15,23,42,0.8)]">
                <h3 className="mb-6 text-base font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                  {group.title}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-slate-200 bg-slate-50 dark:border-slate-800/70 dark:bg-slate-900/90 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-[0_15px_40px_-30px_rgba(148,163,184,0.2)] dark:shadow-[0_15px_40px_-30px_rgba(15,23,42,0.8)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
