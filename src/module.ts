import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@fullpage/nuxt-fullpage',
    configKey: '@fullpage/nuxt-fullpage',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    // Ensure both the runtime directory and the vue-fullpage.js module are transpiled
    nuxt.options.build.transpile.push(runtimeDir, 'vue-fullpage.js')
    addPlugin(resolve(runtimeDir, 'plugin.client'))
  }
})
