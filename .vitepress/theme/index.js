import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/code.css';
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css';
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css';
import MyLayout from './Layout.vue'
import components from '../../components'
import directives from '../../directives'
import theme from '../../plugins/theme'
import icons from '../../plugins/icons'
import baseIcons from '../../plugins/icons/base'
import ColorPicker from '../../plugins/color-picker'
import Backgrounds from '../../plugins/backgrounds'
import Slider from '../../plugins/slider'
import './layout.css'
import './tailwind.postcss'

export default {
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(components)
    app.use(directives)
    app.use(icons, baseIcons)
    app.use(theme, 'main')

    app.use(ColorPicker)
    app.use(Backgrounds)
    app.use(Slider)
  },
}
