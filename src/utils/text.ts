/**
 * Utility to dynamically format standard markdown markers inside text strings.
 * Converts **text** to <strong>text</strong> and `code` to <code class="...">code</code>.
 */
export const formatDescription = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-xs font-mono font-medium text-red-600 dark:text-red-400">$1</code>');
};

/**
 * Returns the official authority URL for a given company name.
 */
export const getCompanyLink = (name: string): string | null => {
  const normalized = name.toLowerCase();
  if (normalized.includes('barcelona activa')) return 'https://www.barcelonactiva.cat/';
  if (normalized.includes('lite solutions')) return 'https://litesolutions.es/';
  if (normalized.includes('tbb agency') || normalized.includes('tbb.agency')) return 'https://tbb.agency/';
  return null;
};

/**
 * Returns the official authority URL for a given educational institution.
 */
export const getInstitutionLink = (name: string): string | null => {
  const normalized = name.toLowerCase();
  if (normalized.includes('it academy') || normalized.includes('barcelona activa')) return 'https://www.barcelonactiva.cat/itacademy';
  if (normalized.includes('devtalles')) return 'https://devtalles.com/';
  if (normalized.includes('the corner')) return 'https://thecorner.es/';
  if (normalized.includes('barcelona')) return 'https://www.ub.edu/';
  if (normalized.includes('catalunya') || normalized.includes('upc')) return 'https://www.upc.edu/';
  return null;
};
