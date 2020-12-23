export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Publish to github pages (https://fr.nuxtjs.org/faq/github-pages/)
  mode: 'spa',
  router: {
     base: '/buzzer/'
   },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'buzzer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTHDOMAIN,
          databaseURL: process.env.DATABASEURL,
          projectId: process.env.PROJECTID,
          storageBucket: process.env.STORAGEBUCKET,
          messagingSenderId: process.env.MESSAGINGSENDERID,
          appId: process.env.APPID,
          measurementId: process.env.MEASUREMENTID
        },
        services: {
          database: true,
        },
      }
    ],
    ['@nuxtjs/axios']
  ],


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
  
}
