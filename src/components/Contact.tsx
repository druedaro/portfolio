import React from 'react';

const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const contacts = [
  {
    label: 'LinkedIn',
    value: 'David Rueda Rosas',
    href: 'https://www.linkedin.com/in/david-rueda-rosas/',
    icon: <LinkedinIcon />
  },
  {
    label: 'GitHub',
    value: 'druedaro',
    href: 'https://github.com/druedaro',
    icon: <GithubIcon />
  },
  {
    label: 'Email',
    value: 'ruedarosasdavid@gmail.com',
    href: 'mailto:ruedarosasdavid@gmail.com',
    icon: <MailIcon />
  }
];

import type { ContactTranslation } from '../i18n/translations';

export default function Contact({ t = {} as Partial<ContactTranslation> }: { t?: Partial<ContactTranslation> }) {
  const sectionId = t.id || 'contacto';
  const sectionTag = t.section || 'Contacto';
  const title1 = t.title1 || 'Hablemos';
  const title2 = t.title2 || 'hoy';
  const description = t.description || 'Disponible para colaborar en proyectos frontend con React, buenas prácticas de desarrollo y productos digitales que funcionan desde el primer scroll.';

  return (
    <section id={sectionId} className="relative overflow-hidden py-20 lg:py-24 w-full">
      <div className="absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0 space-y-8 reveal reveal-up">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-slate-900 dark:text-white break-words">
                {title1}
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.05em] text-red-500 break-words">
                {title2}
              </h3>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/95 p-8 shadow-[0_40px_120px_-50px_rgba(148,163,184,0.3)] dark:shadow-[0_40px_120px_-50px_rgba(15,23,42,0.8)] backdrop-blur-xl reveal reveal-up" style={{ transitionDelay: '200ms' }}>
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{sectionTag}</p>
            <div className="space-y-4">
              {contacts.map((contact) => {
                const isMail = contact.href.startsWith('mailto:');
                return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  className="flex min-w-0 items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400 dark:border-slate-800/70 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-600/80 dark:hover:bg-slate-900/95 px-5 py-4 text-left transition-all"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 text-base">
                      {contact.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800 dark:text-white">{contact.label}</p>
                      <p className="truncate text-sm text-slate-500 dark:text-slate-400">{contact.value}</p>
                    </div>
                  </div>
                  <span className="text-slate-400">↗</span>
                </a>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
