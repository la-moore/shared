import { Plugin } from 'vue'
import { useComponent } from '../../components'
import BaseLightBox from './components/base-light-box.vue'

const plugin: Plugin = function(app) {
  useComponent(app, null, 'LightBox', BaseLightBox)
}

export default plugin
