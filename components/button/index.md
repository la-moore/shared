# Button

<div class="mt-4">
    <base-button>Press me</base-button>
</div>

```html
<BaseButton>Button</BaseButton>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```html
<BaseButton size="md">Button</BaseButton>
```

| Param | Size      | Look                                        |
| ----- | --------- | ------------------------------------------- |
| xs    | h-6 px-2  | <base-button size="xs">Button</base-button> |
| sm    | h-8 px-4  | <base-button size="sm">Button</base-button> |
| md    | h-10 px-4 | <base-button size="md">Button</base-button> |
| lg    | h-12 px-4 | <base-button size="lg">Button</base-button> |
| xl    | h-14 px-6 | <base-button size="xl">Button</base-button> |

<div class="h-12"></div>

## States

Use attribute `loading`, `disabled`

```html
<BaseButton loading>Button</BaseButton>
```

| Param    | Look                                       |
| -------- | ------------------------------------------ |
| loading  | <base-button loading>Button</base-button>  |
| disabled | <base-button disabled>Button</base-button> |

<div class="h-12"></div>

## Rounded

Use attribute `rounded`

```html
<BaseButton rounded="md">Button</BaseButton>
```

| Param   | Look                                             |
| ------- | ------------------------------------------------ |
| normal  | <base-button size="sm" rounded="normal">Button</base-button>  |
| sm      | <base-button size="sm" rounded="sm">Button</base-button>      |
| md      | <base-button size="sm" rounded="md">Button</base-button>      |
| lg      | <base-button size="sm" rounded="lg">Button</base-button>      |
| full    | <base-button size="sm" rounded="full">Button</base-button>    |

<div class="h-12"></div>

## Justify

Use attribute `justify`

```html
<BaseButton justify="center">Button</BaseButton>
```

| Param   | Look                                                                      |
| ------- | ------------------------------------------------------------------------- |
| center  | <base-button size="sm" class="w-40" justify="center">Button</base-button> |
| start   | <base-button size="sm" class="w-40" justify="start">Button</base-button>  |
| end     | <base-button size="sm" class="w-40" justify="end">Button</base-button>    |

<div class="h-12"></div>

## Themes

Use attribute `look` and `theme`

### Solid

```html
<BaseButton look="solid"
            theme="primary">
  Button
</BaseButton>
```

| Param       | Look                                                            |
| ----------- | --------------------------------------------------------------- |
| white       | <base-button size="sm" theme="white">Button</base-button>       |
| dark        | <base-button size="sm" theme="dark">Button</base-button>        |
| disabled    | <base-button size="sm" theme="disabled">Button</base-button>    |
| primary     | <base-button size="sm" theme="primary">Button</base-button>     |
| secondary   | <base-button size="sm" theme="secondary">Button</base-button>   |
| success     | <base-button size="sm" theme="success">Button</base-button>     |
| destructive | <base-button size="sm" theme="destructive">Button</base-button> |
| info        | <base-button size="sm" theme="info">Button</base-button>        |

### Ghost

```html
<BaseButton look="ghost"
            theme="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                         |
| ----------- | ---------------------------------------------------------------------------- |
| white       | <base-button size="sm" look="ghost" theme="white">Button</base-button>       |
| primary     | <base-button size="sm" look="ghost" theme="primary">Button</base-button>     |
| success     | <base-button size="sm" look="ghost" theme="success">Button</base-button>     |
| destructive | <base-button size="sm" look="ghost" theme="destructive">Button</base-button> |
| info        | <base-button size="sm" look="ghost" theme="info">Button</base-button>        |

### Link

```html
<BaseButton look="link"
            theme="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| white       | <base-button size="sm" look="link" theme="white">Button</base-button>       |
| primary     | <base-button size="sm" look="link" theme="primary">Button</base-button>     |
| success     | <base-button size="sm" look="link" theme="success">Button</base-button>     |
| destructive | <base-button size="sm" look="link" theme="destructive">Button</base-button> |
| info        | <base-button size="sm" look="link" theme="info">Button</base-button>        |

### Border

```html
<BaseButton look="border"
            theme="primary">
  Button
</BaseButton>
```

| Param       | Look                                                                          |
| ----------- | ----------------------------------------------------------------------------- |
| white       | <base-button size="sm" look="border" theme="white">Button</base-button>       |
| primary     | <base-button size="sm" look="border" theme="primary">Button</base-button>     |
| success     | <base-button size="sm" look="border" theme="success">Button</base-button>     |
| destructive | <base-button size="sm" look="border" theme="destructive">Button</base-button> |
| info        | <base-button size="sm" look="border" theme="info">Button</base-button>        |
