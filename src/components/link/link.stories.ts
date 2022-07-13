import BaseLink from './base-link.vue'
import { LINK_LOOKS } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(LINK_LOOKS),
    control: 'select'
  },
  to: { control: 'text' },
  href: { control: 'text' },
  weight: { control: 'text' },

  default: { control: 'text' },
}

export default {
  title: 'Base/Link',
  component: BaseLink,
  argTypes,
}

const Template = (args) => ({
  components: { BaseLink },
  setup() {
    return { args }
  },
  template: '<BaseLink v-bind="args"><span v-if="args.default" v-html="args.default" /></BaseLink>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  default: 'Link',
}
