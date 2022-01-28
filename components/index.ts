import { Plugin, Component } from 'vue'
import Table from './table/base-table.vue'
import { Select } from './controls/select'
import { Overlay } from './overlay'
import { Modal } from './modal'
import { Menu } from './menu'
import { Dialog } from './dialog'
import { Spinner } from './spinner'
import { Tabs } from './tabs'
import { Ratio } from './ratio'
import { Badge } from './badge'
import { Link } from './link'
import { Alert } from './alert'
import { Avatar } from './avatar'
import { Button } from './button'
import { Navigation } from './navigation'
import { Input } from './controls/input'
import { Toggle } from './controls/toggle'
import { Textarea } from './controls/textarea'
import { Checkbox } from './controls/checkbox'

export function useComponent(app, config, name: string, component: Component) {
  const prefix = config?.prefix || 'Base'

  app.component(`${prefix}${name}`, component)
}

const plugin: Plugin = function(app, config = {}) {
  useComponent(app, config, 'Table', Table)
  useComponent(app, config, 'Select', Select)
  useComponent(app, config, 'Overlay', Overlay)
  useComponent(app, config, 'Modal', Modal)
  useComponent(app, config, 'Menu', Menu)
  useComponent(app, config, 'Dialog', Dialog)
  useComponent(app, config, 'Link', Link)
  useComponent(app, config, 'Alert', Alert)
  useComponent(app, config, 'Badge', Badge)
  useComponent(app, config, 'Ratio', Ratio)
  useComponent(app, config, 'Avatar', Avatar)
  useComponent(app, config, 'Button', Button)
  useComponent(app, config, 'Spinner', Spinner)
  useComponent(app, config, 'Navigation', Navigation)
  useComponent(app, config, 'Tabs', Tabs)
  useComponent(app, config, 'Input', Input)
  useComponent(app, config, 'Toggle', Toggle)
  useComponent(app, config, 'Checkbox', Checkbox)
  useComponent(app, config, 'Textarea', Textarea)
}

export default plugin
