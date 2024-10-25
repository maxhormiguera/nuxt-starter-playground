import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
  const themeVariables = {
    'theme-overlay-multiplier': 1
  }
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
    variables: themeVariables
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
    variables: themeVariables
  }
  const peanut = {
    dark: false,
    colors: {
      'background': '#eeffcc',
      'primary': '#dd6633',
      'secondary': '#fff0d1',
      'tertiary': '#aab396',
      'surface': '#ffffff',
      'success': '#99cc22',
      'warning': '#330f0a',
      'error': '#ee2222',
    },
    variables: themeVariables
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
    variables: themeVariables
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