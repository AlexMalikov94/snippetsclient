import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Snippets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
    
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap"}
    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  '~/assets/styles/components/app.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    
      strategies: {
        local: {
          endpoints: {
          login:{
            url: '/auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },
           logout: {
            url: '/auth/signout',
            method: 'post'
          }
        }
      }
   }
  },
   axios: {
   baseURL: 'http://snippetsapi.test/api'
  },

  /*
  ** Nuxt.js modules
  */
  //modules: [
  //],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
   },
    extend(config, ctx) {
    }
  }
}
