<template>
  <Suspense>
    <template #default>
      <component :is="entryComponent"
                 v-bind="$attrs"
                 v-if="entryComponent">
        <template v-for="(_, slot) of $slots"
                  #[slot]="scope">
          <slot :name="slot"
                v-bind="scope" />
        </template>
      </component>
    </template>
    <template #fallback>
      <ComponentFallback />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { useTheme } from '../../../plugins/theme'
import { defineComponent, defineAsyncComponent } from '@vue/runtime-core'
import ComponentFallback from './themes/fallback/base-file-input.vue'

const themes = {
  main: defineAsyncComponent(() => import('./themes/main/base-file-input.vue')),
  passport: defineAsyncComponent(() => import('./themes/passport/base-file-input.vue'))
}

export default defineComponent({
  name: 'BaseFileInputEntry',
  components: {
    ComponentFallback
  },
  setup() {
    const { theme } = useTheme()

    return {
      theme
    }
  },
  computed: {
    entryComponent() {
      return themes[this.theme] || themes.main
    },
  },
})
</script>
