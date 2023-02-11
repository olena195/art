import {defineNuxtConfig} from 'nuxt/config'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  telemetry: false,


  css: ['assets/global.css'],

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@nuxt/content',
    'nuxt-windicss',
  ],
})
