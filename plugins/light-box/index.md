# Slider

```ts
import lightBox from '/-/plugins/light-box'

app.use(lightBox)
```

<div class="h-12"></div>

<div class="mt-4 space-x-2">
    <base-button @click="$refs.lightBox.open()">Open Light Box</base-button>
</div>

<base-light-box ref="lightBox"
                :images="images"></base-light-box>

```vue
<BaseLightBox ref="lightBox"
              :images="['{url}', '{url}']" />
```

<div class="h-12"></div>

## Open slide

<div class="mt-4 flex">
  <template v-for="(image, idx) in images"
            :key="idx">
    <div class="p-3 w-1/4">
      <BaseRatio size="cover"
                 class="rounded-md cursor-pointer"
                 :src="image"
                 @click="$refs.lightBox.open(idx)"></BaseRatio>
    </div>
  </template>
</div>

```ts
this.$refs.lightBox.open(1)
```

<div class="h-12"></div>

## Methods

```ts
this.$refs.lightBox.open()
```

| Method | Description                        |
| ------ | ---------------------------------- |
| `open` | Open light box, can pass slide idx |

<script>
export default {
  data () {
    return {
      images: [
        'https://images.pexels.com/photos/4928726/pexels-photo-4928726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/7969590/pexels-photo-7969590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/7448045/pexels-photo-7448045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/6727544/pexels-photo-6727544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ],
    }
  },
}
</script>
