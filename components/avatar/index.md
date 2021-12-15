# Avatar

<div class="mt-4">
    <base-avatar src="https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                 title="User Name"
                 text="Some Data"></base-avatar>
</div>

```vue
<BaseAvatar src="https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="User Name"
            text="Some Data" />
```

<div class="h-12"></div>

## Reverse

<div class="mt-4">
    <base-avatar title="User Name"
                 text="Some Data"
                 reverse></base-avatar>
</div>

```vue
<BaseAvatar :src="[
              'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              undefined,
              'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ]"
            title="User Name"
            text="Some Data" />
```

<div class="h-12"></div>

## Multi Avatars

<div class="mt-4">
    <base-avatar :src="[
                   'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                   undefined,
                   'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                 ]"
                 title="User Name"
                 text="Some Data"></base-avatar>
</div>

```vue
<BaseAvatar :src="[
              'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              undefined,
              'https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ]"
            title="User Name"
            text="Some Data" />
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
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

```vue
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

## Look

Use attribute `look`

```vue
<BaseAvatar look="primary" />
```

| Param       | Look                                                         |
| ----------- | ------------------------------------------------------------ |
| primary     | <base-avatar look="primary" title="Title"></base-avatar>     |
| secondary   | <base-avatar look="secondary" title="Title"></base-avatar>   |
| success     | <base-avatar look="success" title="Title"></base-avatar>     |
| destructive | <base-avatar look="destructive" title="Title"></base-avatar> |
| info        | <base-avatar look="info" title="Title"></base-avatar>        |
| warning     | <base-avatar look="warning" title="Title"></base-avatar>     |

<div class="h-12"></div>

## Icon

Use attribute `icon`

<div class="mt-4 flex space-x-1">
    <base-avatar>
      <template #icon>
        <bookmark-icon></bookmark-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <user-circle-icon></user-circle-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <phone-icon></phone-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <plus-circle-icon></plus-circle-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <check-badge-icon></check-badge-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <briefcase-icon></briefcase-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <cloud-icon></cloud-icon>
      </template>
    </base-avatar>
</div>

```vue
<BaseAvatar>
  <template #icon>
    <BookmarkIcon />
  </template>
</BaseAvatar>
```

<div class="h-12"></div>

## Icon Size

Use attribute `icon-size`

<div class="mt-4 flex space-x-1">
    <base-avatar>
      <template #icon>
        <user-circle-icon class="h-full w-full"></user-circle-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <user-circle-icon class="h-10/12 w-10/12"></user-circle-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <user-circle-icon class="h-8/12 w-8/12"></user-circle-icon>
      </template>
    </base-avatar>
    <base-avatar>
      <template #icon>
        <user-circle-icon class="h-1/2 w-1/2"></user-circle-icon>
      </template>
    </base-avatar>
</div>

```vue
<BaseAvatar>
  <template #icon>
    <UserCircleIcon class="h-full w-fuh-full" />
  </template>
</BaseAvatar>

<BaseAvatar>
  <template #icon>
    <UserCircleIcon class="h-10/12 w-10/12" />
  </template>
</BaseAvatar>

<BaseAvatar>
  <template #icon>
    <UserCircleIcon class="h-8/12 w-8/12" />
  </template>
</BaseAvatar>

<BaseAvatar>
  <template #icon>
    <UserCircleIcon class="h-1/2 w-1/2" />
  </template>
</BaseAvatar>
```

<div class="h-12"></div>

## Badge

Use slot `badge`

<div class="mt-4">
  <base-avatar title="Title"
               text="Text">
    <template #badge>
      <div class="z-10 absolute bottom-0 right-0 block border-2 border-white rounded-full">
        <div class="block h-1.5 w-1.5 rounded-full bg-green-300"></div>
      </div>
    </template>
  </base-avatar>
</div>

```vue
<BaseAvatar class="text-primary-500">
  <template #badge>
    <div class="z-10 absolute bottom-0 right-0 block border-2 border-white rounded-full">
      <div class="block h-1.5 w-1.5 rounded-full bg-green-300" />
    </div>
  </template>
</BaseAvatar>
```

<div class="h-12"></div>

## Custom Content

Use slot

<div class="mt-4">
  <base-avatar look="primary">
    <template #icon>
      <user-circle-icon class="w-full h-full"></user-circle-icon>
    </template>
    <div class="flex-1 px-3 flex flex-col truncate">
        <p class="font-medium leading-4 truncate text-primary-700 group-hover:text-primary-800">
          Some Title
        </p>
        <p class="text-xs leading-4 text-primary-500 truncate group-hover:text-primary-700">
          Some text
        </p>
      </div>
  </base-avatar>
</div>

```vue
<BaseAvatar look="primary">
  <template #icon>
    <UserCircleIcon class="w-full h-full" />
  </template>

  <div class="flex-1 px-3 flex flex-col truncate">
    <p class="font-medium leading-4 truncate text-primary-700 group-hover:text-primary-800">
      Some Title
    </p>
    <p class="text-xs leading-4 text-primary-500 truncate group-hover:text-primary-700">
      Some text
    </p>
  </div>
</BaseAvatar>
```
<script>
import { UserCircleIcon, BookmarkIcon, PhoneIcon, PlusCircleIcon, CheckBadgeIcon, BriefcaseIcon, CloudIcon } from '@scarlab/icons-vue/solid';

export default {
  components: { UserCircleIcon, BookmarkIcon, PhoneIcon, PlusCircleIcon, CheckBadgeIcon, BriefcaseIcon, CloudIcon }
}
</script>
