import { useState, useRef, useEffect } from 'react';

interface ReadMoreProps {
  html: string;
  showMoreLabel: string;
  showLessLabel: string;
  maskBgClass?: string; // e.g. "from-slate-50/90 dark:from-slate-950/90"
}

export default function ReadMore({
  html,
  showMoreLabel,
  showLessLabel,
  maskBgClass = 'from-slate-50 dark:from-slate-950'
}: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Re-calculate overflow if HTML changes (e.g. language switch)
  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      // 84px matches our collapsed max-height of max-h-[84px] (about 3 lines of text)
      setIsOverflowing(element.scrollHeight > 84);
    }
  }, [html]);

  return (
    <div className="space-y-2">
      <div className="relative">
        <div
          ref={contentRef}
          style={{ maxHeight: isExpanded ? '1000px' : '84px' }}
          className="overflow-hidden transition-all duration-500 ease-in-out text-slate-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed lg:!max-h-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {isOverflowing && !isExpanded && (
          <div className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t ${maskBgClass} to-transparent pointer-events-none transition-opacity duration-300 lg:hidden`} />
        )}
      </div>

      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          className="text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-600 dark:hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:rounded-sm transition-colors py-1 inline-flex items-center gap-1.5 lg:hidden"
        >
          {isExpanded ? (
            <>
              {showLessLabel}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              {showMoreLabel}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
}
