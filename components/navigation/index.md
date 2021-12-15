# Navigation

<div class="mt-4">
    <base-navigation v-model="selected" :menu="menu"></base-navigation>
</div>

```vue
<BaseNavigation v-model="selected"
                :menu="menu" />
```

<div class="h-12"></div>

## Looks

Use attribute `look`

```vue
<BaseNavigation look="secondary"
                :menu="menu" />
```

| Param         | Look                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| secondary     | <base-navigation :value="selected" look="secondary" :menu="menuSm"></base-navigation>   |
| primary       | <base-navigation :value="selected" look="primary" :menu="menuSm"></base-navigation>     |
| success       | <base-navigation :value="selected" look="success" :menu="menuSm"></base-navigation>     |
| destructive   | <base-navigation :value="selected" look="destructive" :menu="menuSm"></base-navigation> |
| info          | <base-navigation :value="selected" look="info" :menu="menuSm"></base-navigation>        |
| warning       | <base-navigation :value="selected" look="warning" :menu="menuSm"></base-navigation>     |

<div class="h-12"></div>

## Rounded

Use attribute `rounded`

```vue
<BaseNavigation rounded="normal"
                :menu="menu" />
```

| Param   | Look                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| normal  | <base-navigation :value="selected" rounded="normal" :menu="menuSm"></base-navigation> |
| sm      | <base-navigation :value="selected" rounded="sm" :menu="menuSm"></base-navigation>     |
| md      | <base-navigation :value="selected" rounded="md" :menu="menuSm"></base-navigation>     |
| lg      | <base-navigation :value="selected" rounded="lg" :menu="menuSm"></base-navigation>     |
| full    | <base-navigation :value="selected" rounded="full" :menu="menuSm"></base-navigation>   |

<div class="h-12"></div>

## Badge Style

Use attribute `rounded`

```vue
<BaseNavigation badgeLook="bg-green-200 text-green-600"
                badgeSize="w-6 leading-6 text-center"
                badgeRounded="rounded-md"
                :menu="menu" />
```

<base-navigation badgeLook="bg-green-200 text-green-600" badgeSize="w-6 text-center leading-6" badgeRounded="rounded-md" :menu="menuSm"></base-navigation>

<script>
import { HomeIcon, UsersIcon, FolderIcon, CalendarIcon, DocumentIcon } from '@scarlab/icons-vue/outline';

export default {
  data () {
    return {
      selected: 'dashboard',
      menu: [
        {
          label: 'Dashboard',
          value: 'dashboard',
          icon: HomeIcon
        },
        {
          label: 'Team',
          value: 'team',
          icon: UsersIcon
        },
        {
          label: 'Projects',
          value: 'projects',
          icon: FolderIcon,
          badge: '12'
        },
        {
          label: 'Calendar',
          value: 'calendar',
          group: 'else',
        },
        {
          label: 'Documents',
          value: 'documents',
          group: 'else',
        }
      ],
      menuSm: [
        {
          label: 'Dashboard',
          value: 'dashboard',
          icon: HomeIcon,
          badge: '12'
        }
      ]
    }
  }
}
</script>
