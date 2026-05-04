export default defineNuxtConfig({
  css: ['~/assets/css/landing.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      meta: [{ charset: 'utf-8' }],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png?v=2' }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-NLD655BP4D'
        },
        {
          type: 'text/javascript',
          textContent: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NLD655BP4D');
          `
        }
      ]
    }
  }
})