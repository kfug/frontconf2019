import createMeta from './service/meta';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'FRONTEND CONFERENCE 2019',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      ...createMeta(),
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: `stylesheet`,
        href: `https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css`,
        integrity: `sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T`,
        crossorigin: `anonymous`,
      },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css?family=Offside&display=swap`,
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/touchicon.png',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: ['~assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  generate: {
    routes: [
        '/sponsors/yumemi',
        '/sponsors/ci',
        '/sponsors/smaregi',
        '/sponsors/impath',
        '/sponsors/tambourine',
      "/session/onoueyosuke",
      "/session/taguchiwataru",
      "/session/matsushitaeri",
      "/session/kojimadaiki",
      "/session/jimboyoshihide",
      "/session/suzukitakayuki",
      "/session/hamadamasanari",
      "/session/okitakanori",
      "/session/maedakeisuke",
      "/session/sakakibaramasahiko",
      "/session/hiranomasashi",
      "/session/yamashitakazuki",
      "/session/kirillvasiltsov",
      "/session/onishiyuji",
      "/session/conti",
      "/session/hanatanitakuma",
      "/session/okunokentaro",
      "/session/kawamatayuga",
      "/session/mikakane",


    ],
    fallback: true,
  },
  router:{
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
};
