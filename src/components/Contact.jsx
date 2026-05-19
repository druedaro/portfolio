import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-10 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Contacto</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Hablemos de tu próximo proyecto</h2>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Transformo ideas en experiencias digitales con diseño, estrategia y código. Escríbeme para trabajar juntos en tu siguiente web, landing o producto.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/80 p-8">
              <p className="text-sm text-slate-400">Mail directo</p>
              <a
                href="mailto:hola@tudominio.com"
                className="mt-4 block break-words text-lg font-semibold text-white transition hover:text-sky-300"
              >
                hola@tudominio.com
              </a>
              <div className="mt-8 grid gap-4 text-sm text-slate-400">
                <p>
                  <span className="font-semibold text-slate-200">Disponible para:</span> Freelance, colaboración y asesoría técnica.
                </p>
                <p>
                  <span className="font-semibold text-slate-200">Stack:</span> Astro, React, Tailwind, performance y marketing digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
