<template>
  <div class="relative">
    <label v-if="label"
           class="mb-1 block text-sm font-medium">
      {{ label }}
      {{ required ? '*' : '' }}
    </label>

    <div class="mt-1 relative">
      <BaseMenu class="w-full"
                size="full">
        <div class="flex rounded-md shadow-sm h-10 border transition"
             :class="[
               errorMessage ? 'border-red-400' : 'focus-within:border-blue-300 dark:focus-within:border-blue-600 dark:border-gray-500',
               disabled && 'pointer-events-none bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-500'
             ]">
          <BaseButton class="w-full"
                      size="h-full px-3"
                      look="text-gray-500 dark:text-gray-400">
            <span class="block truncate mr-auto font-normal text-base">
              Select
            </span>

            <span class="inset-y-0 flex ml-2 items-center pointer-events-none">
              <ChevronDownAltIcon class="h-5 w-5" />
            </span>
          </BaseButton>
        </div>

        <template #menu>
          <ul class="max-h-60 overflow-auto">
            <li class="cursor-default select-none relative py-2 pl-3 pr-9">
              <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
              <span class="font-normal block truncate">
                Wade Cooper
              </span>

              <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                <CheckIcon class="text-primary-600 dark:text-primary-400" />
              </div>
            </li>
          </ul>
        </template>
      </BaseMenu>
    </div>

    <ControlFooter :error-message="errorMessage">
      <div v-if="maxlength">
        <span>{{ modelValue.length }}</span>
        <span class="mx-px">
          /
        </span>
        <span>{{ maxlength }}</span>
      </div>
    </ControlFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, SELECT_PROPS } from './'
import BaseButton from '../../../components/button/base-button.vue'
import BaseMenu from '../../../components/menu/base-menu.vue'
import ControlFooter from '../control-footer.vue'
import { ChevronDownAltIcon, CheckIcon } from '@scarlab/icons-vue/outline'

export default defineComponent({
  name: 'BaseSelect',
  components: {
    CheckIcon,
    ChevronDownAltIcon,
    BaseMenu,
    BaseButton,
    ControlFooter,
  },
  props: SELECT_PROPS,
  emits: ['update:modelValue', 'unmasked'],
  setup
})
</script>
