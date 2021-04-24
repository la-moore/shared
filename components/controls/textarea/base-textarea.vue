<template>
  <component :is="entryComponent"
             v-bind="$attrs"
             v-if="entryComponent" />
</template>

<script>
import { useTheme } from '/-/plugins/theme'
import ThemeMain from './themes/main/base-textarea.vue'
import ThemeExecSummit from './themes/exec_summit/base-textarea.vue'

export default {
  name: 'BaseTextareaEntry',
  setup() {
    const { theme } = useTheme()

    return {
      theme
    }
  },
  computed: {
    entryComponent() {
      if (this.theme === 'main') return ThemeMain
      else if (this.theme === 'exec_summit') return ThemeExecSummit
      return ThemeMain
    },
  },
}
</script>
