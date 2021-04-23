import { Plugin } from 'vue'
import { Router } from 'vue-router'
import { useAuth } from './state'

interface AuthPluginOptions {
  router: Router,
  eventId?: string | number,
  loginRoute: string
}

const plugin: Plugin = function(app, options: AuthPluginOptions) {
  const { router, loginRoute } = options
  const { setEventId } = useAuth()

  if (options.eventId) {
    setEventId(options.eventId)
  }

  router.beforeEach(async (to, from, next) => {
    const { auth, refresh } = useAuth()

    if (to.meta.guest || to.meta.auth || auth.value) {
      if (to.meta.auth && auth.value) {
        return next('/')
      }
      next()
    } else {
      try {
        await refresh()
        next()
      } catch (e) {
        next({ name: loginRoute, query: { redirect: to.path }})
      }
    }
  })
}

export default plugin
export * from './state'
