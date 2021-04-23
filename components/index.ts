import { Plugin, Component } from 'vue'
import Icon from './icon/base-icon.vue'
import Menu from './menu/base-menu.vue'
import Form from './form/base-form.vue'
import Link from './link/base-link.vue'
import Modal from './modal/base-modal.vue'
import Input from './controls/input/base-input.vue'
import Textarea from './controls/textarea/base-textarea.vue'
import Alert from './alert/base-alert.vue'
import Badge from './badge/base-badge.vue'
import Ratio from './ratio/base-ratio.vue'
import Table from './table/base-table.vue'
import Dialog from './dialog/base-dialog.vue'
import Select from './controls/select/base-select.vue'
import Avatar from './avatar/base-avatar.vue'
import Button from './button/base-button.vue'
import Spinner from './spinner/base-spinner.vue'

const plugin: Plugin = function(app, config = {}) {
  const prefix = config.prefix || 'Base'
  const use = (name: string, component: Component) => {
    app.component(`${prefix}${name}`, component)
  }

  use('Icon', Icon)
  use('Menu', Menu)
  use('Form', Form)
  use('Link', Link)
  use('Modal', Modal)
  use('Input', Input)
  use('Textarea', Textarea)
  use('Alert', Alert)
  use('Badge', Badge)
  use('Ratio', Ratio)
  use('Table', Table)
  use('Dialog', Dialog)
  use('Select', Select)
  use('Avatar', Avatar)
  use('Button', Button)
  use('Spinner', Spinner)
}

export default plugin
