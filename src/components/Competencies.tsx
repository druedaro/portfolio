import React from 'react';

const groups = [
  {
    title: 'React Moderno',
    items: ['Hooks', 'Context API', 'State Management', 'React Router', 'Vite']
  },
  {
    title: 'Arquitectura',
    items: ['Feature-based', 'TypeScript', 'JavaScript ES6', 'APIs REST', 'Asincronía']
  },
  {
    title: 'Calidad y Accesibilidad',
    items: ['Testing unitario', 'Vitest / Jest', 'WCAG 2.2 AA', 'Clean Code', 'Rendimiento (Web Perf)']
  },
  {
    title: 'Marketing Técnico',
    items: ['SEO Técnico (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'E-commerce (Shopify/Magento)', 'Auditorías SEO']
  },
  {
    title: 'Gestión y Agilidad',
    items: ['Liderazgo de equipos', 'Metodologías ágiles', 'Jira', 'Entrega por sprints', 'Enfoque de producto']
  }
];

import type { CompetenciesTranslation } from '../i18n/translations';

export default function Competencies({ t = {} as Partial<CompetenciesTranslation>, children }: { t?: Partial<CompetenciesTranslation>; children?: React.ReactNode }) {
  const sectionId = t.id || 'competencias';
  const sectionTitle = t.title || 'Competencias';
  const sectionSubtitle = t.subtitle || 'Tecnologías principales';
  const sectionGroups = t.groups || groups;

  return (
    <section id={sectionId} className="relative overflow-hidden pt-28 pb-16 lg:pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 reveal reveal-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white mb-6 break-words">
            {sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400 mb-12">{sectionSubtitle}</p>

          {children && <div className="mb-20">{children}</div>}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sectionGroups.map((group, index) => (
              <div key={group.title} className="group rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/95 p-6 shadow-[0_30px_100px_-60px_rgba(148,163,184,0.2)] dark:shadow-[0_30px_100px_-60px_rgba(15,23,42,0.8)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] dark:hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] relative overflow-hidden z-10 reveal reveal-up" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
                <h3 className="mb-6 text-base font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:text-red-500">
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
