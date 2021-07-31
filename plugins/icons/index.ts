import { Plugin } from 'vue'
import { useIcons } from './state'
import baseIcons from './base'
import { useComponent } from '/-/components'
import Icon from './components/icon.vue'

const plugin: Plugin = function(app, icons?: any) {
  const { addIcons } = useIcons()

  addIcons(icons || baseIcons)

  useComponent(app, null, 'Icon', Icon)
}

export default plugin
export * from './state'
