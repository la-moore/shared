# Button

<div class="mt-4">
    <base-button>Press me</base-button>
</div>

```vue
<BaseButton>Button</BaseButton>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
<BaseButton size="md">Button</BaseButton>
<BaseButton size="leading-8 px-10">Button</BaseButton>
```

| Param     | Size      | Look                                                     |
| --------- | --------- | -------------------------------------------------------- |
| xs        | h-6 px-2  | <base-button size="xs">Button</base-button>              |
| sm        | h-8 px-4  | <base-button size="sm">Button</base-button>              |
| md        | h-10 px-4 | <base-button size="md">Button</base-button>              |
| lg        | h-12 px-4 | <base-button size="lg">Button</base-button>              |
| xl        | h-14 px-6 | <base-button size="xl">Button</base-button>              |
| square-xs | h-6 w-6   | <base-button size="square-xs">B</base-button>            |
| square-sm | h-8 w-8   | <base-button size="square-sm">B</base-button>            |
| square-md | h-10 w-10 | <base-button size="square-md">B</base-button>            |
| square-lg | h-12 w-12 | <base-button size="square-lg">B</base-button>            |
| square-xl | h-14 w-14 | <base-button size="square-xl">B</base-button>            |
| custom    | -         | <base-button size="leading-8 px-10">Button</base-button> |

<div class="h-12"></div>

## States

Use attribute `loading`, `disabled`

```vue
<BaseButton loading>Button</BaseButton>
```

| Param    | Look                                       |
| -------- | ------------------------------------------ |
| loading  | <base-button loading>Button</base-button>  |
| disabled | <base-button disabled>Button</base-button> |

<div class="h-12"></div>

## Rounded

Use attribute `rounded`

```vue
<BaseButton rounded="md">Button</BaseButton>
<BaseButton rounded="rounded-t-md">Button</BaseButton>
```

| Param   | Look                                                               |
| ------- | ------------------------------------------------------------------ |
| normal  | <base-button size="sm" rounded="normal">Button</base-button>       |
| sm      | <base-button size="sm" rounded="sm">Button</base-button>           |
| md      | <base-button size="sm" rounded="md">Button</base-button>           |
| lg      | <base-button size="sm" rounded="lg">Button</base-button>           |
| full    | <base-button size="sm" rounded="full">Button</base-button>         |
| custom  | <base-button size="sm" rounded="rounded-t-md">Button</base-button> |

<div class="h-12"></div>

## Justify

Use attribute `justify`

```vue
<BaseButton justify="center">Button</BaseButton>
```

| Param   | Look                                                                      |
| ------- | ------------------------------------------------------------------------- |
| center  | <base-button size="sm" class="w-40" justify="center">Button</base-button> |
| start   | <base-button size="sm" class="w-40" justify="start">Button</base-button>  |
| end     | <base-button size="sm" class="w-40" justify="end">Button</base-button>    |

<div class="h-12"></div>

## Looks

Use attribute `look` and `color`

### Solid

```vue
<BaseButton look="solid"
            color="primary">
  Button
</BaseButton>
```

| Param       | Look                                                            |
| ----------- | --------------------------------------------------------------- |
| white       | <base-button size="sm" color="white">Button</base-button>       |
| dark        | <base-button size="sm" color="dark">Button</base-button>        |
| disabled    | <base-button size="sm" color="disabled">Button</base-button>    |
| primary     | <base-button size="sm" color="primary">Button</base-button>     |
| secondary   | <base-button size="sm" color="secondary">Button</base-button>   |
| success     | <base-button size="sm" color="success">Button</base-button>     |
| destructive | <base-button size="sm" color="destructive">Button</base-button> |
| info        | <base-button size="sm" color="info">Button</base-button>        |

### Ghost

```vue
<BaseButton look="ghost"
            color="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                         |
| ----------- | ---------------------------------------------------------------------------- |
| white       | <base-button size="sm" look="ghost" color="white">Button</base-button>       |
| primary     | <base-button size="sm" look="ghost" color="primary">Button</base-button>     |
| success     | <base-button size="sm" look="ghost" color="success">Button</base-button>     |
| destructive | <base-button size="sm" look="ghost" color="destructive">Button</base-button> |
| info        | <base-button size="sm" look="ghost" color="info">Button</base-button>        |

### Link

```vue
<BaseButton look="link"
            color="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| current     | <base-button size="sm" look="current" color="info">Button</base-button>     |
| white       | <base-button size="sm" look="link" color="white">Button</base-button>       |
| primary     | <base-button size="sm" look="link" color="primary">Button</base-button>     |
| success     | <base-button size="sm" look="link" color="success">Button</base-button>     |
| destructive | <base-button size="sm" look="link" color="destructive">Button</base-button> |
| info        | <base-button size="sm" look="link" color="info">Button</base-button>        |

### Border

```vue
<BaseButton look="border"
            color="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                          |
| ----------- | ----------------------------------------------------------------------------- |
| white       | <base-button size="sm" look="border" color="white">Button</base-button>       |
| primary     | <base-button size="sm" look="border" color="primary">Button</base-button>     |
| success     | <base-button size="sm" look="border" color="success">Button</base-button>     |
| destructive | <base-button size="sm" look="border" color="destructive">Button</base-button> |
| info        | <base-button size="sm" look="border" color="info">Button</base-button>        |


### Custom

```vue
<BaseButton look="bg-green-300 text-green-700">
  Button
</BaseButton>
```

| Param       | Look                                                                           |
| ----------- | ------------------------------------------------------------------------------ |
| custom      | <base-button size="sm" look="bg-green-300 text-green-700">Button</base-button> |

<div class="h-12"></div>

## With Icons

```vue
<BaseButton>
  <CheckIcon />
  <span class="px-2">Button</span>
  <ArrowRightIcon />
</BaseButton>
```

<div class="mt-4">
  <base-button>
    <check-icon></check-icon>
    <span class="px-2">Button</span>
    <arrow-right-icon></arrow-right-icon>
  </base-button>
</div>

<script>
import { CheckIcon, ArrowRightIcon } from '@scarlab/icons-vue/outline';

export default {
  components: { CheckIcon, ArrowRightIcon }
}
</script>
