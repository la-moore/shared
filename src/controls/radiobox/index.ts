import {SetupContext, defineAsyncComponent, ref, computed, ExtractPropTypes} from 'vue'
import { CONTROL_PROPS, controlSetup } from '../control'
// import { useTheme } from '../../../plugins/theme'

// const { createThemeComponent } = useTheme()

export const RADIOBOX_LOOKS: any = {
  primary: 'bg-primary-600 border-primary-600 p-1',
  secondary: 'bg-gray-600 border-gray-600 p-1',
  success: 'bg-green-600 border-green-600 p-1',
  destructive: 'bg-red-600 border-red-600 p-1',
  info: 'bg-blue-600 border-blue-600 p-1',
  warning: 'bg-yellow-600 border-yellow-600 p-1',
  disabled: 'bg-gray-300 border-gray-300 p-2',
}

export const RADIOBOX_THEMES = {
  main: defineAsyncComponent(() => import('./base-radiobox.vue')),
}

export const RADIOBOX_PROPS = {
  ...CONTROL_PROPS,
  options: {
    type: Array,
    default: () => [],
  },
  look: {
    type: String,
    default: 'primary',
  }
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof RADIOBOX_PROPS> = params
  const control = controlSetup(params, ctx)
  const isFocused = ref(false)

  function isChecked(option) {
    return control.localValue.value === option.value
  }

  function setValue(option) {
    control.localValue.value = option.value
  }

  const proxyLook = computed(() => {
    if (props.disabled) {
      return RADIOBOX_LOOKS.disabled
    }

    if (props.error) {
      return RADIOBOX_LOOKS.destructive
    }

    return RADIOBOX_LOOKS[props.look] || props.look
  })

  return {
    ...control,
    isFocused,
    proxyLook,
    isChecked,
    setValue,
  }
}

const Radiobox = RADIOBOX_THEMES.main

export {
  Radiobox,
  setup
}
