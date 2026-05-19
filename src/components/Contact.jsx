import React from 'react';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'Miguel Pujazón Cárdenas',
    href: 'https://www.linkedin.com/in/mpujazon',
    icon: '⬆'
  },
  {
    label: 'GitHub',
    value: 'mpujazon',
    href: 'https://github.com/mpujazon',
    icon: '🐙'
  },
  {
    label: 'Email',
    value: 'mpujazoncardenas@gmail.com',
    href: 'mailto:mpujazoncardenas@gmail.com',
    icon: '✉️'
  }
];

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-28">
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-6xl font-black uppercase tracking-[-0.08em] text-white sm:text-7xl">
                Hablemos
              </h2>
              <h3 className="text-6xl font-black uppercase tracking-[-0.08em] text-red-500 sm:text-7xl">
                hoy.
              </h3>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Disponible para colaborar en proyectos frontend con Angular, buenas prácticas de desarrollo y productos digitales que funcionan desde el primer scroll.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/95 p-8 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-slate-400">Contacto</p>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-left text-slate-200 transition hover:border-slate-600/80 hover:bg-slate-900/95"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-800 text-base text-slate-200">
                      {contact.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{contact.label}</p>
                      <p className="text-sm text-slate-400">{contact.value}</p>
                    </div>
                  </div>
                  <span className="text-slate-400">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
