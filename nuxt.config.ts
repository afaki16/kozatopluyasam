export default defineNuxtConfig({
  css: ['~/assets/css/landing.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      meta: [{ charset: 'utf-8' }],
    },
  },
})