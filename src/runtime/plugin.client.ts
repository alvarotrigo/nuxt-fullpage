import { defineNuxtPlugin } from '#app'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFullPage);
})
