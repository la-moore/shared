import { reactive, toRef } from 'vue'

interface stateInterface {
  icons: any
}

const state: stateInterface = reactive({
  icons: {}
})

function addIcons(icons: any) {
  state.icons = Object.assign(state.icons, icons)
}

export function useIcons() {
  return {
    icons: toRef(state, 'icons'),
    addIcons
  }
}
