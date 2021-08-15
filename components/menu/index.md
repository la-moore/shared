# Menu

<div class="my-10">
    <base-menu class="relative">
        <base-button>Click to open</base-button>
        <template #menu>
          <div class="w-48 mt-2 rounded-md bg-white shadow-lg divide-y divide-gray-200">
            <div class="py-1">
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 1
              </div>
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 2
              </div>
            </div>
            <div class="py-1">
              <div class="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Item 3
              </div>
            </div>
          </div>
        </template>
    </base-menu>
</div>

```html
<BaseMenu>
  <BaseButton>Menu</BaseButton>
  
  <template #menu>
    <div class="rounded-md  mt-2 bg-white shadow-lg divide-y divide-gray-200">
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
    </div>
  </template>
</BaseMenu>
```

<div class="h-12"></div>

## Level

Use attribute `level` to change z-index from 10 to 100

```html
<BaseMenu level="10"></BaseMenu>
```

<div class="h-12"></div>

## Parent

Use attribute `parent` to set parent element

```html
<BaseMenu parent="$refs.root"></BaseMenu>
```
