import BaseAvatar from './base-avatar.vue'
import { AVATAR_LOOKS, AVATAR_ROUNDED, AVATAR_SIZES } from './'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(AVATAR_LOOKS),
    control: 'select'
  },
  size: {
    options: Object.keys(AVATAR_SIZES),
    control: 'select'
  },
  rounded: {
    options: Object.keys(AVATAR_ROUNDED),
    control: 'select'
  },
  hideStub: { control: 'boolean' },
  hideRing: { control: 'boolean' },
  reverse: { control: 'boolean' },
  title: { control: 'text' },
  text: { control: 'text' },
  src: { control: 'array' },

  stub: { control: 'text' },
  badge: { control: 'text' },
  icon: { control: 'text' },
  default: { control: 'text' },
}

export default {
  title: 'Base/Avatar',
  component: BaseAvatar,
  argTypes,
}

const Template = (args) => ({
  components: { BaseAvatar },
  setup() {
    return { args }
  },
  template: '<BaseAvatar v-bind="args"><div v-if="args.default" v-html="args.default" /></BaseAvatar>',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  title: 'First line',
  text: 'Line 2',
}
