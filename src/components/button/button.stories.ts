import BaseButton from './base-button.vue'
import { BUTTON_JUSTIFY, BUTTON_LOOKS, BUTTON_ROUNDED } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  class: { control: 'text' },
  color: { control: 'text' },
  look: {
    options: Object.keys(BUTTON_LOOKS),
    control: 'select',
  },
  rounded: {
    options: Object.keys(BUTTON_ROUNDED),
    control: 'select'
  },
  justify: {
    options: Object.keys(BUTTON_JUSTIFY),
    control: 'select'
  },
  loading: { control: 'boolean' },
  disabled: { control: 'boolean' },

  default: { control: 'text' },

  'onClick': { action: "click" },
}

export default {
  title: 'Base/Button',
  component: BaseButton,
  argTypes,
}

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args"><span v-if="args.default" v-html="args.default" /></BaseButton>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  default: 'Button',
}
