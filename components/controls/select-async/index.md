# Select Async

<div class="mt-4">
    <base-select-async v-model="select1"
                       label="Select Label"
                       :fetch="fetch"></base-select-async>
</div>

```html
<BaseSelectAsync label="Select Label"
                 :fetch="fetch"/>
```

<div class="h-12"></div>

## States

Use attribute `loading`, `disabled`, `required`

```html
<BaseSelectAsync label="Select Label"
                 disabled />
```

| Param    | Look                                                                                        |
| -------- | ------------------------------------------------------------------------------------------- |
| required | <base-select-async class="w-40" label="Select" required :fetch="() => []"></base-select-async> |
| disabled | <base-select-async class="w-40" label="Select" disabled :fetch="() => []"></base-select-async> |

<div class="h-12"></div>

## Multiple

Use attribute `multiple` and array for v-model

<div class="mt-4">
    <base-select-async v-model="select1"
                       multiple
                       label="Select Label"
                       placeholder="Click To Select"
                       :fetch="fetch"></base-select-async>
</div>

```html
<BaseSelectAsync label="Select Label"
                 multiple />
```

<div class="h-12"></div>

## Empty

Use attribute `empty`

<div class="mt-4">
    <base-select-async v-model="select1"
                       empty="Empty Item"
                       label="Select Label"
                       :fetch="fetch"></base-select-async>
</div>

```html
<BaseSelectAsync label="Select Label"
                 empty="Empty Item" />
```

<script>
export default {
  data () {
    return {
      options: [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 },
        { label: 'Item 7', value: 7 },
        { label: 'Item 8', value: 8 },
        { label: 'Item 9', value: 9 },
        { label: 'Item 10', value: 10 },
        { label: 'Item 11', value: 11 },
        { label: 'Item 12', value: 12 }
      ],
      select1: '',
      select2: [],
      select3: ''
    }
  },
  methods: {
    fetch(q) {
      if (q) {
        return this.options.filter(({ label }) => label.toLowerCase().includes(q.toLowerCase()))
      }

      return this.options
    }
  }
}
</script>
