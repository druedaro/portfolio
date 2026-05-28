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
          title: 'React Moderno',
          items: ['Hooks', 'Context API', 'State Management', 'React Router', 'Vite']
        },
        {
          title: 'Arquitectura',
          items: ['Feature-based', 'TypeScript', 'JavaScript ES6', 'APIs REST', 'Asincronía']
        },
        {
          title: 'Calidad y Accesibilidad',
          items: ['Testing unitario', 'Vitest / Jest', 'WCAG 2.2 AA', 'Clean Code', 'Rendimiento (Web Perf)']
        },
        {
          title: 'Marketing Técnico',
          items: ['SEO Técnico (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'E-commerce (Shopify/Magento)', 'Auditorías SEO']
        },
        {
          title: 'Gestión y Agilidad',
          items: ['Liderazgo de equipos', 'Metodologías ágiles', 'Jira', 'Entrega por sprints', 'Enfoque de producto']
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
          title: 'MovieApp',
          description: 'Aplicación web optimizada de búsqueda y exploración de películas y series. Integración con la API de TMDB, scroll infinito, filtros por año/género y navegación de actores. React 19, Tailwind CSS y Supabase.',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint7-movie-app',
          demoUrl: 'https://sprint7-movie-app-q7z4.vercel.app/',
          videoUrl: '/assets/movieapp.webm'
        },
        {
          title: 'Budget Calculator',
          description: 'Aplicación web para generar presupuestos profesionales de desarrollo web y marketing digital. Selección de servicios con tarifas dinámicas, descuentos, persistencia en almacenamiento local y sincronización por parámetros URL. React 19, Tailwind CSS, React Hook Form y Zod.',
          tags: ['React 19', 'React Hook Form', 'Zod', 'Tailwind CSS'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint6-web-budget-calculator',
          demoUrl: 'https://sprint6-web-budget-calculator.vercel.app/',
          videoUrl: '/assets/calculatorapp.webm'
        },
        {
          title: 'Pokédex Classic',
          description: 'Aplicación web modular que actúa como Pokédex interactiva conectándose a la PokéAPI pública. Búsqueda por nombre o ID, filtrado por tipos, estadísticas detalladas, descripción de habilidades y navegación secuencial. Creada con JavaScript ES6, HTML5 y Tailwind CSS.',
          tags: ['JavaScript ES6', 'Tailwind CSS', 'PokéAPI', 'Fetch API'],
          demoLabel: 'Ver demo',
          codeLabel: 'Código disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/pokedex-API',
          demoUrl: 'https://pokedex-api-sable.vercel.app/',
          videoUrl: '/assets/pokedex.webm'
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
      description: 'Disponible para colaborar en proyectos frontend con React, buenas prácticas de desarrollo y productos digitales que funcionan desde el primer scroll.'
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
          title: 'Modern React',
          items: ['Hooks', 'Context API', 'State Management', 'React Router', 'Vite']
        },
        {
          title: 'Architecture',
          items: ['Feature-based', 'TypeScript', 'JavaScript ES6', 'REST APIs', 'Asynchrony']
        },
        {
          title: 'Quality & Accessibility',
          items: ['Unit testing', 'Vitest / Jest', 'WCAG 2.2 AA', 'Clean Code', 'Performance (Web Perf)']
        },
        {
          title: 'Technical Marketing',
          items: ['Technical SEO (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'E-commerce (Shopify/Magento)', 'SEO Audits']
        },
        {
          title: 'Management & Agile',
          items: ['Team leadership', 'Agile methodologies', 'Jira', 'Sprint delivery', 'Product focus']
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
          title: 'MovieApp',
          description: 'Optimized web application for searching and exploring movies and series. Features TMDB API integration, infinite scroll, genre/year filters, and actor navigation. React 19, Tailwind CSS and Supabase.',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint7-movie-app',
          demoUrl: 'https://sprint7-movie-app-q7z4.vercel.app/',
          videoUrl: '/assets/movieapp.webm'
        },
        {
          title: 'Budget Calculator',
          description: 'Web application for generating professional budget estimates for web development and digital marketing. Features dynamic pricing, discounts, local storage persistence, and URL parameters synchronization. React 19, Tailwind CSS, React Hook Form, and Zod.',
          tags: ['React 19', 'React Hook Form', 'Zod', 'Tailwind CSS'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint6-web-budget-calculator',
          demoUrl: 'https://sprint6-web-budget-calculator.vercel.app/',
          videoUrl: '/assets/calculatorapp.webm'
        },
        {
          title: 'Pokédex Classic',
          description: 'Modular web application that serves as an interactive Pokédex using the public PokéAPI. Features Pokémon search by name/ID, type filtering, detailed stats, ability descriptions, and sequential navigation. Built with JavaScript ES6, HTML5, and Tailwind CSS.',
          tags: ['JavaScript ES6', 'Tailwind CSS', 'PokéAPI', 'Fetch API'],
          demoLabel: 'View demo',
          codeLabel: 'Code available',
          demo: true,
          codeUrl: 'https://github.com/druedaro/pokedex-API',
          demoUrl: 'https://pokedex-api-sable.vercel.app/',
          videoUrl: '/assets/pokedex.webm'
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
      description: 'Available to collaborate on frontend projects with React, development best practices, and digital products that work from the very first scroll.'
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
          title: 'React Modern',
          items: ['Hooks', 'Context API', 'State Management', 'React Router', 'Vite']
        },
        {
          title: 'Arquitectura',
          items: ['Feature-based', 'TypeScript', 'JavaScript ES6', 'APIs REST', 'Asincronia']
        },
        {
          title: 'Qualitat i Accessibilitat',
          items: ['Testing unitari', 'Vitest / Jest', 'WCAG 2.2 AA', 'Clean Code', 'Rendiment (Web Perf)']
        },
        {
          title: 'Màrqueting Tècnic',
          items: ['SEO Tècnic (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'E-commerce (Shopify/Magento)', 'Auditories SEO']
        },
        {
          title: 'Gestió i Agilitat',
          items: ['Lideratge d\'equips', 'Metodologies àgils', 'Jira', 'Lliurament per sprints', 'Enfocament de producte']
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
          title: 'MovieApp',
          description: 'Aplicació web optimitzada de cerca i exploració de pel·lícules i sèries. Integració amb l\'API de TMDB, scroll infinit, filtres per any/gènere i navegació d\'actors. React 19, Tailwind CSS i Supabase.',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint7-movie-app',
          demoUrl: 'https://sprint7-movie-app-q7z4.vercel.app/',
          videoUrl: '/assets/movieapp.webm'
        },
        {
          title: 'Budget Calculator',
          description: 'Aplicació web per generar pressupostos professionals de desenvolupament web i màrqueting digital. Selecció de serveis amb tarifes dinàmiques, descomptes, persistència en emmagatzematge local i sincronització per paràmetres URL. React 19, Tailwind CSS, React Hook Form i Zod.',
          tags: ['React 19', 'React Hook Form', 'Zod', 'Tailwind CSS'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/sprint6-web-budget-calculator',
          demoUrl: 'https://sprint6-web-budget-calculator.vercel.app/',
          videoUrl: '/assets/calculatorapp.webm'
        },
        {
          title: 'Pokédex Classic',
          description: 'Aplicació web modular que actua com a Pokédex interactiva connectant-se a la PokéAPI pública. Cerca per nom o ID, filtrat per tipus, estadístiques detallades, descripció d\'habilitats i navegació seqüencial. Creada amb JavaScript ES6, HTML5 i Tailwind CSS.',
          tags: ['JavaScript ES6', 'Tailwind CSS', 'PokéAPI', 'Fetch API'],
          demoLabel: 'Veure demo',
          codeLabel: 'Codi disponible',
          demo: true,
          codeUrl: 'https://github.com/druedaro/pokedex-API',
          demoUrl: 'https://pokedex-api-sable.vercel.app/',
          videoUrl: '/assets/pokedex.webm'
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
      description: 'Disponible per col·laborar en projectes frontend amb React, bones pràctiques de desenvolupament i productes digitals que funcionen des del primer scroll.'
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
