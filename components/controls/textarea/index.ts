import { ExtractPropTypes, SetupContext, ref, watch } from 'vue'
import { defineAsyncComponent } from '@vue/runtime-core'
import { useTheme } from '../../../plugins/theme'
import { controlSetup, CONTROL_PROPS } from '../control'

const { createThemeComponent } = useTheme()

export const TEXTAREA_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-textarea.vue')),
}

export const TEXTAREA_PROPS = {
  ...CONTROL_PROPS,
  rows: {
    type: Number,
    default: 1,
  },
  rowsMax: {
    type: Number,
    default: 4,
  },
  maxlength: {
    type: Number,
    default: undefined,
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
    const rows = Math.max(props.rows, Math.min(props.rowsMax, linesCount))

    height.value = (rows * lineHeight) + spaceY
  }

  watch(control.localValue, () => {
    setHeight()
  })

  return {
    ...control,
    element,
    height
  }
}

const Textarea = createThemeComponent(TEXTAREA_THEMES)

export {
  Textarea,
  setup
}
