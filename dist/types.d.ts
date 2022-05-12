
import { ModuleOptions, ModuleHooks } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['@fullpage/nuxt-fullpage']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['@fullpage/nuxt-fullpage']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}


export { default } from './module'
