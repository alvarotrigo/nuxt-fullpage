import { Module } from '@nuxt/types'
const path = require('path')

export interface ModuleOptions {}

const CONFIG_KEY = 'nuxt-fullpage'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-fullpage'],
    ...moduleOptions
  }

  const runtimeDir = path.resolve(__dirname, 'runtime')
  this.nuxt.options.alias['~nuxt-fullpage'] = runtimeDir
  this.nuxt.options.build.transpile.push(runtimeDir)

  this.addPlugin({
    src: path.resolve(runtimeDir, 'plugin.mjs'),
    fileName: 'nuxt-fullpage.js',
    options,
  })
}

;(nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig {
    [CONFIG_KEY]: ModuleOptions
  } // Nuxt 2.14+
  interface Configuration {
    [CONFIG_KEY]: ModuleOptions
  } // Nuxt 2.9 - 2.13
  interface Context {
    ['$nuxt-fullpage']: {}
  }
}

export default nuxtModule
