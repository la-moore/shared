<template>
  <div class="relative">
    <label v-if="label"
           class="block text-sm font-medium leading-5 mb-1">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>

    <div class="rounded-md flex-1 shadow-sm border border-gray-300 flex transition duration-150 ease-in-out items-center"
         :class="[
           (isFocused && !errorMessage) && 'border-blue-300',
           errorMessage ? 'border-red-400' : 'border-gray-300',
           disabled && 'cursor-not-allowed bg-gray-100',
         ]">
      <div :class="[
        disabled && 'pointer-events-none'
      ]">
        <BaseMenu class="flex-shrink-0"
                  :hide-on-click="false">
          <div class="pl-4 h-10 flex items-center">
            <div class="w-6 h-6 shadow-inner-border rounded-full cursor-pointer"
                 :style="{ backgroundColor: modelValue }" />
          </div>

          <template #menu>
            <div class="p-4 bg-white shadow-lg rounded-md">
              <div ref="picker" />

              <div class="pt-3 -mb-1">
                <div class="flex flex-wrap">
                  <template v-for="(color, idx) in colors"
                            :key="idx">
                    <div class="w-1/6 flex justify-center items-center py-1">
                      <div class="w-6 h-6 shadow-inner-border rounded-full cursor-pointer"
                           :style="{ backgroundColor: color }"
                           @click="$emit('update:modelValue', color)" />
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </BaseMenu>
      </div>

      <input class="appearance-none rounded-md bg-transparent flex-1 px-3 h-10 placeholder-gray-400 focus:outline-none sm:text-sm sm:leading-5"
             v-bind="{ ...$attrs, class: undefined }"
             :class="[
               disabled && 'pointer-events-none'
             ]"
             :value="modelValue || value"
             :type="proxyType"
             :disabled="disabled"
             :maxlength="maxlength"
             :placeholder="placeholder"
             aria-label=""
             v-on="handlers"
             @focus="isFocused = true"
             @blur="isFocused = false">

      <div v-if="$slots.right || type === 'password'"
           :class="[
             disabled && 'pointer-events-none'
           ]">
        <slot name="right">
          <BaseButton v-if="type === 'password'"
                      class="w-10 !p-0 rounded-l-none"
                      look="link"
                      theme="dark"
                      rounded="md"
                      @click="showPassword = !showPassword">
            <BaseIcon :name="showPassword ? 'outline_eye_off' : 'outline_eye'"
                      size="sm" />
          </BaseButton>
        </slot>
      </div>
    </div>

    <div class="flex pt-px text-sm leading-4">
      <transition enter-active-class="transition-all duration-300"
                  enter-from-class="transform -translate-y-3 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                  leave-active-class="transition-all duration-300"
                  leave-from-class="transform translate-y-0"
                  leave-to-class="transform -translate-y-3 opacity-0">
        <span v-if="!disabled && (errorMessage || $slots.error)"
              class="text-red-600">
          <slot name="error">
            {{ errorMessage }}
          </slot>
        </span>
      </transition>
      <div v-if="maxlength"
           class="flex-shrink-0 pl-6 ml-auto leading-5">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iro from '@jaames/iro'
import BaseMenu from '/-/components/menu/base-menu.vue'
import BaseButton from '/-/components/button/base-button.vue'
import BaseControlCore from '/-/components/controls/base-control-core.vue'
import { setup } from '/-/components/controls/setup'
import { useColor } from '/-/plugins/color'

export default {
  components: {
    BaseButton,
    BaseMenu
  },
  extends: BaseControlCore,
  props: {
    handleSvg: {
      type: String,
      default: null,
    },
    handleOrigin: {
      type: Object,
      default() {
        return {
          x: 0,
          y: 0,
        }
      },
    },
    handleRadius: {
      type: Number,
      default: 8,
    },
    sliderMargin: {
      type: Number,
      default: 24,
    },
    sliderHeight: {
      type: Number,
      default: undefined,
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    borderColor: {
      type: String,
      default: '#ffffff',
    },
    display: {
      type: String,
      default: 'block',
    },
    wheelAngle: {
      type: Number,
      default: 0,
    },
    wheelDirection: {
      type: String,
      default: 'anticlockwise',
    },
    wheelLightness: {
      type: Boolean,
      default: true,
    },
    css: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['input', 'color:change', 'color:init', 'input:change', 'input:start', 'input:move', 'input:end', 'mount', 'update:modelValue'],
  setup,
  data() {
    return {
      colorPicker: null,
    }
  },
  computed: {
    colors() {
      const { colors } = useColor()
      const arr = []

      Object.keys(colors.value).forEach((color) => {
        arr.push(colors.value[color][500])
      })

      return arr
    }
  },
  watch: {
    modelValue(value) {
      if (this.colorPicker.color) {
        this.colorPicker.color.hexString = value
      }
    },
  },
  mounted() {
    this.colorPicker = new iro.ColorPicker(this.$refs.picker, {
      width: 200,
      handleSvg: this.handleSvg,
      color: this.modelValue || this.value || '#fff',
      display: this.display,
      css: this.css,
      wheelDirection: this.wheelDirection,
      wheelAngle: this.wheelAngle,
      wheelLightness: this.wheelLightness,
      handleOrigin: this.handleOrigin,
      handleRadius: this.handleRadius,
      sliderMargin: this.sliderMargin,
      sliderHeight: this.sliderHeight,
      borderWidth: this.borderWidth,
      borderColor: this.borderColor,
      layout: [
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'hue'
          }
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'saturation'
          }
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: 'value'
          }
        }
      ]
    })

    this.colorPicker.on('input:end', this.onInput)
    this.colorPicker.on('color:change', this.onColorChange)
    this.colorPicker.on('color:init', this.onColorInit)
    this.colorPicker.on('input:change', this.onInputChange)
    this.colorPicker.on('input:start', this.onInputStart)
    this.colorPicker.on('input:move', this.onInputMove)
    this.colorPicker.on('input:end', this.onInputEnd)
    this.colorPicker.on('mount', this.onMount)
  },
  beforeUnmount() {
    this.colorPicker.off('input:end', this.onInput)
    this.colorPicker.off('color:change', this.onColorChange)
    this.colorPicker.off('color:init', this.onColorInit)
    this.colorPicker.off('input:change', this.onInputChange)
    this.colorPicker.off('input:start', this.onInputStart)
    this.colorPicker.off('input:move', this.onInputMove)
    this.colorPicker.off('input:end', this.onInputEnd)
    this.colorPicker.off('mount', this.onMount)
  },
  methods: {
    onInput(color) {
      this.$emit('update:modelValue', color.hexString)
    },
    onColorChange(color, changes) {
      this.$emit('color:change', {
        color,
        changes,
      })
    },
    onColorInit(color, changes) {
      this.$emit('color:init', {
        color,
        changes,
      })
    },
    onInputChange(color, changes) {
      this.$emit('input:change', {
        color,
        changes,
      })
    },
    onInputStart(color) {
      this.$emit('input:start', {
        color,
      })
    },
    onInputMove(color) {
      this.$emit('update:modelValue', color.hexString)
      this.$emit('input:move', {
        color
      })
    },
    onInputEnd(color) {
      this.$emit('input:end', {
        color
      })
    },
    onMount(colorPicker) {
      this.$emit('mount', {
        colorPicker,
      })
    },
  },
}
</script>
