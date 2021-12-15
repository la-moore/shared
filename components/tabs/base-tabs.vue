<template>
  <div class="flex flex-col relative">
    <div class="sm:block">
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
                close-on-click
                size="full">
        <div class="whitespace-nowrap items-center flex py-2 px-3 font-medium text-md cursor-pointer"
             :class="[
               proxyLook
             ]">
          <div class="flex-1">
            {{ selectedTab?.label }}
          </div>

          <slot name="extendedIcon">
            <ChevronDownIcon />
          </slot>

          <div class="absolute bottom-0 w-full bg-current py-px left-0" />
        </div>

        <template #menu>
          <div class="">
            <template v-for="tab in tabs"
                      :key="tab.value">
              <div class="flex items-center cursor-pointer px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
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
import BaseMenu from '../../components/menu/base-menu.vue'
import { ChevronDownIcon } from '@scarlab/icons-vue/outline'

export default defineComponent({
  name: 'BaseTabs',
  components: {
    BaseMenu,
    ChevronDownIcon
  },
  props: TABS_PROPS,
  emits: ['change', 'update:modelValue'],
  setup
})
</script>
