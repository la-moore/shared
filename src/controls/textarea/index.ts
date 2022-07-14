import {ExtractPropTypes, SetupContext, ref, watch, computed} from 'vue'
import { controlSetup, CONTROL_PROPS } from '../control'
import Textarea from './base-textarea.vue'
// import { defineComponent } from '@vue/runtime-core'
// import { useTheme } from '../../../plugins/theme'

// const { createThemeComponent } = useTheme()

export const TEXTAREA_LOOKS = {
  main: 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
  primary: 'focus-within:border-primary-300 dark:focus-within:border-primary-600 dark:border-primary-500',
  destructive: 'border-red-400',
  success: 'border-green-400',
  disabled: 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500',
}

// export const TEXTAREA_THEMES: any = {
//   main: defineComponent(() => import('./base-textarea.vue')),
// }

export const TEXTAREA_PROPS = {
  ...CONTROL_PROPS,
  rows: {
    type: Number,
    default: 1,
  },
  rowsMax: {
    type: Number,
    default: undefined,
  },
  maxlength: {
    type: Number,
    default: undefined,
  },
  look: {
    type: String,
    default: 'main',
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof TEXTAREA_PROPS> = params

  const control = controlSetup(params, ctx)

  const height = ref(0)
  const element = ref({} as any)

  function setHeight() {
    const style = window?.getComputedStyle(element.value) || {}
    const ps = (property: string) => parseInt(style[property]) || 0
    const linesCount = (`${control.localValue.value}`.match(/\n/g) || []).length + 1
    const lineHeight = ps('lineHeight')
    const spaceY = ps('paddingTop') + ps('paddingBottom') + ps('borderTopWidth') + ps('borderBottomWidth')
    const rows = Math.max(props.rows, props.rowsMax ? Math.min(props.rowsMax, linesCount) : linesCount)

    height.value = (rows * lineHeight) + spaceY
  }

  watch(control.localValue, () => {
    setHeight()
  })

  const proxyLook = computed(() => {
    if (props.disabled) {
      return TEXTAREA_LOOKS.disabled
    }

    if (props.error) {
      return TEXTAREA_LOOKS.destructive
    }

    return TEXTAREA_LOOKS[props.look] || props.look
  })

  return {
    ...control,
    element,
    proxyLook,
    height
  }
}

// const Textarea = TEXTAREA_THEMES.main

export {
  Textarea,
  setup
}
