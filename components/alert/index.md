# Alert

<div class="mt-4">
  <base-alert title="Alert">
    You have no credits left.
    <a class="font-medium underline">
      Upgrade your account to add more credits.
    </a>
  </base-alert>
</div>

```vue
<BaseAlert title="Alert">
  You have no credits left.
  <a class="font-medium underline">
    Upgrade your account to add more credits.
  </a>
</BaseAlert>
```

<div class="h-12"></div>

## Look

Use attribute `look`

```vue
<BaseAlert look="primary">I am message box</BaseAlert>
<BaseAlert look="bg-gray-800 border-gray-600 text-gray-100">I am message box</BaseAlert>
```

| Param       | Look                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| primary     | <base-alert title="Alert" look="primary">I am message box</base-alert>                                   |
| secondary   | <base-alert title="Alert" look="secondary">I am message box</base-alert>                                 |
| success     | <base-alert title="Alert" look="success">I am message box</base-alert>                                   |
| destructive | <base-alert title="Alert" look="destructive">I am message box</base-alert>                               |
| info        | <base-alert title="Alert" look="info">I am message box</base-alert>                                      |
| warning     | <base-alert title="Alert" look="warning">I am message box</base-alert>                                   |
| custom      | <base-alert title="Alert" look="bg-gray-800 border-gray-600 text-gray-100">I am message box</base-alert> |

<div class="h-12"></div>

## Icons

Use slot `icon`

<div class="mt-4">
  <base-alert title="Alert" icon="outline/info-circle">
    I am message box
  </base-alert>
</div>

```vue
<BaseAlert title="Alert"
           icon="outline/info-circle">
  I am message box
</BaseAlert>
```
