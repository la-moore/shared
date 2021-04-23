import { Plugin, Directive } from 'vue'
import Tooltip from './tooltip'
import Clickaway from './clickaway'
import Visibility from './visibility'

const plugin: Plugin = function(app, config = {}) {
  const use = (name: string, directive: Directive) => {
    app.directive(name, directive)
  }

  use('tooltip', Tooltip)
  use('clickaway', Clickaway)
  use('visibility', Visibility)
}

export default plugin
