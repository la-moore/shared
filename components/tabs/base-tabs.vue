<template>
  <div class="flex flex-col relative">
    <div class="sm:block border-b border-gray-200">
      <nav class="-mb-px hidden"
           :class="[
             proxyExtended,
             !fill && 'px-4 sm:px-6 space-x-2',
           ]"
           aria-label="Tabs">
        <template v-for="tab in tabs"
                  :key="tab.value">
          <div class="whitespace-nowrap relative group text-center py-2 px-3 font-medium text-md cursor-pointer"
               :class="[
                 fill && 'flex-1',
                 selected === tab.value ? proxyLook : secondLook
               ]"
               @click="() => selectTab(tab.value)">
            {{ tab.label }}

            <div class="absolute bottom-0 w-full bg-current py-px left-0"
                 :class="[
                   selected === tab.value ? '' : 'opacity-0 group-hover:opacity-50'
                 ]" />
          </div>
        </template>
      </nav>
      <BaseMenu class="relative w-full"
                :class="[proxyHide]"
                full>
        <div class="whitespace-nowrap items-center flex py-2 px-3 font-medium text-md cursor-pointer"
             :class="[
               proxyLook
             ]">
          <div class="flex-1">
            {{ selectedTab?.label }}
          </div>
          <BaseIcon :name="icon"
                    size="sm" />

          <div class="absolute bottom-0 w-full bg-current py-px left-0" />
        </div>

        <template #menu>
          <div class="bg-white shadow-lg p-1 rounded-lg">
            <template v-for="tab in tabs"
                      :key="tab.value">
              <div class="flex items-center cursor-pointer px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                   @click="() => selectTab(tab.value)">
                {{ tab.label }}
              </div>
            </template>
          </div>
        </template>
      </BaseMenu>
    </div>
    <div class="relative">
      <template v-for="tab in tabs"
                :key="tab.value">
        <slot v-if="selected === tab.value"
              v-bind="tab"
              :name="tab.value" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, TABS_PROPS } from './'
import BaseIcon from '/-/plugins/icons/components/icon.vue'
import BaseMenu from '/-/components/menu/base-menu.vue'

export default defineComponent({
  name: 'BaseTabs',
  components: {
    BaseMenu,
    BaseIcon
  },
  props: TABS_PROPS,
  emits: ['change', 'update:modelValue'],
  setup
})
</script>
