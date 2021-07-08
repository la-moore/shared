import { Plugin, Component } from 'vue'
import Menu from './menu/base-menu.vue'
import Form from './form/base-form.vue'
import Link from './link/base-link.vue'
import Modal from './modal/base-modal.vue'
import Alert from './alert/base-alert.vue'
import Badge from './badge/base-badge.vue'
import Ratio from './ratio/base-ratio.vue'
import Table from './table/base-table.vue'
import Dialog from './dialog/base-dialog.vue'
import Avatar from './avatar/base-avatar.vue'
import Button from './button/base-button.vue'
import Spinner from './spinner/base-spinner.vue'
import Tabs from './tabs/base-tabs.vue'
import Input from './controls/input/base-input.vue'
import Toggle from './controls/toggle/base-toggle.vue'
import Select from './controls/select/base-select.vue'
import Checkbox from './controls/checkbox/base-checkbox.vue'
import Textarea from './controls/textarea/base-textarea.vue'
import SelectAsync from './controls/select-async/base-select-async.vue'

export function useComponent(app, config, name: string, component: Component) {
  const prefix = config?.prefix || 'Base'

  app.component(`${prefix}${name}`, component)
}

const plugin: Plugin = function(app, config = {}) {
  useComponent(app, config, 'Menu', Menu)
  useComponent(app, config, 'Form', Form)
  useComponent(app, config, 'Link', Link)
  useComponent(app, config, 'Modal', Modal)
  useComponent(app, config, 'Alert', Alert)
  useComponent(app, config, 'Badge', Badge)
  useComponent(app, config, 'Ratio', Ratio)
  useComponent(app, config, 'Table', Table)
  useComponent(app, config, 'Dialog', Dialog)
  useComponent(app, config, 'Avatar', Avatar)
  useComponent(app, config, 'Button', Button)
  useComponent(app, config, 'Spinner', Spinner)
  useComponent(app, config, 'Tabs', Tabs)
  useComponent(app, config, 'Input', Input)
  useComponent(app, config, 'Toggle', Toggle)
  useComponent(app, config, 'Select', Select)
  useComponent(app, config, 'Checkbox', Checkbox)
  useComponent(app, config, 'Textarea', Textarea)
  useComponent(app, config, 'SelectAsync', SelectAsync)
}

export default plugin
