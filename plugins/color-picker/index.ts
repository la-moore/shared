import { Plugin } from 'vue'
import { useComponent } from '/-/components'
import ColorPicker from './components/base-color-picker.vue'

const plugin: Plugin = function(app) {
  useComponent(app, null, 'ColorPicker', ColorPicker)
}

export default plugin
