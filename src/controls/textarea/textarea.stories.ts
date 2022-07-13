import { ref } from 'vue'
import { TEXTAREA_LOOKS } from './'
import BaseTextarea from './base-textarea.vue'
import { StoryFn, ArgTypes } from '@storybook/vue3'

const argTypes: ArgTypes = {
  look: {
    options: Object.keys(TEXTAREA_LOOKS),
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
  title: 'Controls/Textarea',
  component: BaseTextarea,
  argTypes
}

const Template = (args) => ({
  components: { BaseTextarea },
  setup() {
    const localValue = ref('')

    return {
      args,
      localValue
    }
  },
  template: '<BaseTextarea v-bind="args" v-model="localValue" />',
})

export const Default: StoryFn = Template.bind({})
Default.args = {
  label: 'Textarea Label'
}
