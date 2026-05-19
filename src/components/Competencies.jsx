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

export default function Competencies() {
  return (
    <section id="competencias" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">Competencias</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl">Listado de capacidades</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Habilidades y metodologías aplicadas en proyectos actuales: desarrollo Angular, experiencia product-led, testing y trabajo en equipo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-slate-800/70 bg-slate-950/95 p-6 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.8)]">
              <h3 className="mb-6 text-base font-semibold uppercase tracking-[0.3em] text-slate-300">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-slate-800/70 bg-slate-900/90 px-4 py-2 text-sm text-slate-300 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.8)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
