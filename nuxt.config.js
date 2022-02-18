export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bintang Pertiwi School',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },

      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/@egjs/flicking/dist/flicking.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/@egjs/flicking/dist/flicking-inline.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js' },
      { src: 'https://use.fontawesome.com/165d74492f.js' },
      { src: 'https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.jss' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js' },
    ]
  },

  generate: {
    fallback: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.tkbintangpertiwi.com/api/v1/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
