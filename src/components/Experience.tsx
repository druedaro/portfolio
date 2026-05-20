import React from 'react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company Inc.',
    period: '2023 - Presente',
    description: 'Desarrollo de aplicaciones web modernas con React, Angular y TypeScript. Liderazgo de equipo y mentoring de desarrolladores junior.',
    skills: ['React', 'TypeScript', 'Angular', 'Team Lead']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2021 - 2023',
    description: 'Creación de interfaces responsive y optimización de rendimiento. Trabajo con Tailwind CSS y metodologías ágiles.',
    skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Agile']
  },
  {
    title: 'Junior Developer',
    company: 'Startup Studio',
    period: '2020 - 2021',
    description: 'Primeros pasos en desarrollo web. Proyectos con HTML, CSS, JavaScript vanilla y primeras experiencias con frameworks.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  }
];

import type { ExperienceTranslation } from '../i18n/translations';

export default function Experience({ t = {} as Partial<ExperienceTranslation> }: { t?: Partial<ExperienceTranslation> }) {
  const sectionId = t.id || 'experiencia';
  const sectionTag = t.section || 'Experiencia';
  const sectionTitle = t.title || 'Trayectoria profesional';
  const sectionDesc = t.description || 'Experiencia en desarrollo frontend con enfoque en arquitectura escalable, rendimiento y colaboración en equipos multidisciplinarios.';
  const items = t.items || experiences;

  return (
    <section id={sectionId} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white sm:text-6xl">{sectionTitle}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {sectionDesc}
          </p>
        </div>

        <div className="space-y-6">
        {items.map((exp, idx) => (
          <div
            key={idx}
            className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-white/10 hover:border-red-500/50 transition-colors duration-300 pb-6"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-red-500/10 dark:bg-red-500/20 border border-red-500/50 rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                <p className="text-slate-600 dark:text-neutral-400 text-sm">{exp.company}</p>
              </div>
              <p className="text-xs md:text-sm font-mono text-slate-400 dark:text-neutral-500 md:whitespace-nowrap">{exp.period}</p>
            </div>
            
            <p className="text-slate-700 dark:text-neutral-300 text-sm md:text-base mb-3 leading-relaxed">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-neutral-300 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {skill}
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
