export default defineNuxtConfig({
  css: ['~/assets/css/landing.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },

      meta: [
        { charset: 'utf-8' }
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon.png?v=3' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=3' }
      ],

      script: [
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXW9RVRL');
          `,
          tagPosition: 'head'
        }
      ],

      noscript: [
        {
          innerHTML: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW9RVRL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          tagPosition: 'bodyOpen'
        }
      ]
    }
  }
})