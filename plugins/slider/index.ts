import { Plugin } from 'vue'
import { useComponent } from '../../components'
import Slider from './components/base-slider.vue'
import SliderItem from './components/base-slider-item.vue'

const plugin: Plugin = function(app) {
  useComponent(app, null, 'Slider', Slider)
  useComponent(app, null, 'SliderItem', SliderItem)
}

export default plugin
