import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950/80 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.16),_transparent_28%),radial-gradient(circle_at_15%_15%,_rgba(14,165,233,0.12),_transparent_24%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-1 rounded-full bg-red-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">Frontend developer · technical marketer</p>
            </div>
            <h1 className="text-6xl font-black tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
              Diseño web con impacto
            </h1>
            <div className="max-w-2xl space-y-6">
              <p className="text-lg leading-8 text-slate-300">
                Desarrollo frontend moderno con enfoque en producto, rendimiento y experiencia visual. Interfaces oscuras, limpias y con movimiento sutil para destacar cada sección.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-500"
                >
                  Proyectos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-400"
                >
                  Contacto
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500" />
              Barcelona
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 blur-2xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900/90 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]">
              <div className="aspect-[4/5] min-h-[420px] bg-slate-800/80">
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_top_left,rgba(248,113,113,0.16),transparent_22%)]" />
                <div className="absolute inset-6 rounded-[2.5rem] border border-white/10 bg-slate-950/70 backdrop-blur-[1.5px]" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-slate-500">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Foto de marca</p>
                    <p className="mt-4 text-xs text-slate-500">Reemplaza este bloque con tu imagen o retrato</p>
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
