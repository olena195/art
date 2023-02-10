import {defineNuxtConfig} from 'nuxt/config'
// import ElementPlus from 'unplugin-element-plus/vite'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  telemetry: false,

  // css
  // css: ['~/assets/scss/index.scss'],


  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@nuxt/content',
    '@element-plus/nuxt',
  ],
  elementPlus: {
    // imports: ['useLocale'],
    injectionID: {prefix: 100, current: 1},
    noStylesComponents: [
      'el-card',
      'el-menu-item',
    ]
  }
})
