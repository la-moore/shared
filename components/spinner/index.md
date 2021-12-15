# Spinner

Can use any Tailwind CSS utilities for controlling the element.

<div class="my-10 flex justify-center">
    <base-spinner></base-spinner>
</div>

```vue
<BaseSpinner />
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
<BaseSpinner size="md" />
<BaseSpinner size="h-12 w-12" />
```

| Param   | Size      | Look                              |
| ------- | --------- | --------------------------------- |
| xs      | h-4 w-4   | <base-spinner size="xs" />        |
| sm      | h-5 w-5   | <base-spinner size="sm" />        |
| md      | h-6 w-6   | <base-spinner size="md" />        |
| lg      | h-8 w-8   | <base-spinner size="lg" />        |
| xl      | h-10 w-10 | <base-spinner size="xl" />        |
| custom  | -         | <base-spinner size="h-12 w-12" /> |


<div class="h-12"></div>

## Content

Use slot `default`

```vue
<BaseSpinner size="md">
  <CubeTransparentIcon class="w-full h-full" />
</BaseSpinner>
```

<div class="my-10 flex justify-center">
  <base-spinner size="xl">
    <cube-transparent-icon class="w-full h-full"></cube-transparent-icon>
  </base-spinner>
</div>

<script>
import { CubeTransparentIcon } from '@scarlab/icons-vue/outline';

export default {
components: { CubeTransparentIcon }
}
</script>
