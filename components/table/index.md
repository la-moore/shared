# Table

<div class="mt-4">
    <base-table :processor="list"
                :cols="[{ label: '#', param: 'id' }, { label: 'Name', param: 'name', main: true }]" />
</div>

```html
<div class="w-12">
  <BaseTable :processor="processor"
             :cols="cols" />
</div>
```

```js
export default {
  data () {
    return {
      cols: [
        { label: '#', param: 'id' },
        { label: 'Name', param: 'name', main: true }
      ],
      processor: new ProcessorElastic({
        fetch: () => {
          return {
            items: [
              { id: 1, name: 'String 1' },
              { id: 2, name: 'String 2' }
            ]
          }
        }
      })
    }
  }
}
```

<div class="h-12"></div>

## Without pagination

Use attribute `hide-footer`

<div class="mt-4">
    <base-table :processor="list"
                hide-footer
                :cols="[{ label: '#', param: 'id' }, { label: 'Name', param: 'name', main: true }]" />
</div>

```html
<div class="w-12">
  <BaseTable :processor="processor"
             :cols="cols"
             hide-footer />
</div>
```

<div class="h-12"></div>

## Columns

Use attribute `hide-footer`

```ts
interface TableCol {
  label: string,
  param: string,
  main?: boolean,
  className?: string,
  align?: 'left' | 'center' | 'right',
  whitespace?: 'nowrap' | 'wrap',
}
```

| Param      | Look                         |
| ---------- | ---------------------------- |
| label      | Column title in table header |
| param      | Param from data mapping      |
| main       | Set column max width in row  |
| className  | Custom column classes        |
| align      | Text alignment               |
| whitespace | Text whitespace              |

<div class="h-12"></div>

## Localization

Use attribute `locale`

```ts
interface Locale {
  next: string
  previous: string
  table_empty: string
  table_empty_description: string
}
```

<div class="h-12"></div>

## On Update

Use event `update`

```html
<div class="w-12">
  <BaseTable :processor="processor"
             :cols="cols"
             @update="(page) => $router.push({ query: { page }})" />
</div>
```

<script>
import ProcessorElastic from '/-/plugins/processor/processor-elastic';

export default {
  data () {
    return {
      list: new ProcessorElastic({
        fetch: () => {
          return {
            data: [
              { id: 1, name: 'String 1' },
              { id: 1, name: 'String 1' },
              { id: 1, name: 'String 1' },
              { id: 1, name: 'String 1' },
              { id: 1, name: 'String 1' },
              { id: 1, name: 'String 1' },
            ],
            meta: {
              last_page: 4,
              per_page: 2,
              current_page: 1,
              total: 54,
            }
          }
        }
      })
    }
  },
  mounted() {
    this.list.getPage(1);
  }
}
</script>
