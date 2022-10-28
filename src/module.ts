import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@fullpage/nuxt-fullpage',
    configKey: '@fullpage/nuxt-fullpage',
    compatibility: {
      nuxt: '^3.0.0-rc.12'
    }
  },
  setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin.client'))
  }
})
