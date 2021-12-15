<template>
  <div class="inline-block">
    <div ref="target">
      <slot />
    </div>

    <div ref="popper"
         class="z-30 p-2"
         :class="[
           proxySize
         ]">
      <slot name="popper">
        <div class="p-1 rounded-md bg-white shadow-lg divide-y divide-gray-200 dark:divide-gray-600 dark:bg-gray-700 dark:text-white"
             :class="[
               proxyRounded
             ]">
          <slot name="menu">
            <BaseNavigation v-if="menu.length > 0"
                            :menu="menu" />
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createPopper } from '@popperjs/core'
import { setup, MENU_PROPS } from './'
import BaseNavigation from '../../components/navigation/base-navigation.vue'

export default defineComponent({
  name: 'BaseMenu',
  components: {
    BaseNavigation
  },
  props: MENU_PROPS,
  setup,
  mounted() {
    const container: any = this.$el
    const target: any = this.$refs.target
    const popper: any = this.$refs.popper

    const instance = createPopper(target, popper, {
      placement: 'auto',
      modifiers: [
        {
          name: 'flip',
          options: {
            padding: 60,
          },
        },
      ]
    })

    function show() {
      popper.removeAttribute('hidden')
      instance.update()
    }

    function hide() {
      popper.setAttribute('hidden', '')
    }

    function onMouseenter() {
      show()
    }

    function onMouseleave() {
      hide()
    }

    target.addEventListener('click', onMouseenter)
    popper.addEventListener('mouseenter', onMouseenter)
    container.addEventListener('mouseleave', onMouseleave)

    if (this.closeOnClick) {
      popper.addEventListener('click', onMouseleave)
    }

    hide()
  }
})
</script>
