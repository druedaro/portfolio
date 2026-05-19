import React from 'react';

const education = [
  {
    degree: 'Máster en Desarrollo Frontend Avanzado',
    institution: 'Tech Academy',
    year: '2023',
    description: 'Especialización en arquitecturas modernas de frontend, performance optimization y buenas prácticas en desarrollo.',
    focus: ['React', 'TypeScript', 'Web Performance']
  },
  {
    degree: 'Bootcamp Full Stack JavaScript',
    institution: 'Code Institute',
    year: '2020',
    description: 'Formación intensiva en desarrollo web. Creación de aplicaciones completas con Node.js, Express y React.',
    focus: ['JavaScript', 'Node.js', 'React']
  },
  {
    degree: 'Grado en Ingeniería Informática',
    institution: 'Universidad Autónoma',
    year: '2018',
    description: 'Formación académica fundamental en ciencias de la computación, algoritmos y diseño de sistemas.',
    focus: ['Algoritmos', 'Estructuras de datos', 'Sistemas']
  }
];

export default function Education() {
  return (
    <section id="educación" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-500">Educación</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.05em] text-white sm:text-6xl">Formación y estudios</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Combinación de formación académica, bootcamps intensivos y aprendizaje continuo en desarrollo moderno de frontend.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-red-500/80 font-medium">{edu.institution}</p>
              </div>
              <p className="text-sm md:text-base font-mono text-neutral-500 md:whitespace-nowrap">{edu.year}</p>
            </div>
            
            <p className="text-neutral-300 mb-4 leading-relaxed">{edu.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
              {edu.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium bg-red-500/10 text-red-400/80 border border-red-500/20 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
