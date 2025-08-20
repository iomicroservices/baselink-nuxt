// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { //This method does not allow you to provide reactive data. We recommend using useHead() in app.vue. It's good practice to set tags here that won't change such as your site title default, language and favicon.
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Domestic and commercial property services in London', // default fallback title
      titleTemplate: '%s | BaseLink',
      meta: [
        { name: 'description', content: 'Home and Business services' },
        { name: 'keywords', content: 'cleaners, cctv installation, tv wall mounting' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_TOKEN: process.env.DATABASE_TOKEN,
    DATABASE_BASE_ID: process.env.DATABASE_BASE_ID,
    DATABASE_TABLE_ID: process.env.DATABASE_TABLE_ID,
    DATABASE_APPLICANTS_TABLE: process.env.DATABASE_APPLICANTS_TABLE,
  },


  sitemap: {
    strictNuxtContentPaths: true,
  },

  site: {
    url: 'https://www.baselink.uk',
    identity: {
      type: 'Organization',
    },
    twitter: '@baselinkuk',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        // Add your location routes here
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxthq/studio',
    '@nuxtjs/sitemap',
    '@nuxt/ui',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/supabase',
  ],

  supabase: {
    redirect: false,
  },

  socialShare: {
    baseUrl: 'https://baselink.uk',
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  compatibilityDate: '2025-02-12',
})