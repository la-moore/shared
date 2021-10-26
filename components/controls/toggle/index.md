# Toggle

<div class="mt-4">
    <base-toggle label="Toggle Label" description="Toggle Description"></base-toggle>
</div>

```vue
<BaseToggle label="Toggle Label"
            description="Toggle Description" />
```

<div class="h-12"></div>

## States

Use attribute `disabled`, `required`

```vue
<BaseToggle label="Toggle Label"
            disabled />
```

| Param    | Look                                                                   |
| -------- | ---------------------------------------------------------------------- |
| disabled | <base-toggle class="w-40" disabled label="Toggle Label"></base-toggle> |
| required | <base-toggle class="w-40" required label="Toggle Label"></base-toggle> |

<div class="h-12"></div>

## Look

Use attribute `look`

```vue
<BaseToggle label="Toggle Label"
            look="primary" />

<BaseToggle label="Toggle Label"
            look="bg-green-200" />
```

| Param       | Look                                                                              |
| ----------- | --------------------------------------------------------------------------------- |
| secondary   | <base-toggle class="w-40" look="secondary" label="Toggle Label"></base-toggle>    |
| primary     | <base-toggle class="w-40" look="primary" label="Toggle Label"></base-toggle>      |
| success     | <base-toggle class="w-40" look="success" label="Toggle Label"></base-toggle>      |
| destructive | <base-toggle class="w-40" look="destructive" label="Toggle Label"></base-toggle>  |
| info        | <base-toggle class="w-40" look="info" label="Toggle Label"></base-toggle>         |
| warning     | <base-toggle class="w-40" look="warning" label="Toggle Label"></base-toggle>      |
| custom      | <base-toggle class="w-40" look="bg-green-200" label="Toggle Label"></base-toggle> |

<div class="h-12"></div>

## Error

Use attribute `error`

<div class="mt-4">
    <base-toggle error="Some error text" label="Toggle Label"></base-toggle>
</div>

```vue
<BaseToggle label="Toggle Label"
            error="Some error text" />
```

<div class="h-12"></div>

## Icons

Use slots `active`, `inactive`

<div class="mt-4">
  <base-toggle label="Toggle Label">
    <template #active>
      <base-icon name="solid/check-circle" size="w-full h-full"></base-icon>
    </template>
    <template #inactive>
      <base-icon name="solid/x-circle" size="w-full h-full"></base-icon>
    </template>
  </base-toggle>
</div>

```vue
<BaseToggle label="Toggle Label">
  <template #active>
    <BaseIcon name="solid/check-circle"
              size="w-full h-full" />
  </template>
  
  <template #inactive>
    <BaseIcon name="solid/x-circle"
              size="w-full h-full" />
  </template>
</BaseToggle>
```
