# Textarea

<div class="mt-4">
    <base-textarea label="Textarea Label"></base-textarea>
</div>

```html
<BaseTextarea label="Textarea Label"/>
```

<div class="h-12"></div>

## States

Use attribute `disabled`, `required`, `error`

```html
<BaseTextarea label="Textarea Label"
              disabled/>
```

| Param    | Look                                                                                  |
|----------|---------------------------------------------------------------------------------------|
| disabled | <base-textarea class="w-40" disabled label="Textarea Label"></base-textarea>          |
| required | <base-textarea class="w-40" required label="Textarea Label"></base-textarea>          |
| error    | <base-textarea class="w-40" error="Some text" label="Textarea Label"></base-textarea> |

<div class="h-12"></div>

## Looks

Use attribute `look`

```html
<BaseTextarea label="Textarea Label"
              look="main"/>
```

| Param       | Look                                                                                   |
|-------------|----------------------------------------------------------------------------------------|
| main        | <base-textarea class="w-40" look="main" label="Textarea Label"></base-textarea>        |
| primary     | <base-textarea class="w-40" look="primary" label="Textarea Label"></base-textarea>     |
| destructive | <base-textarea class="w-40" look="destructive" label="Textarea Label"></base-textarea> |
| success     | <base-textarea class="w-40" look="success" label="Textarea Label"></base-textarea>     |
| disabled    | <base-textarea class="w-40" look="disabled" label="Textarea Label"></base-textarea>    |

<div class="h-12"></div>

## Placeholder

Use attribute `placeholder` like html input placeholder

<div class="mt-4">
    <base-textarea placeholder="Type here..." label="Textarea Label"></base-textarea>
</div>

```html
<BaseTextarea label="Textarea Label"
              placeholder="Type here..."/>
```

<div class="h-12"></div>

## Error

Use attribute `error`

<div class="mt-4">
    <base-textarea error="Some error text" label="Textarea Label"></base-textarea>
</div>

```html
<BaseTextarea label="Textarea Label"
              error="Some error text"/>
```

<div class="h-12"></div>

## Max Length

Use attribute `maxlength`

<div class="mt-4">
    <base-textarea v-model="maxlength" :maxlength="25" label="Textarea Label"></base-textarea>
</div>

```html
<BaseTextarea label="Textarea Label"
              :maxlength="25"/>
```

<div class="h-12"></div>

## Max Rows

Use attribute `rows-max`

<div class="mt-4">
    <base-textarea :rows-max="10" label="Textarea Label"></base-textarea>
</div>

```html
<BaseTextarea label="Textarea Label"
              :rows-max="10"/>
```

<script>
export default {
  data () {
    return {
      maxlength: ''
    }
  }
}
</script>
