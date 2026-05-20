import React from 'react';

const projects = [
  {
    title: 'FilmHorizon',
    description:
      'SPA mobile-first para descubrir películas y series, con gestión de watchlist personal. Arquitectura feature-based con Angular 21, integración con TMDB API, autenticación Firebase, rutas protegidas y despliegue en Vercel.',
    tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNG'],
    demo: true
  },
  {
    title: 'Budget Generator',
    description:
      'Aplicación de presupuestos web con selección de servicios, configuración dinámica de precios, historial persistente y URLs compartibles. Angular 21 con PrimeNG, tests unitarios con Vitest y despliegue en Vercel.',
    tags: ['Vitest', 'Vercel', 'Angular', 'PrimeNG'],
    demo: true
  }
];

export default function Projects({ t = {} }) {
  const sectionId = t.id || 'proyectos';
  const sectionTag = t.section || 'Proyectos personales';
  const sectionTitle = t.title || 'Mis proyectos';
  const items = t.items || projects;

  const imageLabel = t.id === 'projects' ? 'Project Image' : t.id === 'projectes' ? 'Imatge del projecte' : 'Imagen del proyecto';
  const imageSubtitle = t.id === 'projects' ? 'Replace with real screenshot' : t.id === 'projectes' ? 'Reemplaçar amb captura real' : 'Reemplazar con captura real';

  return (
    <section id={sectionId} className="relative overflow-hidden py-28">
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
                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.25em] text-slate-800 dark:text-white">
                  <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-red-500 dark:text-white dark:hover:text-red-400 transition-colors">
                    {project.demoLabel || 'Ver demo'}
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className="inline-flex h-7 w-[1px] bg-slate-200 dark:bg-slate-700" />
                  <span className="text-slate-500 dark:text-slate-400">{project.codeLabel || 'Código disponible'}</span>
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
      </div>
    </section>
  );
}
