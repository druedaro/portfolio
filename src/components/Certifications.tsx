import { useState, useEffect } from 'react';
import type { CertificationsTranslation } from '../i18n/translations';

interface Cert {
  name: string;
  issuer: string;
  year: number;
  category: string;
}

const CERTS: Cert[] = [
  { name: 'Microcredencial Universitaria en Frontend Development', issuer: 'Universitat Politècnica de Catalunya', year: 2026, category: 'Desarrollo Web' },
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

const MegaphoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>;
const SearchIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const ChartIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const SparklesIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>;
const LayoutIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
const AwardIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const CodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;

const CATEGORY_ICONS: Record<string, (cls?: string) => React.ReactNode> = {
  // Spanish
  'Marketing Digital': (c) => <MegaphoneIcon className={c} />,
  'SEO': (c) => <SearchIcon className={c} />,
  'Web Analytics': (c) => <ChartIcon className={c} />,
  'Inteligencia Artificial': (c) => <SparklesIcon className={c} />,
  'UI/UX & Data': (c) => <LayoutIcon className={c} />,
  'Desarrollo Web': (c) => <CodeIcon className={c} />,

  // English
  'Digital Marketing': (c) => <MegaphoneIcon className={c} />,
  'Artificial Intelligence': (c) => <SparklesIcon className={c} />,
  'Frontend Development': (c) => <CodeIcon className={c} />,

  // Catalan
  'Màrqueting Digital': (c) => <MegaphoneIcon className={c} />,
  'Intel·ligència Artificial': (c) => <SparklesIcon className={c} />,
  'Analítica Web': (c) => <ChartIcon className={c} />,
  'UI/UX i Dades': (c) => <LayoutIcon className={c} />,
  'Desenvolupament Web': (c) => <CodeIcon className={c} />,
};

const CATEGORIES = ['Marketing Digital', 'Inteligencia Artificial', 'SEO', 'Web Analytics', 'UI/UX & Data', 'Desarrollo Web'];
const INITIAL_VISIBLE = 8;

export default function Certifications({ t }: { t: CertificationsTranslation }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const certsList = t.certs || CERTS;
  const categoriesList = t.categories || CATEGORIES;

  const initialLimit = isMobile ? 3 : INITIAL_VISIBLE;
  const filtered = activeFilter === 'all' ? certsList : certsList.filter(c => c.category === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, initialLimit);
  const hasMore = filtered.length > initialLimit;

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  return (
    <section id={t.id} className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.32em] text-red-600 dark:text-red-400 mb-4">{t.section}</p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">
              {t.title}
            </h2>
            <span className="text-base font-mono text-slate-600 dark:text-slate-400">
              {certsList.length} {t.subtitle}
            </span>
          </div>
          <div className="w-16 h-1 bg-red-600 dark:bg-red-400" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-red-600 text-white shadow-[0_0_16px_rgba(220,38,38,0.45)]'
                : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-600 dark:hover:border-red-500/50 dark:hover:text-red-400'
            }`}
          >
            {t.filterAll}
            <span className="ml-1.5 text-xs">({certsList.length})</span>
          </button>
          {categoriesList.map(cat => {
            const count = certsList.filter(c => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-red-600 text-white shadow-[0_0_16px_rgba(220,38,38,0.45)]'
                    : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-500 hover:text-red-600 dark:hover:border-red-500/50 dark:hover:text-red-400'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {CATEGORY_ICONS[cat] ? CATEGORY_ICONS[cat]('w-4 h-4') : <AwardIcon className="w-4 h-4" />} {cat}
                </span>
                <span className="ml-1.5 text-xs">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visible.map((cert, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className="group relative rounded-2xl border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90 p-5 transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_24px_rgba(220,38,38,0.12)] dark:hover:shadow-[0_0_24px_rgba(220,38,38,0.15)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl pointer-events-none" />
              <span className="mb-3 block text-red-600 dark:text-red-400" aria-hidden="true">
                {CATEGORY_ICONS[cert.category] ? CATEGORY_ICONS[cert.category]('w-6 h-6') : <AwardIcon className="w-6 h-6" />}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {cert.name}
              </h3>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/50">
                <p className="text-xs text-red-700 dark:text-red-400 font-medium truncate max-w-[70%]">{cert.issuer}</p>
                <p className="text-xs font-mono text-slate-600 dark:text-slate-300">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="group flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            >
              {showAll ? t.showLess : `${t.showMore} (+${filtered.length - initialLimit})`}
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
