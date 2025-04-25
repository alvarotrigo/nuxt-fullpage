import { defineNuxtPlugin } from '#app'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

export default defineNuxtPlugin((nuxtApp) => {
  // Only initialize fullpage.js after client-side hydration is complete
  nuxtApp.vueApp.use(VueFullPage)
  
  // Use the hook to ensure it works properly after hydration
  nuxtApp.hook('app:mounted', () => {
    // Ensure any components that need re-initialization after hydration can do so
    if (typeof document !== 'undefined') {
      // This is a simple way to trigger Vue to re-evaluate the fullpage component
      nuxtApp.vueApp.config.globalProperties.$forceUpdate
    }
  })
})
