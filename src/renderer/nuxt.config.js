/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'accounts',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    '@nuxt/postcss8',
  ],
  modules: [
    
  ],
  components: true,
  css: [
    '@/assets/css/main.css',
  ],
};
