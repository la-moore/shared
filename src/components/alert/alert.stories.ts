import BaseAlert from './base-alert.vue'
import { ALERT_LOOKS } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(ALERT_LOOKS),
    control: 'select'
  },

  icon: { control: 'text' },
  default: { control: 'text' },
}

export default {
  title: 'Base/Alert',
  component: BaseAlert,
  argTypes,
}

const Template = (args) => ({
  components: { BaseAlert },
  setup() {
    return { args }
  },
  template: '<BaseAlert v-bind="args"><div v-if="args.default" v-html="args.default" /></BaseAlert>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  default: 'You have no credits left. <a class="font-medium underline">Upgrade your account to add more credits.</a>',
}
