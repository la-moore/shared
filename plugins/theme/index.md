# Theme

```ts
import theme from '/-/plugins/theme'

app.use(theme, 'main')
```

<div class="h-12"></div>

## Usage

```ts
import { useTheme } from '/-/plugins/theme'

const { setTheme } = useTheme()

setTheme(ThemeType)
```

<div class="h-12"></div>

## Theme Types

| ThemeType   |
| ----------- |
| main        |
| exec_summit |

<div class="h-12"></div>

## Custom component theme

Create component theme bridge with any custom styles.

```sh
|-- component/
  |-- themes/
    |-- exec_summit/
      |-- base-component.vue
    |-- main/
      |-- base-component.vue
  |-- base-component.vue
```

```vue
<!-- main base-component.vue -->

<template>
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

<script>
import { useTheme } from '/-/plugins/theme'
import ThemeMain from './themes/main/base-component.vue'
import ThemeExecSummit from './themes/exec_summit/base-component.vue'

export default {
  name: 'BaseComponentEntry',
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
```
