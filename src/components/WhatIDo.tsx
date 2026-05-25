import { useState, useEffect, useRef } from 'react';

const services = [
  {
    id: 'web',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Development',
    items: [
      'Single Page Applications (SPAs)',
      'Landing pages and business websites',
      'Portfolio websites',
    ],
  },
  {
    id: 'mobile',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile Development',
    items: [
      'Progressive Web Apps (PWA)',
      'Responsive mobile-first design',
      'Cross-platform solutions',
    ],
  },
  {
    id: 'design',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    title: 'UI/UX Design & Prototyping',
    items: [
      'Wireframing and prototyping',
      'Component design systems',
      'Accessibility-first interfaces (WCAG)',
    ],
  },
];

// Terminal lines with syntax-highlight tokens
const terminalLines = [
  [{ t: '@Component({', c: '#ef4444' }],
  [{ t: '  selector: ', c: '#94a3b8' }, { t: "'app-root'", c: '#a3e635' }, { t: ',', c: '#94a3b8' }],
  [{ t: '  standalone: ', c: '#94a3b8' }, { t: 'true', c: '#818cf8' }, { t: ',', c: '#94a3b8' }],
  [{ t: '  template: `', c: '#94a3b8' }],
  [{ t: "    <main>", c: '#38bdf8' }],
  [{ t: "      <h1>", c: '#38bdf8' }, { t: '{{ title }}', c: '#fbbf24' }, { t: '</h1>', c: '#38bdf8' }],
  [{ t: "    </main>`", c: '#38bdf8' }],
  [{ t: '})', c: '#ef4444' }],
  [{ t: 'export class ', c: '#818cf8' }, { t: 'AppComponent', c: '#a3e635' }, { t: ' {', c: '#94a3b8' }],
  [{ t: '  title ', c: '#94a3b8' }, { t: '= ', c: '#ef4444' }, { t: "'portfolio'", c: '#a3e635' }, { t: ';', c: '#94a3b8' }],
  [{ t: '', c: '' }],
  [{ t: '  readonly ', c: '#818cf8' }, { t: 'count ', c: '#94a3b8' }, { t: '= ', c: '#ef4444' }, { t: 'signal', c: '#38bdf8' }, { t: '(0);', c: '#94a3b8' }],
  [{ t: '', c: '' }],
  [{ t: '  increment', c: '#fbbf24' }, { t: '() {', c: '#94a3b8' }],
  [{ t: '    this.count', c: '#94a3b8' }, { t: '.update', c: '#38bdf8' }, { t: '(v', c: '#94a3b8' }, { t: ' => ', c: '#ef4444' }, { t: 'v + 1);', c: '#94a3b8' }],
  [{ t: '  }', c: '#94a3b8' }],
  [{ t: '}', c: '#94a3b8' }],
  [{ t: '', c: '' }],
  [{ t: '// Services ready', c: '#475569' }],
  [{ t: 'ng serve ', c: '#a3e635' }, { t: '--open', c: '#fbbf24' }],
  [{ t: '✓ ', c: '#a3e635' }, { t: 'Compiled successfully', c: '#94a3b8' }],
  [{ t: '  Local:   ', c: '#475569' }, { t: 'http://localhost:4200/', c: '#38bdf8' }],
  [{ t: '', c: '' }],
  [{ t: 'ng build ', c: '#a3e635' }, { t: '--configuration=production', c: '#fbbf24' }],
  [{ t: '✓ ', c: '#a3e635' }, { t: 'Build complete. 0 warnings.', c: '#94a3b8' }],
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setVisibleLines(idx);
      if (idx >= terminalLines.length) {
        // Restart loop
        setTimeout(() => setVisibleLines(0), 1200);
        idx = 0;
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d1117] p-6 font-mono text-[13px] leading-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]"
      style={{ minHeight: '340px' }}
      aria-hidden="true"
    >
      {/* Terminal top bar */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500">app.component.ts</span>
      </div>

      {/* Animated lines */}
      <div className="space-y-0.5">
        {terminalLines.slice(0, visibleLines).map((tokens, lineIdx) => (
          <div key={lineIdx} className="flex flex-wrap">
            <span className="mr-4 select-none text-slate-700">{String(lineIdx + 1).padStart(2, ' ')}</span>
            {tokens.map((token, ti) => (
              <span key={ti} style={{ color: token.c || 'transparent' }}>
                {token.t}
              </span>
            ))}
          </div>
        ))}
        {/* blinking cursor */}
        {visibleLines < terminalLines.length && (
          <span
            className="inline-block h-4 w-2 align-middle"
            style={{ backgroundColor: '#ef4444', animation: 'blink 1s step-end infinite' }}
          />
        )}
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
    </div>
  );
}

export default function WhatIDo() {
  const [open, setOpen] = useState<string>('web');

  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — accordion */}
          <div>
            <h2 className="mb-10 text-5xl font-black tracking-[-0.05em] text-slate-900 dark:text-white sm:text-6xl">
              What I do<span className="text-red-500">?</span>
            </h2>

            <div className="space-y-3">
              {services.map((svc) => {
                const isOpen = open === svc.id;
                return (
                  <div
                    key={svc.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-slate-200 bg-white shadow-[0_8px_40px_-12px_rgba(148,163,184,0.2)] dark:border-slate-700/60 dark:bg-slate-900/80'
                        : 'border-slate-200/60 bg-white/40 dark:border-slate-800/40 dark:bg-transparent'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? '' : svc.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`transition-colors duration-300 ${isOpen ? 'text-red-500' : 'text-slate-400 dark:text-slate-500'}`}>
                          {svc.icon}
                        </span>
                        <span className={`text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                          {svc.title}
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>

                    {/* Accordion body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <ul className="space-y-2 px-5 pb-5 pt-1">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-red-400">·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — terminal animation */}
          <div className="lg:sticky lg:top-28">
            <TerminalAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
