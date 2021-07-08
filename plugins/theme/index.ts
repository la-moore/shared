import { Plugin } from 'vue'
import { useTheme, ThemeType } from './state'

const plugin: Plugin = function(app, theme: ThemeType = 'main') {
  const { setTheme } = useTheme()

  setTheme(theme)
}

export default plugin
export * from './state'
