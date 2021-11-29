import { computed, ExtractPropTypes, ref, SetupContext } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../plugins/theme'
import { ROUNDED, SPEED } from '../utils'

const { createThemeComponent } = useTheme()

export const DIALOG_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-dialog.vue')),
}

export const DIALOG_SIZES: any = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export const DIALOG_PROPS = {
  title: {
    type: String,
    default: ''
  },
  rounded: {
    type: String,
    default: 'full'
  },
  speed: {
    type: [String, Number],
    default: 200
  },
  size: {
    type: String,
    default: 'md'
  },
  hideClose: {
    type: Boolean,
    default: false
  },
  disableClose: {
    type: Boolean,
    default: false
  },
  look: {
    type: String,
    default: 'bg-white text-gray-900 dark:text-white dark:bg-gray-800'
  }
}

function setup(params, ctx: SetupContext) {
  const props: ExtractPropTypes<typeof DIALOG_PROPS> = params
  const isVisible = ref(false)

  const proxySize = computed(() => {
    return DIALOG_SIZES[props.size] || props.size
  })

  const proxyRounded = computed(() => {
    return ROUNDED[props.rounded] || props.rounded
  })

  const proxySpeed = computed(() => {
    return SPEED[props.speed] || props.speed
  })

  function open() {
    document.body.classList.add('overflow-hidden')
    isVisible.value = true
    ctx.emit('open')
  }

  function close() {
    document.body.classList.remove('overflow-hidden')
    isVisible.value = false
    ctx.emit('close')
  }

  return {
    open,
    close,
    isVisible,
    proxySize,
    proxySpeed,
    proxyRounded
  }
}

const Dialog = createThemeComponent(DIALOG_THEMES)

export {
  Dialog,
  setup
}
