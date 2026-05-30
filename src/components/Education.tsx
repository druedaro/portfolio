import React from 'react';
import type { EducationTranslation } from '../i18n/translations';
import { formatDescription, getInstitutionLink } from '../utils/text';

import ReadMore from './ReadMore';

export default function Education({ t = {} as Partial<EducationTranslation>, lang = 'es' }: { t?: Partial<EducationTranslation>, lang?: string }) {
  const sectionId = t.id || 'educación';
  const sectionTag = t.section || 'Educación';
  const sectionTitle = t.title || 'Formación y estudios';
  const sectionDesc = t.description || '';
  const items = t.items || [];

  const showMoreLabel = lang === 'es' ? 'Ver más' : lang === 'en' ? 'Read more' : 'Veure més';
  const showLessLabel = lang === 'es' ? 'Ver menos' : lang === 'en' ? 'Read less' : 'Veure menys';

  return (
    <section id={sectionId} className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl reveal reveal-up">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">{sectionTag}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">
            {sectionTitle}
          </h2>
          <p 
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: formatDescription(sectionDesc) }}
          />
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
                    {getInstitutionLink(edu.institution) ? (
                      <a
                        href={getInstitutionLink(edu.institution) ?? undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center overflow-hidden p-2 transition-all duration-300 hover:border-red-500/40 shadow-sm block hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                      >
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      <div className="w-20 h-20 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center overflow-hidden p-2 transition-all duration-300 group-hover:border-red-500/20 shadow-sm">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-0.5 leading-snug">
                        {edu.degree}
                      </h3>
                      {getInstitutionLink(edu.institution) ? (
                        <a
                          href={getInstitutionLink(edu.institution) ?? undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 dark:text-red-500/80 font-medium text-sm hover:text-red-700 dark:hover:text-red-400/90 underline decoration-red-300 dark:decoration-red-900/40 underline-offset-4 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:rounded"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        <p className="text-red-600 dark:text-red-500/80 font-medium text-sm">
                          {edu.institution}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-1.5 flex-shrink-0">
                      <p className="text-xs md:text-sm font-mono text-slate-500 dark:text-neutral-400 md:whitespace-nowrap">
                        {edu.year}
                      </p>
                      {edu.grade && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
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
                  </div>

                  <div className="mb-4">
                    <ReadMore
                      html={formatDescription(edu.description)}
                      showMoreLabel={showMoreLabel}
                      showLessLabel={showLessLabel}
                      maskBgClass="from-white dark:from-slate-950 group-hover:from-slate-50/55 dark:group-hover:from-white/[0.05] transition-colors duration-300"
                    />
                  </div>

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
