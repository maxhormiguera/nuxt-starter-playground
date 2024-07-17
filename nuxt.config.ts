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
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
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
            path.resolve('./assets/style/main.styl')
          ]
        },
      },
    },
  },
  css: [
    `/node_modules/modern-normalize/modern-normalize.css`,
  ],
  eslint: {
    // options here
  }
})