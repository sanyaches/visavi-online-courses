import 'dotenv/config'
import i18n from './config/i18n.js'

export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  env: {
    baseUrl: process.env.BASE_URL
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
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500;700&family=Cormorant+SC:wght@500;700&family=Kaisei+Decol:wght@500;700&family=Raleway:wght@400;500;600;700&family=Zen+Antique&display=swap'
        },
        ...i18nHead.link
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
    { src: '~/plugins/vue-markdown.js', mode: 'client' }
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
    // '@nuxtjs/sentry',
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
        'faArrowTrendUp', 'faXmark', 'faPlus', 'faUser', 'faCheck', 'faKey'
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
