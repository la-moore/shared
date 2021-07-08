# Checkbox

<div class="mt-4">
    <base-checkbox label="Input Label"></base-checkbox>
</div>

```html
<BaseCheckbox label="Input Label" />
```

<div class="h-12"></div>

## States

Use attribute `disabled`, `required`

```html
<BaseCheckbox label="Input Label"
              disabled />
```

| Param    | Look                                                                      |
| -------- | ------------------------------------------------------------------------- |
| disabled | <base-checkbox class="w-40" disabled label="Input Label"></base-checkbox> |
| required | <base-checkbox class="w-40" required label="Input Label"></base-checkbox> |

<div class="h-12"></div>

## Themes

Use attribute `theme`

```html
<BaseCheckbox label="Input Label"
              theme="primary" />
```

| Param       | Look                                                                                 |
| ----------- | ------------------------------------------------------------------------------------ |
| primary     | <base-checkbox class="w-40" theme="primary" label="Input Label"></base-checkbox>     |
| success     | <base-checkbox class="w-40" theme="success" label="Input Label"></base-checkbox>     |
| destructive | <base-checkbox class="w-40" theme="destructive" label="Input Label"></base-checkbox> |
| info        | <base-checkbox class="w-40" theme="info" label="Input Label"></base-checkbox>        |

<div class="h-12"></div>

## Error

Use attribute `error`

<div class="mt-4">
    <base-checkbox error="Some error text" label="Input Label"></base-checkbox>
</div>

```html
<BaseCheckbox label="Input Label"
              error="Some error text" />
```
