# Tabs

<div class="mt-4">
  <base-tabs :tabs-options="tabs">
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

{{ tab }}

```html
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

## Fill

Use attribute `fill`

<div class="mt-4">
  <base-tabs :tabs-options="tabs" fill>
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

```html
<BaseTabs fill />
```

<div class="h-12"></div>

## Events And Value

Use attribute `v-model` an `change`

Selected tab: {{ tab }}

<div class="mt-4">
  <base-tabs :tabs-options="tabs" v-model="tab">
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

```html
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
