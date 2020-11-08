// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#619647',
        secondary: '#2F4858',
        accent: '#A56A24',
        background: '#FFFFFF',
        topBar: '#FFFFFF',
        alternateBackground: '#eeeeee',
        card: '#fafafa',
      },
      dark: {
        primary: '#619647',
        secondary: '#2F4858',
        accent: '#A56A24',
        background: '#121212',
        topBar: '#1e1e1e',
        alternateBackground: '#272727',
        card: '#1e1e1e',
      },
    },
  },
})
