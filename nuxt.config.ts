// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'BaseLink for your home and business',
      titleTemplate: '%s | BaseLink',
      meta: [
        { name: 'description', content: 'Home and Business services' },
        { name: 'keywords', content: 'cleaners, cctv installation, tv wall mounting' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
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
    '@dargmuesli/nuxt-cookie-control'
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  compatibilityDate: '2025-02-12',
})