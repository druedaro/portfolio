import React, { useRef, useEffect } from 'react';

const technologies = [
  {
    name: 'React',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 400 400" className="h-7 w-7" aria-hidden="true">
        <rect width="400" height="400" rx="50" fill="#3178C6"/>
        <path d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.3-.3-31.7-.4-70-.4l-69.5.3v16.3zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8.1.5-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12.1-.8-20 5.5-20 16 0 3.2.5 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 40.9 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22.2 28-44.3 31.8-6.8 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4.2-.2 1.9-1.3 3.9-2.5l15.8-9.1 12.4-7.2 2.6 3.7c3.3 5.2 10.7 12.2 15 14.6 13.3 7 31.7 6 40.8-2.2 3.7-3.4 5.3-6.9 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.9-29.5-14.4-37.7-23-4.7-5.2-9-13.3-10.8-20.1-1.5-5.8-1.9-20.4-.6-26.1 4.4-20.4 19.7-34.4 41.8-38.4 7.2-1.3 23.8-.8 30.7.9z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 630 630" className="h-7 w-7" aria-hidden="true">
        <rect width="630" height="630" fill="#f7df1e"/>
        <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 37.94 30.45 19.4 0 31.66-7.6 31.66-37.16v-201.3h59.2v202.1c0 61.17-35.86 88.95-88.2 88.95-47.1 0-74.4-24.4-88.2-53.74z"/>
      </svg>
    ),
  },
  {
    name: 'Google Analytics',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M19.18 19.18H4.82V4.82h14.36v14.36z" fill="none"/>
        <path d="M6 18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4zm5 0c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v9zm5 0c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6z" fill="#E37400"/>
        <path d="M6 18c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4zm5 0c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v9zm5 0c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v6z" fill="#F4B400"/>
        <path d="M16 18h2v-6h-2v6zm-5 0h2V9h-2v9zM6 18h2v-4H6v4z" fill="#F4B400"/>
      </svg>
    ),
  },
  {
    name: 'Tag Manager',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#24B6F7">
        <path d="M21.4 11.6l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4zM12 17.2L6.8 12 12 6.8l5.2 5.2-5.2 5.2z"/>
      </svg>
    ),
  },
  {
    name: 'Magento',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#EE672A">
        <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm6 12.3l-6 3.4-6-3.4V8.7l6-3.4 6 3.4v5.6z"/>
        <path d="M12 7.5L7.5 10v4.5l4.5 2.5 4.5-2.5V10L12 7.5z"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#95BF47">
        <path d="M19.5 7.5L12 3L4.5 7.5v9L12 21l7.5-4.5v-9zM12 4.5l6 3.6L12 11.7l-6-3.6 6-3.6zM5.7 8.5L11.1 11.7v7l-5.4-3.2v-5.5zm12.6 5.5l-5.4 3.2v-7l5.4-3.2v7z"/>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#21759B">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
      </svg>
    ),
  },
  {
    name: 'Drupal',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#0077C0">
        <path d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1018.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 01-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 01-3.158-3.159 3.291 3.291 0 01.787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 01.792 2.093A3.158 3.158 0 0112 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253"/>
      </svg>
    ),
  },
  {
    name: 'Teamwork',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    svg: (
      <svg viewBox="0 0 54 33" className="h-5 w-auto" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#06B6D4"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.404-.545-.547-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 256 289" className="h-7 w-7" aria-hidden="true">
        <path d="M128 288.4c-3.5 0-6.8-.9-9.8-2.6L68.5 257c-4.7-2.6-2.4-3.5-0.9-4 9.7-3.4 11.7-4.2 22-10.1.9-.5 2.2-.3 3.2.3l38.7 23c1.2.6 2.8.6 3.8 0l150.9-87.1c1.2-.7 2-2 2-3.4V102.1c0-1.5-.8-2.8-2-3.5L135.4 11.6c-1.2-.7-2.7-.7-3.8 0L131.3 11.5 35.8 87.1c-1.2.7-2 2.1-2 3.5v174.2c0 1.4.8 2.7 2 3.4l27.7 16c15 7.5 24.2-1.3 24.2-10.2V109.2c0-1.6 1.3-2.9 2.9-2.9h12.4c1.5 0 2.9 1.3 2.9 2.9v164.8c0 20-10.9 31.4-29.9 31.4-5.8 0-10.4 0-23.2-6.3L26 282.8C10.2 273.8 0 257.5 0 239.8V65.6C0 47.9 10.2 31.6 26 22.6L115.7 1.8c15.3-8.6 35.9-8.6 51.1 0L256 43.6c15.8 9 26 25.3 26 43V239.8c0 17.7-10.2 34-26 43l-89.7 51.8c-3 1.7-6.3 2.6-9.8 2.6l-2.5-.2z" fill="#539E43"/>
        <path d="M160.7 163.5c-39.4 0-47.7-18.1-47.7-33.2 0-1.6 1.3-2.9 2.9-2.9h12.6c1.4 0 2.7 1 2.9 2.4 2 13.5 7.9 20.3 29.3 20.3 18 0 25.7-4.1 25.7-13.6 0-5.5-2.2-9.6-30.2-12.3-23.4-2.3-37.9-7.5-37.9-26.2 0-17.3 14.6-27.6 39-27.6 27.4 0 40.9 9.5 42.6 30 .1.8-.2 1.6-.7 2.2-.5.6-1.3.9-2.1.9h-12.7c-1.3 0-2.5-.9-2.8-2.2-2.7-11.9-9.2-15.7-24.3-15.7-17.9 0-20 6.2-20 10.9 0 5.6 2.5 7.3 29.3 10.5 26.5 3.2 38.7 7.7 38.7 27.8 0 18.6-15.5 29.7-42.6 29.7z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Vitest',
    svg: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path d="M16 2L2 28h28L16 2z" fill="none"/>
        <path d="M16 5.5l-11.5 20h23L16 5.5z" fill="#729B1B"/>
        <path d="M16 5.5L7.5 21h8.5l-4.5-7.8 4.5 0z" fill="#ACD33B"/>
        <path d="M16 5.5l8.5 15.5H16V13.2L20.5 21H24.5z" fill="#729B1B"/>
        <path d="M4.5 25.5L16 5.5l11.5 20H4.5z" fill="none" stroke="#ACD33B" strokeWidth=".5"/>
      </svg>
    ),
  },
  {
    name: 'SASS',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12c6.628 0 12-5.373 12-12S18.628 0 12 0zm3.361 14.464c-.14.668-.496 1.243-1.002 1.61-.506.366-1.158.53-1.91.487-.734-.042-1.332-.3-1.78-.77-.447-.47-.648-1.07-.595-1.79.05-.62.283-1.175.69-1.65a3.58 3.58 0 011.6-.995 3.98 3.98 0 01-.172-.698c-.135-.83.08-1.566.596-2.06.46-.445 1.097-.65 1.854-.6.752.05 1.368.35 1.784.866.372.458.53 1.033.46 1.65a2.43 2.43 0 01-.625 1.38c.47.41.735.98.695 1.594v.004a2.6 2.6 0 01-.595 1.972zm-5.69.63c.37.53.91.875 1.56 1 .65.123 1.3-.01 1.81-.37a1.9 1.9 0 00.75-1.207c.05-.434-.035-.84-.248-1.17-.21-.33-.51-.567-.895-.7a.47.47 0 01-.2-.07c-.76.433-1.45.505-2.05.215-.37-.18-.61-.47-.71-.848-.1-.38-.02-.756.235-1.06.35-.42.933-.637 1.69-.625a3.17 3.17 0 01.55.055 3.79 3.79 0 00-.29-.99c-.29-.6-.73-.97-1.29-1.07-.56-.1-1.07.12-1.43.61-.29.39-.41.87-.35 1.38.06.45.25.87.56 1.22a3.65 3.65 0 00-.67 1.66c-.08.683.12 1.32.48 1.77l.49-.8z" fill="#CC6699"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 452 520" className="h-7 w-7" aria-hidden="true">
        <path d="M41.4 0h369.2l-33.6 374.4L225.8 420 74.5 374.3 41.4 0z" fill="#264de4"/>
        <path d="M225.8 389.7l120-33.2 28.7-320.3H225.8v353.5z" fill="#2965f1"/>
        <path d="M225.8 208.7h60.2l4.2-47.1H225.8v-45.9h114.7l-1.2 13-12.2 137.1H225.8v-57.1z" fill="#fff"/>
        <path d="M225.8 313.4l-.5.1-50.7-13.7-3.2-36.2H125.6l6.4 71.4 93.7 26 .1-.1v-47.5z" fill="#ebebeb"/>
        <path d="M284.2 261.9l-5.7 64.3-52.9 14.7v47.5l93.9-26 .7-7.4 8.1-90.9-44.1 1.8zM225.8 115.7v45.9h-106.9l-1-10.7-2-22.3-1-12.9h110.9z" fill="#ebebeb"/>
        <path d="M225.8 208.7v57.1H169l-1.1-12.1-2-22.7-1.1-22.3h60.9z" fill="#ebebeb"/>
      </svg>
    ),
  }
];

