# Toggle

<div class="mt-4">
    <base-toggle label="Input Label"></base-toggle>
</div>

```html
<BaseToggle label="Input Label" />
```

<div class="h-12"></div>

## States

Use attribute `disabled`, `required`

```html
<BaseToggle label="Input Label"
              disabled />
```

| Param    | Look                                                                      |
| -------- | ------------------------------------------------------------------------- |
| disabled | <base-toggle class="w-40" disabled label="Input Label"></base-toggle> |
| required | <base-toggle class="w-40" required label="Input Label"></base-toggle> |

<div class="h-12"></div>

## Themes

Use attribute `theme`

```html
<BaseToggle label="Input Label"
              theme="primary" />
```

| Param       | Look                                                                             |
| ----------- | -------------------------------------------------------------------------------- |
| primary     | <base-toggle class="w-40" theme="primary" label="Input Label"></base-toggle>     |
| success     | <base-toggle class="w-40" theme="success" label="Input Label"></base-toggle>     |
| destructive | <base-toggle class="w-40" theme="destructive" label="Input Label"></base-toggle> |
| info        | <base-toggle class="w-40" theme="info" label="Input Label"></base-toggle>        |

<div class="h-12"></div>

## Error

Use attribute `error`

<div class="mt-4">
    <base-toggle error="Some error text" label="Input Label"></base-toggle>
</div>

```html
<BaseToggle label="Input Label"
              error="Some error text" />
```
