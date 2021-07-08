<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseControlCore',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: [String, Function, Object],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    mask: {
      type: Object,
      default: null,
    },
    maxlength: {
      type: Number,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false
    }
  },
})
</script>
