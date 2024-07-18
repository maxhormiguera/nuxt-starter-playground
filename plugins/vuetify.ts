import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
  const carrot = {
    dark: false,
    colors: {
      'background': '#eeab66',
      'primary': '#fbb03b',
      'secondary': '#442288',
      'surface': '#334422',
      'surface-light': 'color-mix(in srgb, #334422, #fff 60%)',
      'success': '#99cc22',
      'warning': '#6a041d',
      'error': '#330f0a',
    },
    variables: {
      'border-color': '#000000',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 0.6,
      'medium-emphasis-opacity': 0.4,
      'disabled-opacity': 0.,
      'idle-opacity': 0.04,
      'hover-opacity': 0.01,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.12,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#ffffff',
      'theme-code': '#f5f5f5',
      'theme-on-code': '#000000',
    }
  }
  const grape = {
    dark: true,
    colors: {
      'background': '#330044',
      'primary': '#cceecc',
      'secondary': '#99cc66',
      'surface': '#2b2b2b',
      'on-surface': '#cceecc',
      'success': '#99cc22',
      'warning': '#992211',
      'error': '#ee66cc',
    },
    variables: {
      'border-color': '#000000',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 0.87,
      'medium-emphasis-opacity': 0.60,
      'overlay-multiplier': 1,
      'disabled-opacity': 0.38,
      'idle-opacity': 0.04,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.12,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#ffffff',
      'theme-code': '#f5f5f5',
      'theme-on-code': '#000000',
    }
  }
  const peanut = {
    dark: false,
    colors: {
      'background': '#eeffcc',
      'primary': '#dd6633',
      'secondary': '#330f0a',
      'surface': '#ddcc66',
      'success': '#99cc22',
      'warning': '#992211',
      'error': '#ee2222',
    },
  }

  const vuetify= createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'carrot',
      themes: {
        carrot,
        grape,
        peanut
      },
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 1,
        darken: 2,
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