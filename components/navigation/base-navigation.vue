<template>
  <nav class="divide-y flex flex-col">
    <template v-for="(group, idx) in itemsGroups"
              :key="idx">
      <div class="py-1 space-y-1 flex flex-col">
        <template v-for="(item, idj) in group.items"
                  :key="idj">
          <BaseLink class="cursor-pointer w-full flex items-center py-2 text-sm font-medium"
                    :class="[
                      proxyRounded,
                      selected === item.value ? proxyLook : secondLook
                    ]"
                    look=""
                    :href="item.href"
                    :to="item.to"
                    @click="() => selectItem(item.value)">
            <component :is="item.icon"
                       v-if="item.icon"
                       class="flex-shrink-0 ml-3 h-6 w-6 transition-opacity"
                       :class="[
                         selected === item.value ? 'opacity-100' : 'opacity-50'
                       ]" />
            <span class="truncate px-3">
              {{ item.label }}
            </span>
            <span v-if="item.badge"
                  class="flex-shrink-0 mr-3 ml-auto inline-block"
                  :class="[
                    badgeLook,
                    badgeSize,
                    badgeRounded
                  ]">
              {{ item.badge }}
            </span>
          </BaseLink>
        </template>
      </div>
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup, NAVIGATION_PROPS } from './'
import BaseLink from '../../components/link/base-link.vue'
import BaseIcon from '../../plugins/icons/components/icon.vue'

export default defineComponent({
  name: 'BaseNavigation',
  components: {
    BaseLink,
    BaseIcon
  },
  props: NAVIGATION_PROPS,
  setup
})
</script>
