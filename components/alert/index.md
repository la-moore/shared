# Alert

<div class="mt-4">
    <base-alert title="Alert">I am message box</base-alert>
</div>

```html
<BaseAlert title="Alert">I am message box</BaseAlert>
```

<div class="h-12"></div>

## Themes

Use attribute `theme`

```html
<BaseAlert theme="primary">I am message box</BaseAlert>
```

| Param       | Look                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| primary     | <base-alert title="Alert" theme="primary">I am message box</base-alert>     |
| secondary   | <base-alert title="Alert" theme="secondary">I am message box</base-alert>   |
| success     | <base-alert title="Alert" theme="success">I am message box</base-alert>     |
| destructive | <base-alert title="Alert" theme="destructive">I am message box</base-alert> |
| info        | <base-alert title="Alert" theme="info">I am message box</base-alert>        |

<div class="h-12"></div>

## Icons

Use slot `icon`

<div class="mt-4">
    <base-alert title="Alert">
      <template #icon>
        <base-icon size="sm" name="solid_information_circle"></base-icon>
      </template>
      <span>I am message box</span>
    </base-alert>
</div>

```html
<BaseAlert title="Alert">
  <template #icon>
    <BaseIcon size="sm"
              name="solid_information_circle" />
  </template>
  <span>I am message box</span>
</BaseAlert>
```
