import { ref } from 'vue'
import { INPUT_LOOKS } from './'
import BaseInput from './base-input.vue'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(INPUT_LOOKS),
    control: 'select'
  },
  type: {
    options: ['text', 'date', 'password', 'email', 'url'],
    control: 'select'
  },
  label: { control: 'text' },
  placeholder: { control: 'text' },
  description: { control: 'text' },
  error: { control: 'text' },
  name: { control: 'text' },
  disabled: { control: 'boolean' },
  required: { control: 'boolean' },
  maxlength: { control: 'number' },
  value: { control: 'text' },
  modelValue: { control: 'text' },

  left: { control: 'text' },
  right: { control: 'text' },
  input: { control: 'text' },

  'onUpdate:modelValue': { action: "v-model" }
}

export default {
  title: 'Controls/Input',
  component: BaseInput,
  argTypes
}

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    const localValue = ref('')

    return {
      args,
      localValue
    }
  },
  template: '<BaseInput v-bind="args" v-model="localValue" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  label: 'Input Label'
}
