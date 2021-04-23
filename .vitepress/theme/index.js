import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/code.css';
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css';
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css';
import Layout from 'vitepress/dist/client/theme-default/Layout.vue';
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';
import components from '../../components'
import directives from '../../directives'
import theme from '../../plugins/theme'
import icons from '../../plugins/icons'
import './layout.css';
import './tailwind.postcss'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(components)
    app.use(directives)
    app.use(icons)
    app.use(theme, 'main')
  },
}
