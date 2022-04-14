export default function (context, inject) {
  inject('nuxt-fullpage', {})
  context.app['nuxt-fullpage'] = {}
}
