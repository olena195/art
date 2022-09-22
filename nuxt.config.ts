import {defineNuxtConfig} from 'nuxt/config'
import ElementPlus from 'unplugin-element-plus/vite'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  telemetry: false,

  // css
  css: ['~/assets/scss/index.scss'],

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  vite: {
    plugins: [ElementPlus()],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@nuxt/content',
  ],

  // auto import components
  components: true,
})
