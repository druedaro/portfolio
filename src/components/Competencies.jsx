import React from 'react';

const techs = [
  { name: 'Angular', short: 'NG' },
  { name: 'TypeScript', short: 'TS' },
  { name: 'JavaScript', short: 'JS' },
  { name: 'RxJS', short: 'RX' },
  { name: 'Node.js', short: 'ND' },
  { name: 'PostgreSQL', short: 'PG' },
  { name: 'Vitest', short: 'VT' },
  { name: 'CSS', short: 'CS' },
  { name: 'TailwindCSS', short: 'TW' },
  { name: 'Sass', short: 'SS' },
  { name: 'Git', short: 'GT' },
  { name: 'Jira', short: 'JR' }
];

export default function Competencies() {
  return (
    <section id="competencias" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.14),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-5xl font-black uppercase tracking-[-0.06em] text-white sm:text-6xl">Competencias.</p>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-red-500" />
          <p className="mt-8 text-sm uppercase tracking-[0.32em] text-slate-400">Tecnologías principales</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className={`group flex items-center gap-4 rounded-[1.75rem] border p-5 transition duration-300 ${
                tech.name === 'PostgreSQL'
                  ? 'border-red-500/50 bg-slate-900/90'
                  : 'border-slate-700/70 bg-slate-900/80 hover:border-slate-500/60 hover:bg-slate-900/95'
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-xl font-bold text-slate-100 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.8)]">
                {tech.short}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
