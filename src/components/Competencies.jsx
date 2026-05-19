import React from 'react';

const technologies = [
  { name: 'Angular', icon: '🅰️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'JavaScript', icon: '📙' },
  { name: 'RxJS', icon: '🔄' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🗄️' },
  { name: 'Vitest', icon: '✅' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'SASS', icon: '🎯' },
  { name: 'Git', icon: '🔀' },
  { name: 'Jira', icon: '📋' }
];

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16">
          <h2 className="text-6xl font-black uppercase tracking-[-0.05em] text-white sm:text-7xl mb-6">
            Competencias.
          </h2>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400 mb-12">Tecnologías principales</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-800/50 bg-slate-950/50 hover:border-red-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
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
      </div>
    </section>
  );
}
