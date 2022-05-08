import 'dotenv/config'
import i18n from './config/i18n.js'

export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

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
    '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    'bootstrap-vue/nuxt',
    '@nuxtjs/sentry',
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'http://localhost:3000',
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
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    }
  }
}
