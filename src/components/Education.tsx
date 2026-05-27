import React from 'react';

const education = [
  {
    degree: 'Máster en Desarrollo Frontend Avanzado',
    institution: 'Tech Academy',
    year: '2023',
    description: 'Especialización en arquitecturas modernas de frontend, performance optimization y buenas prácticas en desarrollo.',
    focus: ['React', 'TypeScript', 'Web Performance']
  },
  {
    degree: 'Bootcamp Full Stack JavaScript',
    institution: 'Code Institute',
    year: '2020',
    description: 'Formación intensiva en desarrollo web. Creación de aplicaciones completas con Node.js, Express y React.',
    focus: ['JavaScript', 'Node.js', 'React']
  },
  {
    degree: 'Grado en Ingeniería Informática',
    institution: 'Universidad Autónoma',
    year: '2018',
    description: 'Formación académica fundamental en ciencias de la computación, algoritmos y diseño de sistemas.',
    focus: ['Algoritmos', 'Estructuras de datos', 'Sistemas']
  }
];

import type { EducationTranslation } from '../i18n/translations';

export default function Education({ t = {} as Partial<EducationTranslation> }: { t?: Partial<EducationTranslation> }) {
  const sectionId = t.id || 'educación';
  const sectionTag = t.section || 'Educación';
  const sectionTitle = t.title || 'Formación y estudios';
  const sectionDesc = t.description || 'Combinación de formación académica, bootcamps intensivos y aprendizaje continuo en desarrollo moderno de frontend.';
  const items = t.items || education;

  return (
    <section id={sectionId} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl reveal reveal-up">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">{sectionTitle}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {sectionDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
        {items.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white hover:border-red-500/30 hover:bg-slate-50/55 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-none reveal reveal-up"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-red-600 dark:text-red-500/80 font-medium">{edu.institution}</p>
              </div>
              <p className="text-sm md:text-base font-mono text-slate-400 dark:text-neutral-500 md:whitespace-nowrap">{edu.year}</p>
            </div>
            
            <p className="text-slate-700 dark:text-neutral-300 mb-4 leading-relaxed">{edu.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-white/5">
              {edu.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium bg-red-500/5 dark:bg-red-500/10 text-red-600 dark:text-red-400/80 border border-red-500/10 dark:border-red-500/20 rounded-full"
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
