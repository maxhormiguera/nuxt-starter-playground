// import this after install `@mdi/font` package
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/style/theme.styl'

export default defineNuxtPlugin((app) => {
  const vuetify= createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})