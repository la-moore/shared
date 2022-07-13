import { ref } from 'vue'
import { CHECKBOX_LOOKS } from './'
import BaseCheckbox from './base-checkbox.vue'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(CHECKBOX_LOOKS),
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
  title: 'Controls/Checkbox',
  component: BaseCheckbox,
  argTypes
}

const Template = (args) => ({
  components: { BaseCheckbox },
  setup() {
    const localValue = ref(false)

    return {
      args,
      localValue
    }
  },
  template: '<BaseCheckbox v-bind="args" v-model="localValue" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  label: 'Checkbox Label'
}
