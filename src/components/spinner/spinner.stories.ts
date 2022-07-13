import BaseSpinner from './base-spinner.vue'
import { SPINNER_SIZES } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  size: {
    options: Object.keys(SPINNER_SIZES),
    control: 'select'
  },

  default: { control: 'text' },
}

export default {
  title: 'Base/Spinner',
  component: BaseSpinner,
  argTypes,
}

const Template = (args) => ({
  components: { BaseSpinner },
  setup() {
    return { args }
  },
  template: '<BaseSpinner v-bind="args" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {}
