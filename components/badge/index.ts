import { computed, ExtractPropTypes } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../plugins/theme'
import { ROUNDED } from '../utils'

const { createThemeComponent } = useTheme()

export const BADGE_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-badge.vue')),
}

export const BADGE_LOOKS: any = {
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100',
  secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100',
  success: 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100',
  destructive: 'bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100',
  warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100',
}

export const BADGE_SIZES: any = {
  sm: 'px-2.5 leading-5 text-xs font-medium',
  md: 'px-3 leading-6 text-xs font-medium',
  lg: 'px-3.5 leading-7 font-medium',
}

export const BADGE_PROPS = {
  rounded: {
    type: String,
    default: 'full'
  },
  look: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof BADGE_PROPS> = params

  const proxyLook = computed(() => {
    return BADGE_LOOKS[props.look] || props.look
  })

  const proxySize = computed(() => {
    return BADGE_SIZES[props.size] || props.size
  })

  const proxyRounded = computed(() => {
    return ROUNDED[props.rounded] || props.rounded
  })

  return {
    proxyLook,
    proxySize,
    proxyRounded
  }
}

const Badge = createThemeComponent(BADGE_THEMES)

export {
  Badge,
  setup
}
