# Menu

<div class="my-10">
    <base-menu class="relative" :menu="menu">
        <base-button>Click to open</base-button>
    </base-menu>
</div>

```vue
<BaseMenu :menu="menu">
  <BaseButton>Menu</BaseButton>
</BaseMenu>
```

<div class="h-12"></div>

## Custom Menu

Use slot `menu`

```vue
<BaseMenu size="md">
<BaseButton>Menu</BaseButton>

<template #menu>
  <div class="py-1">
    <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
      Item 1
    </div>
    <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
      Item 2
    </div>
  </div>
  <div class="py-1">
    <div class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
      Item 3
    </div>
  </div>
</template>
</BaseMenu>
```

<div class="my-10">
    <base-menu size="md">
        <base-button>Click to open</base-button>
        <template #menu>
            <div class="py-1">
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 1
              </div>
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 2
              </div>
            </div>
            <div class="py-1">
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 3
              </div>
            </div>
        </template>
    </base-menu>
</div>

<script>
export default {
  data () {
    return {
      selected: 'dashboard',
      menu: [
        {
          label: 'Dashboard',
          value: 'dashboard',
          icon: 'outline/home'
        },
        {
          label: 'Team',
          value: 'team',
          icon: 'outline/users'
        },
        {
          label: 'Projects',
          value: 'projects',
          icon: 'outline/folder',
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
      ]
    }
  }
}
</script>
