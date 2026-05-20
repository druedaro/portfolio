import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default {
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: false
    }
  }
};
