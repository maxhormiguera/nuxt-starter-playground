import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
  const carrot = {
    dark: false,
    colors: {
      'background': '#eeab66',
      'primary': '#fbb03b',
      'secondary': '#8967b3',
      'tertiary': '#334422',
      'surface': '#ffffff',
      'success': '#99cc22',
      'warning': '#6a041d',
      'error': '#330f0a',
    },
    variables: {
      'theme-overlay-multiplier': 1
    }
  }
  const grape = {
    dark: true,
    colors: {
      'background': '#330044',
      'primary': '#cceecc',
      'secondary': '#31511e',
      'tertiary': '#2b2b2b',
      'surface': '#ffffff',
      'on-surface': '#cceecc',
      'success': '#99cc22',
      'warning': '#992211',
      'error': '#ee66cc',
    },
  }
  const peanut = {
    dark: false,
    colors: {
      'background': '#eeffcc',
      'primary': '#dd6633',
      'secondary': '#330f0a',
      'tertiary': '#ddcc66',
      'surface': '#ffffff',
      'success': '#99cc22',
      'warning': '#992211',
      'error': '#ee2222',
    },
  }
  const watermelon = {
    dark: true,
    colors: {
      'background': '#ff1e00',
      'primary': '#e8f9fd',
      'secondary': '#59ce8f',
      'tertiary': '#000000',
      'surface': '#ffffff',
      'success': '#feec37',
      'warning': '#898121',
      'error': '#4c4c16',
    },
  }

  const vuetify= createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'carrot',
      themes: {
        carrot,
        grape,
        peanut,
        watermelon,
      },
      variations: {
        colors: ['primary', 'secondary', 'tertiary'],
        lighten: 4,
        darken: 4,
      },
    },
    defaults: {
      VRow: {
        style: [{margin: '0'}]
      }
    }


  })
  app.vueApp.use(vuetify)
})