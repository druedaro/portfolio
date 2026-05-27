import { useState } from 'react';
import type { CertificationsTranslation } from '../i18n/translations';

interface Cert {
  name: string;
  issuer: string;
  year: number;
  category: string;
}

const CERTS: Cert[] = [
  { name: 'Anuncios de Shopping Basados en IA', issuer: 'Google Skillshop', year: 2026, category: 'Marketing Digital' },
  { name: 'Google Ads Display Certification', issuer: 'Google Skillshop', year: 2026, category: 'Marketing Digital' },
  { name: 'Google Ads Measurement Certification', issuer: 'Google Skillshop', year: 2026, category: 'Marketing Digital' },
  { name: 'Google Ads Search Certification', issuer: 'Google Skillshop', year: 2026, category: 'Marketing Digital' },
  { name: 'Google Analytics Certification', issuer: 'Google Skillshop', year: 2026, category: 'Web Analytics' },
  { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Introduction to Subagents', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Claude 101', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: 2026, category: 'Inteligencia Artificial' },
  { name: 'Auditorías SEO', issuer: 'LinkedIn', year: 2020, category: 'SEO' },
  { name: 'Análisis Competitivo e Investigación de Palabras Clave', issuer: 'Semrush', year: 2020, category: 'SEO' },
  { name: 'SEO Toolkit', issuer: 'Semrush', year: 2020, category: 'SEO' },
  { name: 'Keyword Research', issuer: 'Semrush', year: 2020, category: 'SEO' },
  { name: 'SEO Técnico y SEO On Page', issuer: 'Semrush', year: 2020, category: 'SEO' },
  { name: 'Principios Fundamentales de SEO', issuer: 'Semrush', year: 2020, category: 'SEO' },
  { name: 'Google Analytics Avanzado', issuer: 'Google', year: 2020, category: 'Web Analytics' },
  { name: 'Google Tag Manager Fundamentals', issuer: 'Google', year: 2020, category: 'Web Analytics' },
  { name: 'Google Analytics Individual Qualification', issuer: 'Google Skillshop', year: 2020, category: 'Web Analytics' },
  { name: 'Certificación en Aplicaciones de Google Ads', issuer: 'Google Skillshop', year: 2020, category: 'Marketing Digital' },
  { name: 'Content Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Marketing Digital' },
  { name: 'Social Media Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Marketing Digital' },
  { name: 'Growth-Driven Design Certified', issuer: 'HubSpot Academy', year: 2020, category: 'UI/UX & Data' },
  { name: 'Inbound Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Marketing Digital' },
  { name: 'Inbound Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Marketing Digital' },
  { name: 'Email Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Marketing Digital' },
  { name: 'Copywriting para E-commerce', issuer: 'LinkedIn', year: 2020, category: 'Marketing Digital' },
  { name: 'Instagram Marketing for Business', issuer: 'Udemy', year: 2020, category: 'Marketing Digital' },
  { name: '#TwitterFlightSchool — Vídeo', issuer: 'Twitter', year: 2020, category: 'Marketing Digital' },
  { name: 'YouTube Music Certification', issuer: 'Google Skillshop', year: 2020, category: 'Marketing Digital' },
  { name: 'Adobe XD CC Avanzado', issuer: 'LinkedIn', year: 2020, category: 'UI/UX & Data' },
  { name: 'Power BI y Excel — Análisis de Datos', issuer: 'Udemy', year: 2020, category: 'UI/UX & Data' },
  { name: 'Excel Online', issuer: 'Udemy', year: 2020, category: 'UI/UX & Data' },
];

const CATEGORY_ICONS: Record<string, string> = {
  'Marketing Digital': '📢',
  'SEO': '🔍',
  'Web Analytics': '📊',
  'Inteligencia Artificial': '🤖',
  'UI/UX & Data': '🎨',
};

const CATEGORIES = ['Marketing Digital', 'Inteligencia Artificial', 'SEO', 'Web Analytics', 'UI/UX & Data'];
const INITIAL_VISIBLE = 8;

export default function Certifications({ t }: { t: CertificationsTranslation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'all' ? CERTS : CERTS.filter(c => c.category === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE;

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  return (
    <section id={t.id} className="relative overflow-hidden pt-12 pb-20">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500 mb-4">{t.section}</p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <h2 className="text-5xl font-black uppercase tracking-[-0.06em] text-slate-900 dark:text-white sm:text-6xl">
              {t.title}
            </h2>
            <span className="text-base font-mono text-slate-400 dark:text-slate-500">
              {CERTS.length} {t.subtitle}
            </span>
          </div>
          <div className="w-16 h-1 bg-red-500" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-red-500 text-white shadow-[0_0_16px_rgba(239,68,68,0.45)]'
                : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-red-400 hover:text-red-500 dark:hover:border-red-500/50 dark:hover:text-red-400'
            }`}
          >
            {t.filterAll}
            <span className="ml-1.5 text-xs opacity-70">({CERTS.length})</span>
          </button>
          {CATEGORIES.map(cat => {
            const count = CERTS.filter(c => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-red-500 text-white shadow-[0_0_16px_rgba(239,68,68,0.45)]'
                    : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-red-400 hover:text-red-500 dark:hover:border-red-500/50 dark:hover:text-red-400'
                }`}
              >
                {CATEGORY_ICONS[cat]} {cat}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {visible.map((cert, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className="group relative rounded-2xl border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 p-5 transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_24px_rgba(239,68,68,0.12)] dark:hover:shadow-[0_0_24px_rgba(239,68,68,0.15)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl pointer-events-none" />
              <span className="text-xl mb-3 block" aria-hidden="true">
                {CATEGORY_ICONS[cert.category] ?? '🏅'}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-red-500 transition-colors duration-300 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {cert.name}
              </h3>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/50">
                <p className="text-xs text-red-500/80 font-medium truncate max-w-[70%]">{cert.issuer}</p>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="group flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
            >
              {showAll ? t.showLess : `${t.showMore} (+${filtered.length - INITIAL_VISIBLE})`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
