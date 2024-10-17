// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@vueUse/nuxt',
    (_options:any, nuxt:any) => {
      nuxt.hooks.hook('vite:extendConfig', (config:any) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt'
  ],
  typescript: { shim: false },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            path.resolve('./assets/styleResources/_variables.styl'),
            path.resolve('./assets/styleResources/_mixins.styl'),
          ]
        },
      },
    },
  },
  css: [
    `/node_modules/modern-normalize/modern-normalize.css`,
    '/assets/style/main.styl'
  ],
  eslint: {
    // options here
  },
  compatibilityDate: '2024-10-17'
})