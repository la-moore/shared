# Avatar

<div class="mt-4">
    <base-avatar title="Title"
                 text="Text"></base-avatar>
</div>

```html
<BaseAvatar title="Title"
            text="Text" />
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```html
<BaseAvatar size="md" />
```

| Param | Look                                                  |
| ----- | ----------------------------------------------------- |
| sm    | <base-avatar size="sm" title="Title"></base-avatar>   |
| md    | <base-avatar size="md" title="Title"></base-avatar>   |
| lg    | <base-avatar size="lg" title="Title"></base-avatar>   |
| xl    | <base-avatar size="xl" title="Title"></base-avatar>   |
| 2xl    | <base-avatar size="2xl" title="Title"></base-avatar> |
| 3xl    | <base-avatar size="3xl" title="Title"></base-avatar> |
| 4xl    | <base-avatar size="4xl" title="Title"></base-avatar> |

<div class="h-12"></div>

## Rounded

Use attribute `rounded`

```html
<BaseAvatar rounded="normal" />
```

| Param   | Look                                                       |
| ------- | ---------------------------------------------------------- |
| normal  | <base-avatar rounded="normal" title="Title"></base-avatar> |
| sm      | <base-avatar rounded="sm" title="Title"></base-avatar>     |
| md      | <base-avatar rounded="md" title="Title"></base-avatar>     |
| lg      | <base-avatar rounded="lg" title="Title"></base-avatar>     |
| full    | <base-avatar rounded="full" title="Title"></base-avatar>   |

<div class="h-12"></div>

## Icon

Use attribute `icon`

<div class="mt-4">
    <base-avatar title="Title"
                 text="Text"
                 icon="outline_badge_check"></base-avatar>
</div>

```html
<BaseAvatar icon="outline_badge_check" />
```

<div class="h-12"></div>

## Classes

Use attribute `class`, `stub-class`, `avatar-class`

<div class="mt-4">
    <base-avatar title="Title"
                 text="Text"
                 class="text-primary-500"
                 stub-class="bg-primary-300 p-1 text-primary-700"></base-avatar>
</div>

```html
<BaseAvatar class="text-primary-500"
            stub-class="bg-primary-300 text-primary-700" />
```

<div class="h-12"></div>

## Badge

Use slot `badge`

<div class="mt-4">
    <base-avatar title="Title"
                 text="Text">
  <template #badge>
    <div class="bg-white p-0.5 text-green-500 rounded-full absolute right-0 top-0 -mt-2 -mr-2">
      <BaseIcon name="solid_check_circle"
                size="sm" />
    </div>
  </template>
</base-avatar>
</div>

```html
<BaseAvatar class="text-primary-500"
            stub-class="bg-primary-300 text-primary-700">
  <template #badge>
    <div class="bg-white p-0.5 text-green-500 rounded-full absolute right-0 top-0 -mt-2 -mr-2">
      <BaseIcon name="solid_check_circle"
                size="sm" />
    </div>
  </template>
</BaseAvatar>
```
