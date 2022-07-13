import BaseRatio from './base-ratio.vue'
import { RATIO_SIZES } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  class: {
    control: 'text',
    defaultValue: 'bg-gray-100 rounded-md'
  },
  size: {
    options: Object.keys(RATIO_SIZES),
    control: 'select'
  },
  src: { control: 'text' },
  ratio: { control: 'number' },

  default: { control: 'text' },
}

export default {
  title: 'Base/Ratio',
  component: BaseRatio,
  argTypes,
}

const Template = (args) => ({
  components: { BaseRatio },
  setup() {
    return { args }
  },
  template: '<div class="w-96"><BaseRatio v-bind="args"><div v-if="args.default" v-html="args.default" /></BaseRatio></div>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {}
