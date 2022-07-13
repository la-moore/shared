import { computed, ExtractPropTypes } from 'vue'
import { defineComponent } from '@vue/runtime-core'
// import { useTheme } from '../../plugins/theme'
import get from 'lodash/get'
import { ROUNDED, JUSTIFY } from '../utils'

// const { createThemeComponent } = useTheme()

export const BUTTON_THEMES: any = {
  main: defineComponent(() => import('./base-button.vue')),
}

export const BUTTON_LOOKS_SOLID: any = {
  white: 'text-gray-400 bg-white hover:bg-gray-100 active:bg-gray-200 focus:text-gray-600',
  dark: 'text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-700 focus:text-gray-200',
  disabled: 'text-gray-100 bg-gray-400 pointer-events-none',
  primary: 'text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-700 focus:shadow-outline-primary',
  secondary: 'border border-transparent text-white bg-gray-600 focus:border-gray-700 active:bg-gray-700 focus:shadow-outline-primary',
  success: 'text-white bg-green-600 hover:bg-green-700 active:bg-green-700 focus:shadow-outline-green',
  destructive: 'text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:shadow-outline-red',
  info: 'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 focus:shadow-outline-blue',
}

export const BUTTON_LOOKS_GHOST: any = {
  white: 'text-gray-600 bg-transparent hover:text-gray-700 hover:bg-gray-200 hover:bg-opacity-50 active:bg-gray-300',
  primary: 'text-primary-600 bg-primary-100 hover:text-primary-700 hover:bg-primary-200 active:bg-primary-300',
  secondary: 'text-gray-600 bg-gray-100 hover:text-gray-700 hover:bg-gray-200 active:bg-gray-300',
  success: 'text-green-600 bg-green-100 bg-opacity-50 hover:text-green-700 hover:bg-green-200 active:bg-green-300 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 dark:hover:text-green-100',
  destructive: 'text-red-600 bg-red-100 bg-opacity-50 hover:text-red-700 hover:bg-red-200 active:bg-red-300 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 dark:hover:text-red-100',
  info: 'text-blue-600 bg-blue-100 bg-opacity-50 hover:text-blue-700 hover:bg-blue-200 active:bg-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-100',
}

export const BUTTON_LOOKS_LINK: any = {
  current: 'text-current hover:opacity-70 active:opacity-50',
  white: 'text-gray-200 hover:text-gray-100 active:text-gray-300',
  dark: 'text-gray-600 hover:text-gray-500 active:text-gray-700',
  primary: 'text-primary-600 hover:text-primary-500 active:text-primary-700',
  success: 'text-green-600 hover:text-green-500 active:text-green-700',
  destructive: 'text-red-600 hover:text-red-500 active:text-red-700',
  info: 'text-blue-600 hover:text-blue-500 active:text-blue-700',
}

export const BUTTON_LOOKS_BORDER: any = {
  white: 'border-2 text-gray-600 bg-transparent border-gray-400 hover:bg-gray-100 hover:bg-opacity-50 active:border-gray-700',
  primary: 'border-2 text-primary-700 bg-transparent border-primary-600 hover:bg-primary-100 hover:bg-opacity-50 active:border-primary-800',
  success: 'border-2 text-green-600 bg-transparent border-green-400 hover:bg-green-100 hover:bg-opacity-50 active:border-green-700',
  destructive: 'border-2 text-red-600 bg-transparent border-red-400 hover:bg-red-100 hover:bg-opacity-50 active:border-red-700',
  info: 'border-2 text-blue-600 bg-transparent border-blue-400 hover:bg-blue-100 hover:bg-opacity-50 active:border-blue-700',
}

export const BUTTON_LOOKS: any = {
  solid: BUTTON_LOOKS_SOLID,
  ghost: BUTTON_LOOKS_GHOST,
  link: BUTTON_LOOKS_LINK,
  border: BUTTON_LOOKS_BORDER,
}

export const BUTTON_SIZES: any = {
  xs: 'h-6 px-2 text-xs font-medium',
  sm: 'h-8 px-4 text-sm font-medium',
  md: 'h-10 px-4 text-sm font-medium',
  lg: 'h-12 px-4 text-sm font-medium',
  xl: 'h-14 px-6 font-medium',
  'square-xs': 'h-6 w-6 text-xs font-medium',
  'square-sm': 'h-8 w-8 text-sm font-medium',
  'square-md': 'h-10 w-10 text-sm font-medium',
  'square-lg': 'h-12 w-12 text-sm font-medium',
  'square-xl': 'h-14 w-14 font-medium',
}

export const BUTTON_JUSTIFY: any = JUSTIFY

export const BUTTON_ROUNDED: any = ROUNDED

export const BUTTON_PROPS = {
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: 'normal'
  },
  look: {
    type: String,
    default: 'solid'
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  type: {
    type: String,
    default: 'button'
  },
  justify: {
    type: String,
    default: 'center'
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof BUTTON_PROPS> = params

  const proxyLook = computed(() => {
    const look = [props.look, props.color].join('.')

    return get(BUTTON_LOOKS, look) || props.look
  })

  const proxySize = computed(() => {
    return BUTTON_SIZES[props.size] || props.size
  })

  const proxyRounded = computed(() => {
    return BUTTON_ROUNDED[props.rounded] || props.rounded
  })

  const proxyJustify = computed(() => {
    return BUTTON_JUSTIFY[props.justify] || props.justify
  })

  return {
    proxyLook,
    proxySize,
    proxyRounded,
    proxyJustify
  }
}

const Button = BUTTON_THEMES.main

export {
  Button,
  setup
}
