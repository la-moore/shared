# Color Picker

```ts
import colorPicker from '/-/plugins/color-picker'

app.use(colorPicker)
```

<div class="mt-4">
    <base-color-picker label="Input Label" v-model="color"></base-color-picker>
</div>


<script>
export default {
  data () {
    return {
      color: ''
    }
  }
}
</script>
