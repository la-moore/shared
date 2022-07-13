import { ref } from 'vue'
import { RADIOBOX_LOOKS } from './'
import BaseRadiobox from './base-radiobox.vue'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(RADIOBOX_LOOKS),
    control: 'select'
  },
  label: { control: 'text' },
  options: { control: 'array' },
  description: { control: 'text' },
  error: { control: 'text' },
  name: { control: 'text' },
  disabled: { control: 'boolean' },
  required: { control: 'boolean' },
  value: { control: 'text' },
  modelValue: { control: 'text' },

  active: { control: 'text' },
  inactive: { control: 'text' },

  'onUpdate:modelValue': { action: "v-model" }
}

export default {
  title: 'Controls/RadioBox',
  component: BaseRadiobox,
  argTypes
}

const Template = (args) => ({
  components: { BaseRadiobox },
  setup() {
    const localValue = ref(false)

    return {
      args,
      localValue
    }
  },
  template: '<BaseRadiobox v-bind="args" v-model="localValue" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  label: 'RadioBox Label',
  options: [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
  ],
}
