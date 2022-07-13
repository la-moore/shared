import BaseBadge from './base-badge.vue'
import { BADGE_LOOKS, BADGE_SIZES, BADGE_ROUNDED } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(BADGE_LOOKS),
    defaultValue: 'primary',
    control: 'select'
  },
  size: {
    options: Object.keys(BADGE_SIZES),
    control: 'select'
  },
  rounded: {
    options: Object.keys(BADGE_ROUNDED),
    control: 'select'
  },

  default: { control: 'text' },
}

export default {
  title: 'Base/Badge',
  component: BaseBadge,
  argTypes,
}

const Template = (args: any) => ({
  components: { BaseBadge },
  setup() {
    return { args }
  },
  template: '<BaseBadge v-bind="args"><div v-if="args.default" v-html="args.default" /></BaseBadge>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  default: 'Badge',
}
