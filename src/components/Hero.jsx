import React from 'react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-sm text-slate-200">
              Frontend Developer & Technical Marketer
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Diseño digital con foco en rendimiento, estrategia y experiencia.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Construyo interfaces web escalables con React, Astro y Tailwind, cuidando cada animación y detalle para que cada proyecto se sienta fluido y memorable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-pulseGlow rounded-[2.5rem] bg-slate-800/60" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.8)]">
              <div className="grid h-full min-h-[320px] gap-6 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 p-8">
                <div className="space-y-4">
                  <div className="h-2.5 w-20 rounded-full bg-slate-700" />
                  <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.8)]">
                    <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Último proyecto</p>
                    <h2 className="mt-4 text-2xl font-semibold text-white">Ecosistema de marca digital</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      UI, animaciones y rendimiento técnico para una experiencia comercial flexible y moderna.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">React</span>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">Astro</span>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">Tailwind</span>
                  </div>
                  <div className="animate-float self-start rounded-3xl bg-sky-500/10 px-4 py-3 text-sm font-medium text-sky-200 ring-1 ring-sky-500/20">
                    Interfaz ligera y animada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
