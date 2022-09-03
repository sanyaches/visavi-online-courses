import 'dotenv/config'
import i18n from './config/i18n.js'

export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  env: {
    baseUrl: process.env.BASE_URL,
    COMETCHAT_APP_ID: process.env.COMETCHAT_APP_ID,
    COMETCHAT_AUTH_KEY: process.env.COMETCHAT_AUTH_KEY,
    COMETCHAT_REGION: process.env.COMETCHAT_REGION,
    COMETCHAT_WIDGET_ID: process.env.COMETCHAT_WIDGET_ID,
    COMETCHAT_ADMIN_WIDGET_ID: process.env.COMETCHAT_ADMIN_WIDGET_ID,
    COMETCHAT_ADMIN_AUTH_KEY: process.env.COMETCHAT_ADMIN_AUTH_KEY
  },

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head () {
    let i18nHead
    if (this.$nuxtI18nHead) {
      i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    }

    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: i18nHead.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
        {
          property: 'og:url',
          content: `${process.env.BASE_URL}`
        },
        {
          property: 'og:site_name',
          content: 'Vikosto'
        },
        {
          property: 'og:image',
          content: `${process.env.BASE_URL}/favicon-96x96.png`
        },
        {
          property: 'og:image:secure_url',
          content: `${process.env.BASE_URL}/favicon-96x96.png`
        },
        {
          property: 'og:image:type',
          content: 'image/png'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/apple-icon-57x57.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-icon-60x60.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-icon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-icon-76x76.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-icon-114x114.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-icon-120x120.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/apple-icon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-icon-152x152.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-icon-180x180.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-icon-192x192.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500;700&family=Cormorant+SC:wght@500;700&family=Kaisei+Decol:wght@500;700&family=Raleway:wght@400;500;600;700&family=Zen+Antique&display=swap'
        },
        ...i18nHead.link
      ],
      script: [
        {
          defer: true,
          src: 'https://widget-js.cometchat.io/v3/cometchatwidget.js'
        }
      ]
    }
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vue-markdown.js', mode: 'client' },
    { src: '~/plugins/anchor-scroll.js', mode: 'client' },
    {
      src: '~plugins/metrika.js',
      ssr: false
    },
    {
      src: '~plugins/light-gallery.js',
      ssr: false
    }
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    'cookie-universal-nuxt',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: process.env.BASE_URL,
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
          { code: 'ru', iso: 'ru-RU', file: 'ru.js', dir: 'ltr' }
        ],
        langDir: './locales/',
        defaultLocale: 'ru',
        vueI18n: i18n,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root'
        }
      }
    ]
  ],

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  /*
  ** For deployment you might want to edit host and port
  */
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  sitemap: {
    // config
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/profile', '/admin/*', '/admin', '/homework-discussion', '/success-payment', '/error-payment'],
    cacheTime: 1000 * 60 * 1440,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    watch: ['api']
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    }
  },

  fontawesome: {
    component: 'FontAwesomeIcon',
    icons: {
      solid: [
        'faCaretDown', 'faCaretLeft', 'faCaretRight', 'faCommentDots',
        'faCaretUp', 'faFileArrowDown', 'faClock', 'faScroll', 'faCirclePlay',
        'faArrowTrendUp', 'faXmark', 'faPlus', 'faUser', 'faCheck', 'faKey',
        'faStar', 'faClipboardList', 'faMagnifyingGlassPlus'
      ],
      regular: [
        'faClock', 'faMoneyBill1', 'faEye',
        'faShareFromSquare', 'faStar', 'faCommentDots',
        'faBarChart', 'faChartBar'
      ],
      light: [],
      duotone: [],
      brands: ['faInstagram', 'faTelegram']
    }
  }
}
