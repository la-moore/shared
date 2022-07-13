import { ref } from 'vue'
import { TOGGLE_LOOKS } from './'
import BaseToggle from './base-toggle.vue'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(TOGGLE_LOOKS),
    control: 'select'
  },
  label: { control: 'text' },
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
  title: 'Controls/Toggle',
  component: BaseToggle,
  argTypes
}

const Template = (args) => ({
  components: { BaseToggle },
  setup() {
    const localValue = ref(false)

    return {
      args,
      localValue
    }
  },
  template: '<BaseToggle v-bind="args" v-model="localValue" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  label: 'Toggle Label'
}
