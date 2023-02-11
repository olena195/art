import {defineNuxtConfig} from 'nuxt/config'

const icons = ['32', '128', '180', '192']

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  telemetry: false,
  // <link rel="icon" href="/path/to/favicon-128.png" sizes="128x128">
  app: {
    head: {
      link: [
        ...icons.map(s => {
          return ({rel: 'icon', href: `/favicon-${s}.png`, sizes: `${s}x${s}`});
        })
      ]
    }
  },

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
