import { computed, ExtractPropTypes, defineAsyncComponent } from 'vue'

export const LINK_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-link.vue')),
}

export const LINK_LOOKS: any = {
  current: 'text-current hover:opacity-70 active:opacity-50',
  black: 'text-black hover:text-gray-600 active:text-gray-600',
  dark: 'text-gray-500 hover:text-gray-400 active:text-gray-600',
  white: 'text-gray-100 hover:text-gray-300 active:text-gray-400',
  primary: 'text-primary-500 hover:text-primary-400 active:text-primary-600',
  success: 'text-green-500 hover:text-green-400 active:text-green-600',
  destructive: 'text-red-500 hover:text-red-400 active:text-red-600',
  info: 'text-blue-500 hover:text-blue-400 active:text-blue-600',
  warning: 'text-yellow-500 hover:text-yellow-400 active:text-yellow-600',
}

export const LINK_PROPS = {
  to: {
    type: Object,
    default: undefined
  },
  href: {
    type: String,
    default: undefined
  },
  look: {
    type: String,
    default: 'current'
  },
  weight: {
    type: String,
    default: 'semibold'
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof LINK_PROPS> = params

  const proxyLook = computed(() => {
    return LINK_LOOKS[props.look] || props.look
  })

  return {
    proxyLook
  }
}

const Link = LINK_THEMES.main

export {
  Link,
  setup
}
