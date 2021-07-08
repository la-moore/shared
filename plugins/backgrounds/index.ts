import { Plugin } from 'vue'
import { useComponent } from '/-/components'
import BackgroundBox from './components/background-box.vue'
import BackgroundCircle from './components/background-circle.vue'

const plugin: Plugin = function(app) {
  useComponent(app, null, 'BackgroundBox', BackgroundBox)
  useComponent(app, null, 'BackgroundCircle', BackgroundCircle)
}

export default plugin
