import React from 'react';

const projects = [
  {
    title: 'Landing de producto con microinteracciones',
    description: 'Experiencia de compra, scroll animado y sistema de contenido optimizado para conversiones y performance.',
    tags: ['Astro', 'React', 'Motion'],
    type: 'Landing',
    year: '2026'
  },
  {
    title: 'Dashboard de marketing con datos en tiempo real',
    description: 'Interfaz limpia y visual con tarjetas, estado oscuro y animaciones de entrada suaves.',
    tags: ['Tailwind', 'UI', 'Analytics'],
    type: 'Dashboard',
    year: '2025'
  },
  {
    title: 'Micro sitio de campaña estratégica',
    description: 'Diseño responsive con enfoque en narrativa visual, marca y velocidad de carga.',
    tags: ['Branding', 'Performance', 'SEO'],
    type: 'Micro sitio',
    year: '2026'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Proyectos</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Trabajos destacados</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-400">
            Desarrollo de piezas digitales con foco en experiencia, estrategia y rendimiento. Cada enlace, bloque y animación está pensado para vender la idea sin perder velocidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-slate-800/70 bg-slate-900/85 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/95"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-slate-300">
                  {project.type}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.year}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
