# Input

<div class="mt-4">
    <base-input label="Input Label"></base-input>
</div>

```vue
<BaseInput label="Input Label"/>
```

<div class="h-12"></div>

## States

Use attribute `disabled`, `required`, `error`

```vue
<BaseInput label="Input Label"
           disabled/>
```

| Param    | Look                                                                         |
|----------|------------------------------------------------------------------------------|
| required | <base-input class="w-40" required label="Input Label"></base-input>          |
| disabled | <base-input class="w-40" disabled label="Input Label"></base-input>          |
| error    | <base-input class="w-40" error="Some text" label="Input Label"></base-input> |

<div class="h-12"></div>

## Looks

Use attribute `look``

```vue
<BaseInput label="Input Label"
           look="main"/>
```

| Param       | Look                                                                          |
|-------------|-------------------------------------------------------------------------------|
| disabled    | <base-input class="w-40" look="disabled" label="Input Label"></base-input>    |
| main        | <base-input class="w-40" look="main" label="Input Label"></base-input>        |
| primary     | <base-input class="w-40" look="primary" label="Input Label"></base-input>     |
| destructive | <base-input class="w-40" look="destructive" label="Input Label"></base-input> |
| success     | <base-input class="w-40" look="success" label="Input Label"></base-input>     |

<div class="h-12"></div>

## Type

Use attribute `type` like html input type

<div class="mt-4">
    <base-input v-model="pass" type="password" label="Input Label"></base-input>
</div>

```vue
<BaseInput label="Input Label"
           type="password"/>
```

<div class="h-12"></div>

## Placeholder

Use attribute `placeholder` like html input placeholder

<div class="mt-4">
    <base-input placeholder="Type here..." label="Input Label"></base-input>
</div>

```vue
<BaseInput label="Input Label"
           placeholder="Type here..."/>
```

<div class="h-12"></div>

## Error

Use attribute `error`

<div class="mt-4">
    <base-input error="Some error text" label="Input Label"></base-input>
</div>

```vue
<BaseInput label="Input Label"
           error="Some error text"/>
```

<div class="h-12"></div>

## Max Length

Use attribute `maxlength`

<div class="mt-4">
    <base-input v-model="maxlength" :maxlength="25" label="Input Label"></base-input>
</div>

```vue
<BaseInput label="Input Label"
           :maxlength="25"/>
```

<div class="h-12"></div>

## Slots

Use slot `left`, `right`

<div class="mt-4 grid space-y-3">
    <base-input label="Input Label">
        <template #left>
            <base-button class="pointer-events-none"
                         look="link"
                         color="current"
                         size="md"
                         rounded="rounded-l-md">
                Right
            </base-button>
        </template>
        <template #right>
            <base-button size="square-md"
                         rounded="rounded-r-md">
                <search-icon></search-icon>
            </base-button>
        </template>
    </base-input>
</div>

```vue
<BaseInput label="Input Label">
  <template #left>
    <BaseButton class="pointer-events-none"
                look="link"
                color="current"
                size="md"
                rounded="rounded-l-md">
      Right
    </BaseButton>
  </template>
  
  <template #right>
    <BaseButton size="square-md"
                rounded="rounded-r-md">
      <SearchIcon />
    </BaseButton>
  </template>
</BaseInput>
```

<script>
import { SearchIcon } from '@scarlab/icons-vue/outline';

export default {
  components: { SearchIcon },
  data () {
    return {
      maxlength: '',
      pass: ''
    }
  }
}
</script>
