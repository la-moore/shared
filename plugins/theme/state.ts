import { reactive, toRef } from 'vue'

export type ThemeType = 'main' | 'exec_summit'

interface stateInterface {
  themes: string[]
  theme: ThemeType
}

const themes = ['main', 'exec_summit']

const state: stateInterface = reactive({
  themes,
  theme: 'main'
})

function setTheme(theme: ThemeType) {
  state.theme = theme
}

export function useTheme() {
  return {
    theme: toRef(state, 'theme'),
    themes: toRef(state, 'themes'),
    setTheme
  }
}
