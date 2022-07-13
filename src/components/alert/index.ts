import { computed, ExtractPropTypes } from 'vue'
import { defineComponent } from 'vue'
// import { useTheme } from '../../plugins/theme'

// const { createThemeComponent } = useTheme()

export const ALERT_THEMES: any = {
  main: defineComponent(() => import('./base-alert.vue')),
}

export const ALERT_LOOKS: any = {
  primary: 'bg-primary-50 border-primary-400 text-primary-700 dark:bg-primary-700 dark:border-primary-400 dark:text-primary-100',
  secondary: 'bg-gray-50 border-gray-400 text-gray-700 dark:bg-gray-700 dark:border-gray-400 dark:text-gray-100',
  success: 'bg-green-50 border-green-400 text-green-700 dark:bg-green-700 dark:border-green-400 dark:text-green-100',
  destructive: 'bg-red-50 border-red-400 text-red-700 dark:bg-red-700 dark:border-red-400 dark:text-red-100',
  info: 'bg-blue-50 border-blue-400 text-blue-700 dark:bg-blue-700 dark:border-blue-400 dark:text-blue-100',
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-700 dark:bg-yellow-700 dark:border-yellow-400 dark:text-yellow-100',
}

export const ALERT_PROPS = {
  look: {
    type: String,
    default: 'secondary'
  },
  icon: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: ''
  }
}

function setup(params) {
  const props: ExtractPropTypes<typeof ALERT_PROPS> = params

  const proxyLook = computed(() => {
    return ALERT_LOOKS[props.look] || props.look
  })

  return {
    proxyLook
  }
}

const Alert = ALERT_THEMES.main

export {
  Alert,
  setup
}
