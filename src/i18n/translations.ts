export interface NavItem {
  label: string;
  href: string;
}

export interface HeroTranslation {
  subtitle: string;
  title: string;
  description: string;
  projectsBtn: string;
  contactBtn: string;
  location: string;
  brandPhoto: string;
  photoSubtitle: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface ExperienceTranslation {
  id: string;
  section: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  focus: string[];
}

export interface EducationTranslation {
  id: string;
  section: string;
  title: string;
  description: string;
  items: EducationItem[];
}

export interface CompetencyGroup {
  title: string;
  items: string[];
}

export interface CompetenciesTranslation {
  id: string;
  title: string;
  subtitle: string;
  groups: CompetencyGroup[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  demoLabel: string;
  codeLabel: string;
  demo: boolean;
  codeUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
}

export interface ProjectsTranslation {
  id: string;
  section: string;
  title: string;
  items: ProjectItem[];
}

export interface ContactTranslation {
  id: string;
  section: string;
  title1: string;
  title2: string;
  description: string;
}

export interface FooterTranslation {
  copyright: string;
}

export interface CertificationsTranslation {
  id: string;
  section: string;
  title: string;
  subtitle: string;
  filterAll: string;
  showMore: string;
  showLess: string;
}

export interface MetaTranslation {
  title: string;
  description: string;
}

export interface WhatIDoService {
  id: string;
  title: string;
  items: string[];
}

export interface WhatIDoTranslation {
  heading: string;
  services: WhatIDoService[];
}

export interface TranslationDictionary {
  meta: MetaTranslation;
  nav: NavItem[];
  hero: HeroTranslation;
  whatIDo: WhatIDoTranslation;
  experience: ExperienceTranslation;
  education: EducationTranslation;
  competencies: CompetenciesTranslation;
  projects: ProjectsTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
  certifications: CertificationsTranslation;
}

export const translations: Record<'es' | 'en' | 'ca', TranslationDictionary> = {
  es: {
    meta: {
      title: "David Rueda | Frontend Developer & Technical Marketer",
      description: "David Rueda — Portfolio de frontend developer y technical marketer construido con Astro, React y Tailwind CSS."
    },
    nav: [
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Educación', href: '#educacion' },
      { label: 'Certificaciones', href: '#certificaciones' },
      { label: 'Competencias', href: '#competencias' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Contacto', href: '#contacto' }
    ],
    hero: {
      subtitle: 'Frontend developer · technical marketer',
      title: 'Diseño web con impacto',
      description: 'Desarrollo frontend moderno con enfoque en producto, rendimiento y experiencia visual. Interfaces oscuras, limpias y con movimiento sutil para destacar cada sección.',
      projectsBtn: 'Proyectos',
      contactBtn: 'Contacto',
      location: 'Barcelona',
      brandPhoto: 'Foto de marca',
      photoSubtitle: 'Reemplaza este bloque con tu imagen o retrato'
    },
    experience: {
      id: 'experiencia',
      section: 'Experiencia',
      title: 'Trayectoria profesional',
      description: 'Experiencia en desarrollo frontend con enfoque en arquitectura escalable, rendimiento y colaboración en equipos multidisciplinarios.',
      items: [
        {
          title: 'Senior Frontend Developer',
          company: 'Tech Company Inc.',
          period: '2023 - Presente',
          description: 'Desarrollo de aplicaciones web modernas con React, Angular y TypeScript. Liderazgo de equipo y mentoring de desarrolladores junior.',
          skills: ['React', 'TypeScript', 'Angular', 'Team Lead']
        },
        {
          title: 'Frontend Developer',
          company: 'Digital Agency',
          period: '2021 - 2023',
          description: 'Creación de interfaces responsive y optimización de rendimiento. Trabajo con Tailwind CSS y metodologías ágiles.',
          skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Agile']
        },
        {
          title: 'Junior Developer',
          company: 'Startup Studio',
          period: '2020 - 2021',
          description: 'Primeros pasos en desarrollo web. Proyectos con HTML, CSS, JavaScript vanilla y primeras experiencias con frameworks.',
          skills: ['HTML', 'CSS', 'JavaScript', 'React']
        }
      ]
    },
    education: {
      id: 'educacion',
      section: 'Educación',
      title: 'Formación y estudios',
      description: 'Combinación de formación académica, bootcamps intensivos y aprendizaje continuo en desarrollo moderno de frontend.',
      items: [
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
      ]
    },
    competencies: {
      id: 'competencias',
      title: 'Competencias',
      subtitle: 'Tecnologías principales',
      groups: [
        {
          title: 'Angular Moderno',
          items: ['Signals', 'Standalone Components', 'OnPush', 'Lazy Loading', 'RxJS']
        },
        {
          title: 'Arquitectura',
          items: ['Feature-based', 'Separación de responsabilidades', 'APIs REST', 'Asincronía', 'TypeScript']
        },
        {
          title: 'Calidad',
          items: ['Testing unitario', 'Vitest', 'Jest', 'WCAG 2.2 AA', 'Estados de carga y error']
        },
        {
          title: 'Trabajo en equipo',
          items: ['Metodologías ágiles', 'Jira', 'Entrega por sprints', 'Comunicación efectiva', 'Enfoque de producto']
        }
      ]
    },
    projects: {
      id: 'proyectos',
      section: 'Proyectos personales',
      title: 'Mis proyectos',
      items: [
        {
          title: 'SEO Compass',
          description: 'Plataforma SPA colaborativa de gestión SEO para equipos y freelancers. Análisis de contenido on-page, auditorías técnicas, centro de tareas y seguimiento de keywords. React 19, TypeScript y Supabase con arquitectura clean y 25 tests unitarios.',
          tags: ['React 19', 'TypeScript', 'Supabase', 'Vitest'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/SEOCompass',
          demoUrl: 'https://seo-compass.vercel.app/',
          videoUrl: '/assets/seocompass.webm'
        },
        {
          title: 'FilmHorizon',
          description: 'SPA mobile-first para descubrir películas y series, con gestión de watchlist personal. Arquitectura feature-based con Angular 21, integración con TMDB API, autenticación Firebase, rutas protegidas y despliegue en Vercel.',
          tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNG'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true
        },
        {
          title: 'Budget Generator',
          description: 'Aplicación de presupuestos web con selección de servicios, configuración dinámica de precios, historial persistente y URLs compartibles. Angular 21 con PrimeNG, tests unitarios con Vitest y despliegue en Vercel.',
          tags: ['Vitest', 'Vercel', 'Angular', 'PrimeNG'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true
        },
        {
          title: 'Analytics Dashboard',
          description: 'Panel de analítica web con visualización de métricas en tiempo real, informes exportables y segmentación de audiencias. Integración con Google Analytics 4 y Chart.js para representación de datos compleja.',
          tags: ['React', 'Chart.js', 'GA4', 'TypeScript'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: false
        },
        {
          title: 'Design System CLI',
          description: 'Herramienta de línea de comandos para generar componentes UI reutilizables con estilos predefinidos, documentación automática y soporte para múltiples frameworks. Publicado como paquete npm de uso interno.',
          tags: ['Node.js', 'TypeScript', 'CLI', 'npm'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: false
        }
      ]
    },
    whatIDo: {
      heading: '¿Qué hago?',
      services: [
        {
          id: 'web',
          title: 'Desarrollo Web',
          items: [
            'Single Page Applications (SPAs)',
            'Landing pages y sitios web empresariales',
            'Webs de portfolio'
          ]
        },
        {
          id: 'mobile',
          title: 'Desarrollo Mobile',
          items: [
            'Progressive Web Apps (PWA)',
            'Diseño responsive mobile-first',
            'Soluciones multiplataforma'
          ]
        },
        {
          id: 'design',
          title: 'Diseño UI/UX y Prototipado',
          items: [
            'Wireframing y prototipado',
            'Sistemas de diseño de componentes',
            'Interfaces accesibles (WCAG)'
          ]
        }
      ]
    },
    contact: {
      id: 'contacto',
      section: 'Contacto',
      title1: 'Hablemos',
      title2: 'hoy',
      description: 'Disponible para colaborar en proyectos frontend con Angular, buenas prácticas de desarrollo y productos digitales que funcionan desde el primer scroll.'
    },
    footer: {
      copyright: '© 2026 DAVID RUEDA ROSAS'
    },
    certifications: {
      id: 'certificaciones',
      section: 'Certificaciones',
      title: 'Certificaciones',
      subtitle: 'certificaciones',
      filterAll: 'Todos',
      showMore: 'Ver todas',
      showLess: 'Ver menos'
    }
  },
  en: {
    meta: {
      title: "David Rueda | Frontend Developer & Technical Marketer",
      description: "David Rueda — Frontend developer and technical marketer portfolio built with Astro, React, and Tailwind CSS."
    },
    nav: [
      { label: 'About me', href: '#about-me' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ],
    hero: {
      subtitle: 'Frontend developer · technical marketer',
      title: 'Web design with impact',
      description: 'Modern frontend development with a focus on product, performance, and visual experience. Clean, dark interfaces with subtle motion to highlight each section.',
      projectsBtn: 'Projects',
      contactBtn: 'Contact',
      location: 'Barcelona',
      brandPhoto: 'Brand photo',
      photoSubtitle: 'Replace this block with your image or portrait'
    },
    experience: {
      id: 'experience',
      section: 'Experience',
      title: 'Professional experience',
      description: 'Frontend development experience focused on scalable architecture, performance, and collaboration in multidisciplinary teams.',
      items: [
        {
          title: 'Senior Frontend Developer',
          company: 'Tech Company Inc.',
          period: '2023 - Present',
          description: 'Developing modern web applications with React, Angular, and TypeScript. Team leadership and mentoring of junior developers.',
          skills: ['React', 'TypeScript', 'Angular', 'Team Lead']
        },
        {
          title: 'Frontend Developer',
          company: 'Digital Agency',
          period: '2021 - 2023',
          description: 'Creating responsive interfaces and optimizing performance. Working with Tailwind CSS and agile methodologies.',
          skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Agile']
        },
        {
          title: 'Junior Developer',
          company: 'Startup Studio',
          period: '2020 - 2021',
          description: 'First steps in web development. Projects with HTML, CSS, vanilla JavaScript, and first experiences with frameworks.',
          skills: ['HTML', 'CSS', 'JavaScript', 'React']
        }
      ]
    },
    education: {
      id: 'education',
      section: 'Education',
      title: 'Education & studies',
      description: 'Combination of academic background, intensive bootcamps, and continuous learning in modern frontend development.',
      items: [
        {
          degree: "Master's in Advanced Frontend Development",
          institution: 'Tech Academy',
          year: '2023',
          description: 'Specialization in modern frontend architectures, performance optimization, and development best practices.',
          focus: ['React', 'TypeScript', 'Web Performance']
        },
        {
          degree: 'Full Stack JavaScript Bootcamp',
          institution: 'Code Institute',
          year: '2020',
          description: 'Intensive web development training. Building complete applications with Node.js, Express, and React.',
          focus: ['JavaScript', 'Node.js', 'React']
        },
        {
          degree: "Bachelor's in Computer Engineering",
          institution: 'Autonomous University',
          year: '2018',
          description: 'Fundamental academic training in computer science, algorithms, and system design.',
          focus: ['Algorithms', 'Data structures', 'Systems']
        }
      ]
    },
    competencies: {
      id: 'skills',
      title: 'Skills',
      subtitle: 'Core technologies',
      groups: [
        {
          title: 'Modern Angular',
          items: ['Signals', 'Standalone Components', 'OnPush', 'Lazy Loading', 'RxJS']
        },
        {
          title: 'Architecture',
          items: ['Feature-based', 'Separation of concerns', 'REST APIs', 'Asynchrony', 'TypeScript']
        },
        {
          title: 'Quality',
          items: ['Unit testing', 'Vitest', 'Jest', 'WCAG 2.2 AA', 'Loading & error states']
        },
        {
          title: 'Teamwork',
          items: ['Agile methodologies', 'Jira', 'Sprint delivery', 'Effective communication', 'Product focus']
        }
      ]
    },
    projects: {
      id: 'projects',
      section: 'Personal projects',
      title: 'My projects',
      items: [
        {
          title: 'SEO Compass',
          description: 'Collaborative SEO management SPA for small teams and freelancers. On-page content analysis, technical audits, task action center, and keyword tracking. React 19, TypeScript and Supabase with clean architecture and 25 unit tests.',
          tags: ['React 19', 'TypeScript', 'Supabase', 'Vitest'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true,
          codeUrl: 'https://github.com/druedaro/SEOCompass',
          demoUrl: 'https://seo-compass.vercel.app/',
          videoUrl: '/assets/seocompass.webm'
        },
        {
          title: 'FilmHorizon',
          description: 'Mobile-first SPA to discover movies and series, featuring a personal watchlist management. Feature-based architecture with Angular 21, TMDB API integration, Firebase authentication, protected routes, and deployed on Vercel.',
          tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNG'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true
        },
        {
          title: 'Budget Generator',
          description: 'Web budget generation app with service selection, dynamic pricing configuration, persistent history, and shareable URLs. Angular 21 with PrimeNG, unit tests with Vitest, and deployed on Vercel.',
          tags: ['Vitest', 'Vercel', 'Angular', 'PrimeNG'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true
        },
        {
          title: 'Analytics Dashboard',
          description: 'Web analytics panel with real-time metrics visualization, exportable reports, and audience segmentation. Integrated with Google Analytics 4 and Chart.js for complex data representation.',
          tags: ['React', 'Chart.js', 'GA4', 'TypeScript'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: false
        },
        {
          title: 'Design System CLI',
          description: 'Command-line tool to generate reusable UI components with predefined styles, automatic documentation, and support for multiple frameworks. Published as an internal npm package.',
          tags: ['Node.js', 'TypeScript', 'CLI', 'npm'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: false
        }
      ]
    },
    whatIDo: {
      heading: 'What I do?',
      services: [
        {
          id: 'web',
          title: 'Web Development',
          items: [
            'Single Page Applications (SPAs)',
            'Landing pages and business websites',
            'Portfolio websites'
          ]
        },
        {
          id: 'mobile',
          title: 'Mobile Development',
          items: [
            'Progressive Web Apps (PWA)',
            'Responsive mobile-first design',
            'Cross-platform solutions'
          ]
        },
        {
          id: 'design',
          title: 'UI/UX Design & Prototyping',
          items: [
            'Wireframing and prototyping',
            'Component design systems',
            'Accessibility-first interfaces (WCAG)'
          ]
        }
      ]
    },
    contact: {
      id: 'contact',
      section: 'Contact',
      title1: "Let's talk",
      title2: 'today',
      description: 'Available to collaborate on frontend projects with Angular, development best practices, and digital products that work from the very first scroll.'
    },
    footer: {
      copyright: '© 2026 DAVID RUEDA ROSAS'
    },
    certifications: {
      id: 'certifications',
      section: 'Certifications',
      title: 'Certifications',
      subtitle: 'certifications',
      filterAll: 'All',
      showMore: 'Show all',
      showLess: 'Show less'
    }
  },
  ca: {
    meta: {
      title: "David Rueda | Frontend Developer & Technical Marketer",
      description: "David Rueda — Portfolio de frontend developer i technical marketer construït amb Astro, React i Tailwind CSS."
    },
    nav: [
      { label: 'Sobre mi', href: '#sobre-mi' },
      { label: 'Experiència', href: '#experiencia' },
      { label: 'Educació', href: '#educacio' },
      { label: 'Certificacions', href: '#certificacions' },
      { label: 'Competències', href: '#competencies' },
      { label: 'Projectes', href: '#projectes' },
      { label: 'Contacte', href: '#contacte' }
    ],
    hero: {
      subtitle: 'Frontend developer · technical marketer',
      title: 'Disseny web amb impacte',
      description: 'Desenvolupament frontend modern amb enfocament en producte, rendiment i experiència visual. Interfícies fosques, netes i amb moviment subtil per destacar cada secció.',
      projectsBtn: 'Projectes',
      contactBtn: 'Contacte',
      location: 'Barcelona',
      brandPhoto: 'Foto de marca',
      photoSubtitle: 'Reemplaça aquest bloc amb la teva imatge o retrat'
    },
    experience: {
      id: 'experiencia',
      section: 'Experiència',
      title: 'Trajectòria professional',
      description: 'Experiència en desenvolupament frontend amb enfocament en arquitectura escalable, rendiment i col·laboració en equips multidisciplinaris.',
      items: [
        {
          title: 'Senior Frontend Developer',
          company: 'Tech Company Inc.',
          period: '2023 - Present',
          description: 'Desenvolupament d\'aplicacions web modernes amb React, Angular i TypeScript. Lideratge d\'equip i mentoring de desenvolupadors junior.',
          skills: ['React', 'TypeScript', 'Angular', 'Team Lead']
        },
        {
          title: 'Frontend Developer',
          company: 'Digital Agency',
          period: '2021 - 2023',
          description: 'Creació d\'interfícies responsive i optimització de rendiment. Treball amb Tailwind CSS i metodologies àgiles.',
          skills: ['React', 'Tailwind CSS', 'Responsive Design', 'Agile']
        },
        {
          title: 'Junior Developer',
          company: 'Startup Studio',
          period: '2020 - 2021',
          description: 'Primers passos en desenvolupament web. Projectes amb HTML, CSS, JavaScript vanilla i primeres experiències amb frameworks.',
          skills: ['HTML', 'CSS', 'JavaScript', 'React']
        }
      ]
    },
    education: {
      id: 'educacio',
      section: 'Educació',
      title: 'Formació i estudis',
      description: 'Combinació de formació acadèmica, bootcamps intensius i aprenentatge continu en desenvolupament modern de frontend.',
      items: [
        {
          degree: 'Màster en Desenvolupament Frontend Avançat',
          institution: 'Tech Academy',
          year: '2023',
          description: 'Especialització en arquitectures modernes de frontend, performance optimization i bones pràctiques en desenvolupament.',
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
          degree: 'Grau en Enginyeria Informàtica',
          institution: 'Universitat Autònoma',
          year: '2018',
          description: 'Formació acadèmica fonamental en ciències de la computació, algorismes i disseny de sistemes.',
          focus: ['Algorismes', 'Estructures de dades', 'Sistemes']
        }
      ]
    },
    competencies: {
      id: 'competencies',
      title: 'Competències',
      subtitle: 'Tecnologies principals',
      groups: [
        {
          title: 'Angular Modern',
          items: ['Signals', 'Standalone Components', 'OnPush', 'Lazy Loading', 'RxJS']
        },
        {
          title: 'Arquitectura',
          items: ['Feature-based', 'Separació de responsabilitats', 'APIs REST', 'Asincronia', 'TypeScript']
        },
        {
          title: 'Qualitat',
          items: ['Testing unitari', 'Vitest', 'Jest', 'WCAG 2.2 AA', 'Estats de càrrega i error']
        },
        {
          title: 'Treball en equip',
          items: ['Metodologies àgils', 'Jira', 'Lliurament per sprints', 'Comunicació efectiva', 'Enfocament de producte']
        }
      ]
    },
    projects: {
      id: 'projectes',
      section: 'Projectes personals',
      title: 'Els meus projectes',
      items: [
        {
          title: 'SEO Compass',
          description: 'Plataforma SPA col·laborativa de gestió SEO per a equips i freelancers. Anàlisi de contingut on-page, auditories tècniques, centre de tasques i seguiment de keywords. React 19, TypeScript i Supabase amb arquitectura neta i 25 tests unitaris.',
          tags: ['React 19', 'TypeScript', 'Supabase', 'Vitest'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/SEOCompass',
          demoUrl: 'https://seo-compass.vercel.app/',
          videoUrl: '/assets/seocompass.webm'
        },
        {
          title: 'FilmHorizon',
          description: 'SPA mobile-first per descobrir pel·lícules i sèries, amb gestió de llista de seguiment personal. Arquitectura feature-based amb Angular 21, integració amb TMDB API, autenticació Firebase, rutes protegides i desplegament a Vercel.',
          tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'PrimeNG'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true
        },
        {
          title: 'Budget Generator',
          description: 'Aplicación de pressupostos web amb selecció de serveis, configuració dinàmica de preus, historial persistent i URLs compartibles. Angular 21 amb PrimeNG, tests unitaris amb Vitest i desplegament a Vercel.',
          tags: ['Vitest', 'Vercel', 'Angular', 'PrimeNG'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true
        },
        {
          title: 'Analytics Dashboard',
          description: `Panell d'analítica web amb visualització de mètriques en temps real, informes exportables i segmentació d'audiències. Integració amb Google Analytics 4 i Chart.js per a representació de dades complexa.`,
          tags: ['React', 'Chart.js', 'GA4', 'TypeScript'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: false
        },
        {
          title: 'Design System CLI',
          description: `Eina de línia de comandes per generar components UI reutilitzables amb estils predefinits, documentació automàtica i suport per a múltiples frameworks. Publicat com a paquet npm d'ús intern.`,
          tags: ['Node.js', 'TypeScript', 'CLI', 'npm'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: false
        }
      ]
    },
    whatIDo: {
      heading: 'Què faig?',
      services: [
        {
          id: 'web',
          title: 'Desenvolupament Web',
          items: [
            'Single Page Applications (SPAs)',
            'Landing pages i llocs web empresarials',
            'Webs de portfolio'
          ]
        },
        {
          id: 'mobile',
          title: 'Desenvolupament Mobile',
          items: [
            'Progressive Web Apps (PWA)',
            'Disseny responsive mobile-first',
            'Solucions multiplataforma'
          ]
        },
        {
          id: 'design',
          title: 'Disseny UI/UX i Prototipat',
          items: [
            'Wireframing i prototipat',
            'Sistemes de disseny de components',
            'Interfícies accessibles (WCAG)'
          ]
        }
      ]
    },
    contact: {
      id: 'contacte',
      section: 'Contacte',
      title1: 'Parlem',
      title2: 'avui',
      description: 'Disponible per col·laborar en projectes frontend amb Angular, bones pràctiques de desenvolupament i productes digitals que funcionen des del primer scroll.'
    },
    footer: {
      copyright: '© 2026 DAVID RUEDA ROSAS'
    },
    certifications: {
      id: 'certificacions',
      section: 'Certificacions',
      title: 'Certificacions',
      subtitle: 'certificacions',
      filterAll: 'Tots',
      showMore: 'Veure totes',
      showLess: 'Veure menys'
    }
  }
};
