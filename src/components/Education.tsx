import React from 'react';
import type { EducationTranslation } from '../i18n/translations';

export default function Education({ t = {} as Partial<EducationTranslation> }: { t?: Partial<EducationTranslation> }) {
  const sectionId = t.id || 'educación';
  const sectionTag = t.section || 'Educación';
  const sectionTitle = t.title || 'Formación y estudios';
  const sectionDesc = t.description || '';
  const items = t.items || [];

  return (
    <section id={sectionId} className="relative overflow-hidden py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl reveal reveal-up">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">
            {sectionTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {sectionDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-5">
          {items.map((edu, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-2xl border border-slate-200 bg-white hover:border-red-500/30 hover:bg-slate-50/55 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-none reveal reveal-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Logo */}
                {edu.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center overflow-hidden p-2 transition-all duration-300 group-hover:border-red-500/20 shadow-sm">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-0.5 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-red-600 dark:text-red-500/80 font-medium text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    {edu.grade && (
                      <span className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap flex-shrink-0">
                        <svg
                          className="w-3 h-3 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {edu.grade}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-700 dark:text-neutral-300 mb-4 leading-relaxed text-sm md:text-base">
                    {edu.description}
                  </p>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
