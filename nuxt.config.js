const pkg = require('./package')
require('dotenv').config()
import axios from 'axios'

module.exports = {
  mode: 'universal',

  env: {
    apiUrl: process.env.NUXT_ENV_API_URL || 'http://localhost/wp-rest-api/wp-json/wp/v2'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700&amp;subset=latin-ext' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/browser.min.js' },
      { src: '/js/breakpoints.min.js' },
    ],
    bodyAttrs: {
      class: 'is-preload'
    },
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f56a6a' },

  /*
  ** Customize the default transition
  */
  transition: 'custom-bounce',

  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    // '@/assets/css/animate.css',
    // '@/assets/css/main.css',
    '@/assets/sass/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    html: {
      minify: {
        removeRedundantAttributes: false
      }
    },
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  generate: {
    routes: async function () {
      let pages = await axios.get(`http://localhost/wp-rest-api/wp-json/wp/v2/pages?_embed`);
      let posts = await axios.get(`http://localhost/wp-rest-api/wp-json/wp/v2/posts?_embed`);
      let pagesRoute = pages.data.map((page) => {
        return {
          route: `/${page.slug}`,
          payload: page
        }
      });
      let postsRoute = posts.data.map((post) => {
        return {
          route: `/blog/${post.slug}`,
          payload: post
        }
      });
      let allRoutes = pagesRoute.concat(postsRoute);
      return allRoutes;
    }
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },

  proxy: {
    '/api': {
      target: 'http://localhost/wp-rest-api/wp-json/wp/v2',
      pathRewrite: {
        '^/api' : '/',
        }
      }
  }

}
