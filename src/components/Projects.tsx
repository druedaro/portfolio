import React from 'react';

import type { ProjectItem } from '../i18n/translations';

const projects: ProjectItem[] = [
  {
    title: 'FilmHorizon',
    description:
      'SPA mobile-first para descubrir películas y series, con gestión de watchlist personal. Arquitectura feature-based con Angular 21, integración con TMDB API, autenticación Firebase, rutas protegidas y despliegue en Vercel.',
    tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNG'],
    demoLabel: 'Ver demo',
    codeLabel: 'Código disponible',
    demo: true,
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    title: 'Budget Generator',
    description:
      'Aplicación de presupuestos web con selección de servicios, configuración dinámica de precios, historial persistente y URLs compartibles. Angular 21 con PrimeNG, tests unitarios con Vitest y despliegue en Vercel.',
    tags: ['Vitest', 'Vercel', 'Angular', 'PrimeNG'],
    demoLabel: 'Ver demo',
    codeLabel: 'Código disponible',
    demo: true,
    codeUrl: '#',
    demoUrl: '#'
  }
];

import type { ProjectsTranslation } from '../i18n/translations';

export default function Projects({ t = {} as Partial<ProjectsTranslation> }: { t?: Partial<ProjectsTranslation> }) {
  const sectionId = t.id || 'proyectos';
  const sectionTag = t.section || 'Proyectos personales';
  const sectionTitle = t.title || 'Mis proyectos';
  const items = t.items || projects;

  const imageLabel = t.id === 'projects' ? 'Project Image' : t.id === 'projectes' ? 'Imatge del projecte' : 'Imagen del proyecto';
  const imageSubtitle = t.id === 'projects' ? 'Replace with real screenshot' : t.id === 'projectes' ? 'Reemplaçar amb captura real' : 'Reemplazar con captura real';

  return (
    <section id={sectionId} className="relative overflow-hidden pt-28 pb-28 lg:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white sm:text-7xl">
            {sectionTitle}
          </h2>
        </div>

        <div className="space-y-20">
          {items.map((project, index) => (
            <div
              key={project.title}
              className={`grid gap-10 rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 p-8 shadow-[0_40px_140px_-70px_rgba(148,163,184,0.3)] dark:shadow-[0_40px_140px_-70px_rgba(15,23,42,0.8)] lg:grid-cols-[1.05fr_0.95fr] ${
                index % 2 === 1 ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''
              }`}
            >
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-500 dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-5xl font-black tracking-[-0.06em] text-slate-900 dark:text-white sm:text-6xl">{project.title}</h3>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-8 flex items-center gap-4">
                  <a href={project.codeUrl || '#'} target="_blank" rel="noopener noreferrer" aria-label={project.codeLabel || 'Código disponible'} className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700/50 dark:bg-slate-800/30 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </a>
                  <a href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer" aria-label={project.demoLabel || 'Ver demo'} className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white transition hover:bg-orange-500 hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.8)] border border-transparent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/80 p-6">
                <div className="aspect-[16/9] rounded-[1.75rem] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 shadow-[0_30px_120px_-50px_rgba(148,163,184,0.2)] dark:shadow-[0_30px_120px_-50px_rgba(15,23,42,0.8)]">
                  <div className="flex h-full items-center justify-center text-center text-slate-500 dark:text-slate-400">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">{imageLabel}</p>
                      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">{imageSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub "More projects" button */}
        <div className="mt-16 flex justify-center">
          <a href="https://github.com/druedaro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white w-full sm:w-auto min-w-[280px]">
            {t.id === 'projects' ? 'More projects on' : t.id === 'projectes' ? 'Més projectes a' : 'Más proyectos en'}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