export default function TechCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef<number | null>(null);

  const speed = 1.2;

  const animate = () => {
    if (!isDragging.current) {
      currentTranslate.current -= speed;
    }
    
    if (trackRef.current && setRef.current) {
      const singleSetWidth = setRef.current.offsetWidth;
      
      if (Math.abs(currentTranslate.current) >= singleSetWidth) {
        currentTranslate.current += singleSetWidth;
      }
      if (currentTranslate.current > 0) {
        currentTranslate.current -= singleSetWidth;
      }

      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    prevTranslate.current = currentTranslate.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.pageX - startX.current;
    currentTranslate.current = prevTranslate.current + deltaX;
  };

  const handlePointerUpOrLeave = () => {
    isDragging.current = false;
  };

  const TechnologySet = ({ isRef = false }: { isRef?: boolean }) => (
    <div ref={isRef ? setRef : null} className="flex w-max gap-8 pr-8">
      {technologies.map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="group flex items-center gap-3.5 rounded-full border border-slate-200/80 bg-white/60 px-6 py-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-slate-800/60 dark:bg-slate-900/50 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 select-none"
        >
          <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 pointer-events-none">
            {tech.svg}
          </span>
          <span className="whitespace-nowrap text-base font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white pointer-events-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div 
      className="relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrLeave}
      onPointerLeave={handlePointerUpOrLeave}
      onPointerCancel={handlePointerUpOrLeave}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />

      <div ref={trackRef} className="flex w-max will-change-transform">
        <TechnologySet isRef />
        <TechnologySet />
        <TechnologySet />
      </div>
    </div>
  );
}
