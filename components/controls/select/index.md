# Select

<div class="mt-4">
    <base-select v-model="select1"
                 label="Select Label"
                 :options="[{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]"></base-select>
</div>

```html
<BaseSelect label="Select Label"
            :options="[{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]"/>
```

<div class="h-12"></div>

## States

Use attribute `loading`, `disabled`, `required`

```html
<BaseSelect label="Select Label"
            disabled />
```

| Param    | Look                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| loading  | <base-select class="w-40" label="Select" loading :options="[]"></base-select>  |
| required | <base-select class="w-40" label="Select" required :options="[]"></base-select> |
| disabled | <base-select class="w-40" label="Select" disabled :options="[]"></base-select> |

<div class="h-12"></div>

## Multiple

Use attribute `multiple` and array for v-model

<div class="mt-4">
    <base-select v-model="select1"
                 multiple
                 label="Select Label"
                 placeholder="Click To Select"
                 :options="[{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]"></base-select>
</div>

```html
<BaseSelect label="Select Label"
            multiple />
```

<div class="h-12"></div>

## Empty

Use attribute `empty`

<div class="mt-4">
    <base-select v-model="select1"
                 empty="Empty Item"
                 label="Select Label"
                 :options="[{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]"></base-select>
</div>

```html
<BaseSelect label="Select Label"
            empty="Empty Item" />
```

<script>
export default {
  data () {
    return {
      select1: '',
      select2: [],
      select3: ''
    }
  }
}
</script>
