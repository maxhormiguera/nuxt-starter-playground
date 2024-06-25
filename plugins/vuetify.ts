import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
  const carrot = {
    dark: false,
    colors: {
      background: '#eeab66',
      primary: '#fbb03b',
      secondary: '#442288',
      surface: '#334422',
      success: '#99cc22',
      warning: '#6a041d',
      error: '#330f0a',
    },

  }
  const grape = {
    dark: true,
    colors: {
      background: '#330044',
      primary: '#cceecc',
      secondary: '#99cc66',
      surface: '#2b2b2b',
      success: '#99cc22',
      warning: '#992211',
      error: '#ee66cc',
    }
  }
  const peanut = {
    dark: false,
    colors: {
      background: '#eeffcc',
      primary: '#dd6633',
      secondary: '#ddcc66',
      surface: '#330f0a',
      success: '#99cc22',
      warning: '#992211',
      error: '#ee2222',
    },

  }

  const vuetify= createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'grape',
      themes: {
        carrot,
        grape,
        peanut
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 1,
        darken: 1
      }
    }

  })
  app.vueApp.use(vuetify)
})