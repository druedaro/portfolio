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
  logo?: string;
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
  logo?: string;
  grade?: string;
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

export interface Cert {
  name: string;
  issuer: string;
  year: number;
  category: string;
}

export interface CertificationsTranslation {
  id: string;
  section: string;
  title: string;
  subtitle: string;
  filterAll: string;
  showMore: string;
  showLess: string;
  certs: Cert[];
  categories: string[];
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
          title: 'Desarrollador Frontend',
          company: 'Barcelona Activa',
          period: 'nov. 2025 - actualidad',
          description: 'Lidero el desarrollo técnico y la maquetación de la plataforma de retos lógicos de IT Academy, un producto clave enfocado en potenciar el aprendizaje técnico de la comunidad estudiantil. Colaboro de forma transversal con Backend y Product Owners para diseñar y desplegar funcionalidades avanzadas, priorizando el rendimiento, la accesibilidad (WCAG) y la usabilidad. Aplico metodologías ágiles (Scrum) en sprints quincenales y aseguro la escalabilidad a largo plazo del ecosistema mediante refactorizaciones estratégicas, arquitectura limpia y la implementación de componentes reutilizables de alta calidad.',
          skills: ['React', 'TypeScript', 'Agile', 'Scrum', 'Git', 'Clean Code'],
          logo: '/assets/barcelonaactiva.webp'
        },
        {
          title: 'Desarrollador Web Frontend Junior',
          company: 'Lite Solutions',
          period: 'sept. 2024 - dic. 2024',
          description: 'Especializado en el desarrollo frontend de soluciones e-commerce a medida. Responsable del mantenimiento evolutivo y la optimización de tiendas online basadas en WordPress y PrestaShop. Implementé funcionalidades interactivas avanzadas con JavaScript ES6 y jQuery, estructuré consultas eficientes a bases de datos relacionales (MySQL) y desarrollé adaptaciones lógicas con PHP. Aseguré una experiencia de usuario fluida y multidispositivo mediante maquetación semántica y diseño adaptativo con Bootstrap y CSS avanzado, optimizando plantillas y extendiendo módulos del core técnico.',
          skills: ['JavaScript', 'jQuery', 'WordPress', 'PrestaShop', 'Bootstrap', 'PHP', 'MySQL', 'Responsive Design'],
          logo: '/assets/litesolutions.webp'
        },
        {
          title: 'Search Engine Optimization Specialist',
          company: 'tbb Agency',
          period: 'ene. 2023 - jul. 2023',
          description: 'Dirección técnica de la estrategia SEO y analítica web de más de 50 e-commerce y portales de alta envergadura construidos con plataformas complejas (Magento, PrestaShop, Shopify, WordPress y Drupal). Lideré un equipo de 5 consultores SEO, coordinando auditorías técnicas de rastreo, indexabilidad e integraciones críticas de datos. Diseñé e implementé arquitecturas complejas de medición de analítica web mediante Google Tag Manager, Google Analytics 4 y Search Console, transformando datos de comportamiento de usuario en insights de negocio que mejoraron significativamente la visibilidad orgánica de las marcas.',
          skills: ['SEO Técnico', 'Liderazgo de Equipos', 'Magento', 'PrestaShop', 'Shopify', 'WordPress', 'Google Analytics', 'Google Tag Manager'],
          logo: '/assets/logo-tbb.agency.webp'
        },
        {
          title: 'Técnico en Posicionamiento Web (SEO) Junior',
          company: 'tbb Agency',
          period: 'ene. 2021 - dic. 2022',
          description: 'Ejecución de auditorías SEO on-page y off-page orientadas a corregir problemas de velocidad de carga, enlazado interno e indexación. Responsable de la monitorización del rendimiento de búsquedas y de la correcta implementación técnica de etiquetas semánticas y metadatos en múltiples gestores de contenido. Configuré paneles de control de analítica de tráfico esenciales y documenté informes de rendimiento técnico para guiar mejoras de visibilidad y optimización web.',
          skills: ['SEO', 'Google Search Console', 'Analítica Web', 'Optimización Web', 'E-commerce'],
          logo: '/assets/logo-tbb.agency.webp'
        }
      ]
    },
    education: {
      id: 'educacion',
      section: 'Educación',
      title: 'Formación y estudios',
      description: 'Formación técnica en desarrollo frontend combinada con una base sólida en negocio digital, marketing y e-commerce.',
      items: [
        {
          degree: 'Bootcamp Frontend (React)',
          institution: 'IT Academy · Barcelona Activa',
          year: 'mar. 2025 – ene. 2026',
          description: 'Programa intensivo acreditado con Microcredencial Universitaria por la UPC. Desarrollé aplicaciones reales sprint a sprint: desde maquetación semántica con HTML y CSS hasta SPAs completas con React 19 y TypeScript, consumo de APIs REST, gestión de datos con Supabase y autenticación. El proyecto final, SEO Compass —plataforma colaborativa de gestión SEO— obtuvo la máxima nota. Trabajo en equipo con Git y metodologías ágiles en todo el programa.',
          focus: ['React 19', 'TypeScript', 'Supabase', 'Git', 'APIs REST', 'Metodologías ágiles'],
          logo: '/assets/itacademy.webp',
          grade: 'Proyecto final: 10'
        },
        {
          degree: 'React: Hooks y MERN',
          institution: 'DevTalles',
          year: 'jun. 2024 – oct. 2024',
          description: 'Formación avanzada en React moderno diseñada íntegramente con Hooks y componentes funcionales. El curso aborda useState, useEffect, useContext, useReducer y hooks personalizados, además de routing con React Router, gestión de estado global y construcción de aplicaciones full-stack con la pila MERN. Énfasis en buenas prácticas, código limpio y patrones profesionales aplicados desde el primer día.',
          focus: ['React.js', 'Hooks', 'React Router', 'Context API', 'MERN', 'Clean Code'],
          logo: '/assets/devtalles-white-black.webp'
        },
        {
          degree: 'Confección y Publicación de Páginas Web (IFCD0110)',
          institution: 'The Corner Centre d\'Estudis',
          year: 'mar. 2024 – oct. 2024',
          description: 'Certificado de profesionalidad oficial de 480 horas que sentó las bases técnicas del desarrollo web. Aprendí HTML semántico para SEO, CSS avanzado con animaciones y layouts modernos, JavaScript para añadir dinamismo, Bootstrap y diseño responsive. También desarrollé competencias en WordPress —personalización de temas, plugins, WPO y seguridad— y en la integración de herramientas de medición como Google Analytics y Google Tag Manager.',
          focus: ['HTML semántico', 'CSS avanzado', 'JavaScript', 'WordPress', 'Bootstrap', 'Google Analytics', 'GTM'],
          logo: '/assets/thecorner.webp',
          grade: 'Nota: 9,90'
        },
        {
          degree: 'Máster en Dirección de e-Commerce y Marketing Digital',
          institution: 'Universitat de Barcelona',
          year: 'sept. 2019 – jul. 2020',
          description: 'Máster de formación permanente aprobado por la agencia de posgrado de la UB con enfoque estratégico y operativo. Adquirí dominio en SEO técnico y on-page, SEM, analítica web avanzada, social media, email marketing y gestión de e-commerce. El trabajo de fin de máster, un plan de marketing digital completo para un centro médico privado, obtuvo una nota de 9,5. Profesores en activo de empresas líderes del sector.',
          focus: ['SEO técnico', 'SEM', 'Google Analytics', 'E-Commerce', 'Social Media', 'Email Marketing'],
          logo: '/assets/ub.webp',
          grade: 'Nota: 9,93'
        },
        {
          degree: 'Grado en Administración y Dirección de Empresas',
          institution: 'Universitat de Barcelona',
          year: '2015 – 2019',
          description: 'Grado universitario con mención en Organización de Empresas y suplemento europeo. Cuatro años de formación en dirección general, estrategia empresarial, finanzas, marketing y recursos humanos que me dan una visión de negocio sólida aplicada hoy al desarrollo de producto digital. El trabajo de fin de grado, sobre las implicaciones de la tecnología 5G en el mundo empresarial, fue calificado con un 9.',
          focus: ['Estrategia empresarial', 'Gestión financiera', 'Marketing', 'Organización de Empresas', 'Dirección general'],
          logo: '/assets/ub.webp'
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
          items: ['SEO Técnico (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'CMS y E-commerce (WordPress/Drupal/Shopify/Magento)', 'Auditorías SEO']
        },
        {
          title: 'Gestión y Agilidad',
          items: ['Liderazgo de equipos', 'Metodologías ágiles', 'Coordinación transversal y decisiones basadas en datos', 'Entrega por sprints', 'Enfoque de producto']
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
      showLess: 'Ver menos',
      categories: ['Marketing Digital', 'Inteligencia Artificial', 'SEO', 'Web Analytics', 'UI/UX & Data', 'Desarrollo Web'],
      certs: [
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
        { name: 'Excel Online', issuer: 'Udemy', year: 2020, category: 'UI/UX & Data' }
      ]
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
          title: 'Frontend Developer',
          company: 'Barcelona Activa',
          period: 'Nov. 2025 - Present',
          description: 'Lead the frontend engineering and layout design of IT Academy\'s logical challenges platform, a critical student-centered web product. Collaborate closely with Backend developers and Product Owners to design and deliver complex modules, ensuring exceptional web performance, accessibility (WCAG), and clean code standards. Drive agile sprint execution (Scrum), implement modular architecture, and execute strategic refactoring to build a robust, scalable, and highly interactive learning application.',
          skills: ['React', 'TypeScript', 'Agile', 'Scrum', 'Git', 'Clean Code'],
          logo: '/assets/barcelonaactiva.webp'
        },
        {
          title: 'Junior Frontend Web Developer',
          company: 'Lite Solutions',
          period: 'Sept. 2024 - Dec. 2024',
          description: 'Specialized in frontend development for tailored e-commerce systems. Led the feature enhancement, debugging, and layout optimization of prominent online stores powered by WordPress and PrestaShop. Crafted interactive user experiences using JavaScript ES6 and jQuery, developed database integrations with PHP and MySQL, and implemented pixel-perfect, mobile-first interfaces using Bootstrap and CSS3. Conducted modular extensions, utilized lifecycle hooks, and optimized templates to improve store conversion rates and load times.',
          skills: ['JavaScript', 'jQuery', 'WordPress', 'PrestaShop', 'Bootstrap', 'PHP', 'MySQL', 'Responsive Design'],
          logo: '/assets/litesolutions.webp'
        },
        {
          title: 'Search Engine Optimization Specialist',
          company: 'tbb Agency',
          period: 'Jan. 2023 - Jul. 2023',
          description: 'Spearheaded the technical SEO strategy and web analytics implementation for over 50 large-scale e-commerce stores and corporate websites (Magento, PrestaShop, Shopify, WordPress, and Drupal). Led and mentored a high-performing team of 5 SEO specialists, coordinating deep crawl audits, indexability optimizations, and data integration. Architected complex measurement plans using Google Tag Manager, Google Analytics 4, and Search Console, turning raw user behavior data into actionable commercial insights that drove massive organic traffic growth.',
          skills: ['Technical SEO', 'Team Leadership', 'Magento', 'PrestaShop', 'Shopify', 'WordPress', 'Google Analytics', 'Google Tag Manager'],
          logo: '/assets/logo-tbb.agency.webp'
        },
        {
          title: 'Junior Web Positioning (SEO) Technician',
          company: 'tbb Agency',
          period: 'Jan. 2021 - Dec. 2022',
          description: 'Executed comprehensive on-page and off-page SEO audits, focusing on page speed, internal linking, and crawling errors. Responsible for search visibility monitoring, metadata implementation, and structured data setup across diverse CMS environments. Configured basic analytics tracking, tracked keyword performance, and compiled monthly reporting to facilitate data-driven site optimizations.',
          skills: ['SEO', 'Google Search Console', 'Web Analytics', 'Web Optimization', 'E-commerce'],
          logo: '/assets/logo-tbb.agency.webp'
        }
      ]
    },
    education: {
      id: 'education',
      section: 'Education',
      title: 'Education & studies',
      description: 'Technical frontend training combined with a solid background in digital business, marketing, and e-commerce.',
      items: [
        {
          degree: 'Frontend Bootcamp (React)',
          institution: 'IT Academy · Barcelona Activa',
          year: 'Mar. 2025 – Jan. 2026',
          description: 'Intensive programme accredited with a University Micro-credential by the UPC. I built real-world applications sprint by sprint: from semantic HTML/CSS layouts to full SPAs with React 19 and TypeScript, REST API consumption, Supabase data management and authentication. My final project, SEO Compass — a collaborative SEO management platform — received a perfect score. Team collaboration with Git and agile methodologies throughout.',
          focus: ['React 19', 'TypeScript', 'Supabase', 'Git', 'REST APIs', 'Agile'],
          logo: '/assets/itacademy.webp',
          grade: 'Final project: 10'
        },
        {
          degree: 'React: Hooks & MERN',
          institution: 'DevTalles',
          year: 'Jun. 2024 – Oct. 2024',
          description: "Advanced React training built entirely around Hooks and functional components. Covers useState, useEffect, useContext, useReducer and custom hooks, alongside React Router, global state management, and full-stack MERN app development. Strong emphasis on clean code, professional patterns, and real-world best practices from day one.",
          focus: ['React.js', 'Hooks', 'React Router', 'Context API', 'MERN', 'Clean Code'],
          logo: '/assets/devtalles-white-black.webp'
        },
        {
          degree: 'Web Page Design and Publishing (IFCD0110)',
          institution: 'The Corner Centre d\'Estudis',
          year: 'Mar. 2024 – Oct. 2024',
          description: 'Official 480-hour professional certification that built my technical web foundations. I learned semantic HTML for SEO, advanced CSS with animations and modern layouts, JavaScript for interactivity, Bootstrap and responsive design. Also gained hands-on experience with WordPress — theme customisation, plugins, WPO and security — and measurement tools like Google Analytics and Google Tag Manager.',
          focus: ['Semantic HTML', 'Advanced CSS', 'JavaScript', 'WordPress', 'Bootstrap', 'Google Analytics', 'GTM'],
          logo: '/assets/thecorner.webp',
          grade: 'Grade: 9.90'
        },
        {
          degree: 'Master in E-Commerce & Digital Marketing Management',
          institution: 'Universitat de Barcelona',
          year: 'Sept. 2019 – Jul. 2020',
          description: "Postgraduate programme approved by the UB's postgraduate agency with a strategic and operational focus. I gained expertise in technical and on-page SEO, SEM, advanced web analytics, social media, email marketing, and e-commerce management. My final thesis — a full digital marketing plan for a private medical centre — was awarded 9.5. Taught by active professionals from leading industry companies.",
          focus: ['Technical SEO', 'SEM', 'Google Analytics', 'E-Commerce', 'Social Media', 'Email Marketing'],
          logo: '/assets/ub.webp',
          grade: 'Grade: 9.93'
        },
        {
          degree: 'Bachelor in Business Administration (ADE)',
          institution: 'Universitat de Barcelona',
          year: '2015 – 2019',
          description: 'University degree with a specialisation in Business Organisation and a European supplement. Four years of training in general management, business strategy, finance, marketing, and human resources — giving me the business perspective I now apply daily to digital product development. My final thesis on the implications of 5G technology in business was graded 9.',
          focus: ['Business strategy', 'Financial management', 'Marketing', 'Business Organisation', 'General management'],
          logo: '/assets/ub.webp'
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
          items: ['Technical SEO (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'CMS & E-commerce (WordPress/Drupal/Shopify/Magento)', 'SEO Audits']
        },
        {
          title: 'Management & Agile',
          items: ['Team leadership', 'Agile methodologies', 'Cross-functional coordination and data-informed decision-making', 'Sprint delivery', 'Product focus']
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
      showLess: 'Show less',
      categories: ['Digital Marketing', 'Artificial Intelligence', 'SEO', 'Web Analytics', 'UI/UX & Data', 'Frontend Development'],
      certs: [
        { name: 'University Micro-credential in Frontend Development', issuer: 'Universitat Politècnica de Catalunya', year: 2026, category: 'Frontend Development' },
        { name: 'AI-Based Shopping Ads', issuer: 'Google Skillshop', year: 2026, category: 'Digital Marketing' },
        { name: 'Google Ads Display Certification', issuer: 'Google Skillshop', year: 2026, category: 'Digital Marketing' },
        { name: 'Google Ads Measurement Certification', issuer: 'Google Skillshop', year: 2026, category: 'Digital Marketing' },
        { name: 'Google Ads Search Certification', issuer: 'Google Skillshop', year: 2026, category: 'Digital Marketing' },
        { name: 'Google Analytics Certification', issuer: 'Google Skillshop', year: 2026, category: 'Web Analytics' },
        { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Introduction to Subagents', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Introduction to Agent Skills', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Claude 101', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'Claude Code in Action', issuer: 'Anthropic', year: 2026, category: 'Artificial Intelligence' },
        { name: 'SEO Audits', issuer: 'LinkedIn', year: 2020, category: 'SEO' },
        { name: 'Competitive Analysis and Keyword Research', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'SEO Toolkit', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Keyword Research', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Technical SEO and On-Page SEO', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'SEO Fundamentals', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Advanced Google Analytics', issuer: 'Google', year: 2020, category: 'Web Analytics' },
        { name: 'Google Tag Manager Fundamentals', issuer: 'Google', year: 2020, category: 'Web Analytics' },
        { name: 'Google Analytics Individual Qualification', issuer: 'Google Skillshop', year: 2020, category: 'Web Analytics' },
        { name: 'Google Ads Apps Certification', issuer: 'Google Skillshop', year: 2020, category: 'Digital Marketing' },
        { name: 'Content Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Digital Marketing' },
        { name: 'Social Media Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Digital Marketing' },
        { name: 'Growth-Driven Design Certified', issuer: 'HubSpot Academy', year: 2020, category: 'UI/UX & Data' },
        { name: 'Inbound Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Digital Marketing' },
        { name: 'Inbound Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Digital Marketing' },
        { name: 'Email Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Digital Marketing' },
        { name: 'E-commerce Copywriting', issuer: 'LinkedIn', year: 2020, category: 'Digital Marketing' },
        { name: 'Instagram Marketing for Business', issuer: 'Udemy', year: 2020, category: 'Digital Marketing' },
        { name: '#TwitterFlightSchool — Video', issuer: 'Twitter', year: 2020, category: 'Digital Marketing' },
        { name: 'YouTube Music Certification', issuer: 'Google Skillshop', year: 2020, category: 'Digital Marketing' },
        { name: 'Advanced Adobe XD CC', issuer: 'LinkedIn', year: 2020, category: 'UI/UX & Data' },
        { name: 'Power BI and Excel — Data Analysis', issuer: 'Udemy', year: 2020, category: 'UI/UX & Data' },
        { name: 'Excel Online', issuer: 'Udemy', year: 2020, category: 'UI/UX & Data' }
      ]
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
          title: 'Desenvolupador Frontend',
          company: 'Barcelona Activa',
          period: 'nov. 2025 - actualitat',
          description: 'Lidero el desenvolupament tècnic i la maquetació de la plataforma de reptes lògics d\'IT Academy, un producte clau enfocat a potenciar l\'aprenentatge tècnic de la comunitat estudiantil. Col·laboro transversalment amb Backend i Product Owners per dissenyar i desplegar funcionalitats avançades, prioritzant el rendiment, l\'accessibilitat (WCAG) i la usabilitat. Aplico metodologies àgiles (Scrum) en sprints quinzenals i asseguro l\'escalabilitat a llarg termini de l\'ecosistema mitjançant refactoritzacions estratègiques, arquitectura neta i components reutilitzables d\'alta qualitat.',
          skills: ['React', 'TypeScript', 'Agile', 'Scrum', 'Git', 'Clean Code'],
          logo: '/assets/barcelonaactiva.webp'
        },
        {
          title: 'Desenvolupador Web Frontend Junior',
          company: 'Lite Solutions',
          period: 'set. 2024 - des. 2024',
          description: 'Especialitzat en el desenvolupament frontend de solucions e-commerce a mida. Responsable del manteniment evolutiu i l\'optimització de botigues online basades en WordPress i PrestaShop. Vaig implementar funcionalitats interactives avançades amb JavaScript ES6 i jQuery, vaig estructurar consultes eficients a bases de dades relacionals (MySQL) i vaig desenvolupar adaptacions lògiques amb PHP. Vaig assegurar una experiència d\'usuari fluida i multidispositiu mitjançant maquetació semàntica i disseny adaptatiu com a Bootstrap i CSS avançat, optimitzant plantilles i estenent mòduls del core tècnic.',
          skills: ['JavaScript', 'jQuery', 'WordPress', 'PrestaShop', 'Bootstrap', 'PHP', 'MySQL', 'Responsive Design'],
          logo: '/assets/litesolutions.webp'
        },
        {
          title: 'Search Engine Optimization Specialist',
          company: 'tbb Agency',
          period: 'gen. 2023 - jul. 2023',
          description: 'Direcció tècnica de l\'estratègia SEO i analítica web de més de 50 e-commerce i portals de gran envergadura construïts amb plataformes complexes (Magento, PrestaShop, Shopify, WordPress i Drupal). Vaig liderar un equip de 5 consultors SEO, coordinant auditories tècniques de rastreig, indexabilitat i integracions crítiques de dades. Vaig dissenyar i implementar arquitectures complexes de mesura d\'analítica web mitjançant Google Tag Manager, Google Analytics 4 i Search Console, transformant dades de comportament d\'usuari en insights de negoci que van millorar significativament la visibilitat orgànica de les marques.',
          skills: ['SEO Tècnic', 'Lideratge d\'Equips', 'Magento', 'PrestaShop', 'Shopify', 'WordPress', 'Google Analytics', 'Google Tag Manager'],
          logo: '/assets/logo-tbb.agency.webp'
        },
        {
          title: 'Tècnic en Posicionament Web (SEO) Junior',
          company: 'tbb Agency',
          period: 'gen. 2021 - des. 2022',
          description: 'Execució d\'auditories SEO on-page i off-page orientades a corregir problemes de velocitat de càrrega, enllaçat intern i indexació. Responsable de la monitorització del rendiment de cerques i de la correcta implementació tècnica d\'etiquetes semàntiques i metadades en múltiples gestors de contingut. Vaig configurar panells de control de mesura de trànsit essencials i vaig documentar informes de rendiment tècnic per guiar millores de visibilitat i optimització web.',
          skills: ['SEO', 'Google Search Console', 'Analítica Web', 'Optimització Web', 'E-commerce'],
          logo: '/assets/logo-tbb.agency.webp'
        }
      ]
    },
    education: {
      id: 'educacio',
      section: 'Educació',
      title: 'Formació i estudis',
      description: 'Formació tècnica en desenvolupament frontend combinada amb una base sòlida en negoci digital, màrqueting i e-commerce.',
      items: [
        {
          degree: 'Bootcamp Frontend (React)',
          institution: 'IT Academy · Barcelona Activa',
          year: 'mar. 2025 – gen. 2026',
          description: 'Programa intensiu acreditat amb Microcredencial Universitària per la UPC. Vaig desenvolupar aplicacions reals sprint a sprint: des de maquetació semàntica amb HTML i CSS fins a SPAs completes amb React 19 i TypeScript, consum d\'APIs REST, gestió de dades amb Supabase i autenticació. El projecte final, SEO Compass —plataforma col·laborativa de gestió SEO— va obtenir la nota màxima. Treball en equip amb Git i metodologies àgils durant tot el programa.',
          focus: ['React 19', 'TypeScript', 'Supabase', 'Git', 'APIs REST', 'Metodologies àgils'],
          logo: '/assets/itacademy.webp',
          grade: 'Projecte final: 10'
        },
        {
          degree: 'React: Hooks i MERN',
          institution: 'DevTalles',
          year: 'jun. 2024 – oct. 2024',
          description: 'Formació avançada en React modern dissenyada íntegrament amb Hooks i components funcionals. El curs aborda useState, useEffect, useContext, useReducer i hooks personalitzats, a més de routing amb React Router, gestió d\'estat global i construcció d\'aplicacions full-stack amb la pila MERN. Èmfasi en bones pràctiques, codi net i patrons professionals aplicats des del primer dia.',
          focus: ['React.js', 'Hooks', 'React Router', 'Context API', 'MERN', 'Clean Code'],
          logo: '/assets/devtalles-white-black.webp'
        },
        {
          degree: 'Confecció i Publicació de Pàgines Web (IFCD0110)',
          institution: 'The Corner Centre d\'Estudis',
          year: 'mar. 2024 – oct. 2024',
          description: 'Certificat de professionalitat oficial de 480 hores que va establir les bases tècniques del desenvolupament web. Vaig aprendre HTML semàntic per a SEO, CSS avançat amb animacions i layouts moderns, JavaScript per a la interactivitat, Bootstrap i disseny responsive. També vaig adquirir competències en WordPress —personalització de temes, plugins, WPO i seguretat— i en eines de mesura com Google Analytics i Google Tag Manager.',
          focus: ['HTML semàntic', 'CSS avançat', 'JavaScript', 'WordPress', 'Bootstrap', 'Google Analytics', 'GTM'],
          logo: '/assets/thecorner.webp',
          grade: 'Nota: 9,90'
        },
        {
          degree: 'Màster en Direcció d\'E-Commerce i Màrqueting Digital',
          institution: 'Universitat de Barcelona',
          year: 'set. 2019 – jul. 2020',
          description: 'Màster de formació permanent aprovat per l\'agència de postgrau de la UB amb enfocament estratègic i operatiu. Vaig adquirir domini en SEO tècnic i on-page, SEM, analítica web avançada, social media, email màrqueting i gestió d\'e-commerce. El treball de fi de màster, un pla de màrqueting digital complet per a un centre mèdic privat, va obtenir un 9,5. Professors en actiu d\'empreses líders del sector.',
          focus: ['SEO tècnic', 'SEM', 'Google Analytics', 'E-Commerce', 'Social Media', 'Email Màrqueting'],
          logo: '/assets/ub.webp',
          grade: 'Nota: 9,93'
        },
        {
          degree: 'Grau en Administració i Direcció d\'Empreses (ADE)',
          institution: 'Universitat de Barcelona',
          year: '2015 – 2019',
          description: 'Grau universitari amb menció en Organització d\'Empreses i suplement europeu. Quatre anys de formació en direcció general, estratègia empresarial, finances, màrqueting i recursos humans que em donen una visió de negoci sòlida aplicada avui al desenvolupament de producte digital. El treball de fi de grau, sobre les implicacions de la tecnologia 5G en el món empresarial, va ser qualificat amb un 9.',
          focus: ['Estratègia empresarial', 'Gestió financera', 'Màrqueting', 'Organització d\'Empreses', 'Direcció general'],
          logo: '/assets/ub.webp'
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
          items: ['SEO Tècnic (GSC)', 'Google Analytics 4', 'Google Tag Manager', 'CMS i E-commerce (WordPress/Drupal/Shopify/Magento)', 'Auditories SEO']
        },
        {
          title: 'Gestió i Agilitat',
          items: ['Lideratge d\'equips', 'Metodologies àgils', 'Coordinació transversal i decisions basades en dades', 'Lliurament per sprints', 'Enfocament de producte']
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
      showLess: 'Veure menys',
      categories: ['Màrqueting Digital', 'Intel·ligència Artificial', 'SEO', 'Analítica Web', 'UI/UX i Dades', 'Desenvolupament Web'],
      certs: [
        { name: 'Microcredencial Universitària en Frontend Development', issuer: 'Universitat Politècnica de Catalunya', year: 2026, category: 'Desenvolupament Web' },
        { name: 'Anuncis de Shopping Basats en IA', issuer: 'Google Skillshop', year: 2026, category: 'Màrqueting Digital' },
        { name: 'Google Ads Display Certification', issuer: 'Google Skillshop', year: 2026, category: 'Màrqueting Digital' },
        { name: 'Google Ads Measurement Certification', issuer: 'Google Skillshop', year: 2026, category: 'Màrqueting Digital' },
        { name: 'Google Ads Search Certification', issuer: 'Google Skillshop', year: 2026, category: 'Màrqueting Digital' },
        { name: 'Google Analytics Certification', issuer: 'Google Skillshop', year: 2026, category: 'Analítica Web' },
        { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Introduction to Subagents', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Introduction to Agent Skills', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Claude 101', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Claude Code in Action', issuer: 'Anthropic', year: 2026, category: 'Intel·ligència Artificial' },
        { name: 'Auditories SEO', issuer: 'LinkedIn', year: 2020, category: 'SEO' },
        { name: 'Anàlisi Competitiu i Recerca de Paraules Clau', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'SEO Toolkit', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Keyword Research', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'SEO Tècnic i SEO On Page', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Principis Fonamentals de SEO', issuer: 'Semrush', year: 2020, category: 'SEO' },
        { name: 'Google Analytics Avançat', issuer: 'Google', year: 2020, category: 'Analítica Web' },
        { name: 'Google Tag Manager Fundamentals', issuer: 'Google', year: 2020, category: 'Analítica Web' },
        { name: 'Google Analytics Individual Qualification', issuer: 'Google Skillshop', year: 2020, category: 'Analítica Web' },
        { name: 'Certificació en Aplicacions de Google Ads', issuer: 'Google Skillshop', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Content Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Social Media Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Growth-Driven Design Certified', issuer: 'HubSpot Academy', year: 2020, category: 'UI/UX i Dades' },
        { name: 'Inbound Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Inbound Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Email Marketing Certified', issuer: 'HubSpot Academy', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Copywriting per a E-commerce', issuer: 'LinkedIn', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Instagram Marketing for Business', issuer: 'Udemy', year: 2020, category: 'Màrqueting Digital' },
        { name: '#TwitterFlightSchool — Vídeo', issuer: 'Twitter', year: 2020, category: 'Màrqueting Digital' },
        { name: 'YouTube Music Certification', issuer: 'Google Skillshop', year: 2020, category: 'Màrqueting Digital' },
        { name: 'Adobe XD CC Avançat', issuer: 'LinkedIn', year: 2020, category: 'UI/UX i Dades' },
        { name: 'Power BI i Excel — Anàlisi de Dades', issuer: 'Udemy', year: 2020, category: 'UI/UX i Dades' },
        { name: 'Excel Online', issuer: 'Udemy', year: 2020, category: 'UI/UX i Dades' }
      ]
    }
  }
};
