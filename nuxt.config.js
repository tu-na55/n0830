import colors from 'vuetify/es5/util/colors'
// const path = require('path')
// import { Configuration as config } from '@nuxt/types'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  // mode: 'spa',
  srcDir: 'src/',
  // mv assets components layouts pages plugins static store middleware src/

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: 3000,
    // host: '0.0.0.0',
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/app.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/vuetify', mode: 'client' },
    // { src: '@/plugins/moment', mode: 'client' },
    // { src: '@/plugins/lodash', mode: 'client' },
    // {src: '@/plugins/vee-validate', mode: 'server'},
    // { src: '@/plugins/filterPlugins', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  loaders: {
    ts: {
      silent: true,
    },
    tsx: {
      silent: true,
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // 'lodash',
    // 'moment',
    // 'vee-validate',
    'nuxt-clipboard2',
    'nuxt-fontawesome',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8000',
    // proxy: true,
  },
  // proxy: {
  //   '/api': 'http://api:8001',
  // },
  manifest: {
    name: 'nuxt-app',
    short_name: 'nuxt-app',
    // title: 'nuxt-title',
    lang: 'ja',
    display: 'standalone',
    // display: 'minimal-ui',

    start_url: '/',
    // start_url: 'index.html',
    // start_url: '/dev',
    // start_url: '/?mode=pwa',   // アイコンから起動した時のURL

    // プッシュ通知用
    // gcm_sender_id: 'XXX',  // Push7の設定を追記
    // gcm_user_visible_only: true,     // Push7の設定を追記

    // theme_color: '#ff4a93', // アプリケーションの既定のテーマ色を定義
    // background_color: '#ffdce6',
    background_color: '#ef6530',
    icons: [
      {
        src: 'icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: 'icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.red.darken3,
          accent: colors.grey.darken4,
          secondary: colors.amber.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          // target: 'node',
          // externals: nodeModules,

          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
      // config.externals: nodeModules
      config.node = {
        //   child_process: 'empty',
        //   dns: 'empty',
        //   fs: 'empty',
        //   net: 'empty',
        //   tls: 'empty',
        fsevents: 'empty',
      }
    },
  },

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  // transpile: ['vee-validate/dist/rules'],
  // postcss-preset-env: {
  //   // Doc: https://github.com/postcss/autoprefixer
  //   autoprefixer: { grid: true }
  // },

  watchers: {
    webpack: {
      poll: true,
    },
  },

  // moment: {
  //   locales: ['ja'],
  // },
}
