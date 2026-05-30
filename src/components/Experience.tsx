import React from 'react';
import { formatDescription, getCompanyLink } from '../utils/text';

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
    <section id={sectionId} className="relative overflow-hidden py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl reveal reveal-up">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">{sectionTitle}</h2>
          <p 
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: formatDescription(sectionDesc) }}
          />
        </div>

        <style>{`
          .exp-card {
            border-radius: 1rem;
            padding: 1.25rem 1.25rem 1.25rem 2rem;
            transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
          }
          .exp-card:hover {
            box-shadow: 0 0 0 1px rgba(239,68,68,0.2), 0 8px 40px -8px rgba(239,68,68,0.25);
            background: rgba(239,68,68,0.03);
          }
          .dark .exp-card:hover {
            box-shadow: 0 0 0 1px rgba(239,68,68,0.15), 0 8px 48px -8px rgba(239,68,68,0.2);
            background: rgba(239,68,68,0.04);
          }
        `}</style>
        <div className="space-y-4">
          {items.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card group relative border-l-2 border-slate-200 dark:border-white/10 hover:border-red-500/60 pb-4 cursor-default reveal reveal-up"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -left-[9px] top-7 h-[16px] w-[16px] rounded-full border-2 border-red-500/40 bg-red-500/10 dark:bg-red-500/20 transition-all duration-400 group-hover:border-red-500 group-hover:bg-red-500/20 group-hover:scale-110" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Logo */}
                {exp.logo && (
                  <div className="flex-shrink-0">
                    {getCompanyLink(exp.company) ? (
                      <a
                        href={getCompanyLink(exp.company)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center overflow-hidden p-2 transition-all duration-300 hover:border-red-500/40 shadow-sm block hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      <div className="w-20 h-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center overflow-hidden p-2 transition-all duration-300 group-hover:border-red-500/20 shadow-sm">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">{exp.title}</h3>
                      {getCompanyLink(exp.company) ? (
                        <a
                          href={getCompanyLink(exp.company)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-neutral-400 text-sm font-medium hover:text-red-500 dark:hover:text-red-400 underline decoration-slate-300 dark:decoration-neutral-700 underline-offset-4 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:rounded"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-neutral-400 text-sm font-medium">{exp.company}</p>
                      )}
                    </div>
                    <p className="text-xs md:text-sm font-mono text-slate-500 dark:text-neutral-400 md:whitespace-nowrap">{exp.period}</p>
                  </div>

                  <p 
                    className="text-slate-700 dark:text-neutral-300 text-sm md:text-base mb-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                  />

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-neutral-300 border border-slate-200 dark:border-white/10 rounded-full group-hover:border-red-500/30 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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
