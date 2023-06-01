import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@fullpage/nuxt-fullpage",
    configKey: "@fullpage/nuxt-fullpage",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin.client"));
  }
});

export { module as default };
