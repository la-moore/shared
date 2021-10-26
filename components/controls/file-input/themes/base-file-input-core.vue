<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from '/-/plugins/theme'
import constants from '../themes'

export default defineComponent({
  name: 'BaseFileInputCore',
  props: {
    modelValue: {
      type: [Object, String],
      default: undefined,
    },
    value: {
      type: [Object, String],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: '',
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
    required: {
      type: Boolean,
      default: false,
    },
    accept: {
      type: Array,
      default: () => ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    maxSize: {
      type: Number,
      default: 10,
    },
    rounded: {
      type: [String, Boolean],
      default: 'normal'
    },
    border: {
      type: [String, Boolean],
      default: 'dashed'
    },
  },
  data() {
    return {
      dragover: false,
      files: [],
    }
  },
  computed: {
    constants() {
      const { theme } = useTheme()

      return constants[theme.value] || constants.main
    },
    proxyRounded() {
      return this.rounded && this.constants.rounded && this.constants.rounded[this.rounded]
    },
    proxyBorder() {
      return this.border && this.constants.border && this.constants.border[this.border]
    },
  },
  methods: {
    addEventListener(el, events, listener) {
      events = events.split(' ')
      events.forEach(event => { el.addEventListener(event, listener) })
    },
    removeEventListener(el, events, listener) {
      events = events.split(' ')
      events.forEach(event => { el.removeEventListener(event, listener) })
    },
    clear() {
      this.$refs.input.value = []
      this.files = []
    },
    onDragPrevent(e) {
      e.preventDefault()
      e.stopPropagation()
    },
    onDragOver() {
      this.dragover = true
    },
    onDragStop() {
      this.dragover = false
    },
    onDrop(e) {
      e.preventDefault()

      if (e.dataTransfer.items) {
        const files = Object.values(e.dataTransfer.items).map((file) => file.getAsFile())

        this.addFiles(files)
        this.$emit('drop', files)
      }
    },
    onChange(event) {
      if (event.target.files) {
        const items = Object.values(event.target.files).filter((file) => {
          return !this.accept || this.accept === file.type || this.accept.includes(file.type)
        })

        this.addFiles(items)
      }
    },
    onTarget() {
      this.$refs.input.click()
    },
    addFiles(files) {
      this.$emit('change', this.multiple ? files : files[0])
      this.$emit('update:modelValue', this.multiple ? files : files[0])

      this.$nextTick(() => {
        if (this.validate) {
          this.handleBlur()
          this.handleInput(this.modelValue)
          this.validate()
        }

        this.clear()
      })

      return files
    }
  }
})
</script>
