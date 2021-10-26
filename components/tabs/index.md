# Tabs

<div class="mt-4">
  <base-tabs :tabs="tabs">
    <template #first>
      <div class="py-4 px-6">
        First tab
      </div>
    </template>
    <template #second>
      <div class="py-4 px-6">
        Second tab
      </div>
    </template>
  </base-tabs>
</div>

```vue
<BaseTabs :tabs-options="tabs">
  <template #first></template>
  <template #second></template>
</BaseTabs>
```

```ts
const tabs = [
  {
    label: 'First',
    value: 'first'
  },
  {
    label: 'Second',
    value: 'second'
  }
]
```

<div class="h-12"></div>

## Look

Use attribute `look`

```vue
<BaseTabs look="primary" />
<BaseTabs look="text-blue-200" />
```

| Param       | Look                                                           |
| ----------- | -------------------------------------------------------------- |
| primary     | <base-tabs :tabs="tabs" look="primary" fill></base-tabs>       |
| secondary   | <base-tabs :tabs="tabs" look="secondary" fill></base-tabs>     |
| success     | <base-tabs :tabs="tabs" look="success" fill></base-tabs>       |
| destructive | <base-tabs :tabs="tabs" look="destructive" fill></base-tabs>   |
| info        | <base-tabs :tabs="tabs" look="info" fill></base-tabs>          |
| warning     | <base-tabs :tabs="tabs" look="warning" fill></base-tabs>       |
| custom      | <base-tabs :tabs="tabs" look="text-blue-200" fill></base-tabs> |

<div class="h-12"></div>

## Fill

Use attribute `fill`

<div class="mt-4">
  <base-tabs :tabs="tabs" fill>
    <template #first>
      <div class="py-4 px-6">
        First tab
      </div>
    </template>
    <template #second>
      <div class="py-4 px-6">
        Second tab
      </div>
    </template>
  </base-tabs>
</div>

```vue
<BaseTabs fill />
```

<div class="h-12"></div>

## Events And Value

Use attribute `v-model` an `change`

Selected tab: {{ tab }}

<div class="mt-4">
  <base-tabs :tabs="tabs" v-model="tab">
    <template #first>
      <div class="py-4 px-6">
        First tab
      </div>
    </template>
    <template #second>
      <div class="py-4 px-6">
        Second tab
      </div>
    </template>
  </base-tabs>
</div>

```vue
<BaseTabs v-model="tab" @change="onChange" />
```

<script>
export default {
  data () {
    return {
      tab: 'second',
      tabs: [
        {
          label: 'First',
          value: 'first'
        },
        {
          label: 'Second',
          value: 'second'
        }
      ]
    }
  }
}
</script>
