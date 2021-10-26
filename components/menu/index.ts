import { computed, ExtractPropTypes } from 'vue'
import { defineAsyncComponent, PropType } from '@vue/runtime-core'
import { MenuItemInterface } from '/-/components/navigation'
import { useTheme } from '/-/plugins/theme'
import { ROUNDED } from '../utils'

const { createThemeComponent } = useTheme()

export const MENU_THEMES: any = {
  main: defineAsyncComponent(() => import('./base-menu.vue')),
}

export const MENU_SIZES: any = {
  xs: 'w-10',
  sm: 'w-24',
  md: 'w-48',
  lg: 'w-64',
  xl: 'w-96',
  full: 'w-full',
}

export const MENU_PROPS = {
  rounded: {
    type: String,
    default: 'md'
  },
  look: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: ''
  },
  menu: {
    type: Array as PropType<MenuItemInterface[]>,
    default: () => []
  },
}

function setup(params) {
  const props: ExtractPropTypes<typeof MENU_PROPS> = params

  const proxySize = computed(() => {
    return MENU_SIZES[props.size] || props.size
  })

  const proxyRounded = computed(() => {
    return ROUNDED[props.rounded] || props.rounded
  })

  return {
    proxySize,
    proxyRounded
  }
}

const Menu = createThemeComponent(MENU_THEMES)

export {
  Menu,
  setup
}
