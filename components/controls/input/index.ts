import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '/-/plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const INPUT_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-input.vue')),
}

export const INPUT_PROPS = {
  ...CONTROL_PROPS,
  hideInput: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Object,
    default: null,
  },
  maxlength: {
    type: Number,
    default: undefined,
  },
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof INPUT_PROPS> = params

  const control = controlSetup(params, ctx)

  const isFocused = ref(false)
  const showPassword = ref(false)

  const hasRight = computed(() => {
    return ctx.slots.right || props.type === 'password'
  })

  const proxyType = computed(() => {
    if (props.type === 'password') {
      return showPassword.value ? 'text' : 'password'
    }

    return props.type
  })

  return {
    ...control,
    hasRight,
    proxyType,
    isFocused,
    showPassword
  }
}

const Input = createThemeComponent(INPUT_THEMES)

export {
  Input,
  setup
}
