# Slider

```ts
import slider from '/-/plugins/slider'

app.use(slider)
```

<div class="h-12"></div>

<div class="mt-4">
  <base-slider>
    <template v-for="idx in 20" :key="idx">
      <base-slider-item class="w-1/4">
        <div class="px-2">
          <BaseRatio class="bg-gray-100 rounded-md">
            Slide {{ idx }}
          </BaseRatio>
        </div>
      </base-slider-item>
    </template>
  </base-slider>
</div>

```html
<BaseSlider>
  <BaseSliderItem class="w-full">
    ...
  </BaseSliderItem>
</BaseSlider>
```

<div class="h-12"></div>

## Navigation

Use attribute `show-nav`

<div class="mt-4">
  <base-slider show-nav>
    <template v-for="idx in 3" :key="idx">
      <base-slider-item class="w-full">
        <div class="px-2">
          <BaseRatio :ratio="9/16" class="bg-gray-100 rounded-md">
            Slide {{ idx }}
          </BaseRatio>
        </div>
      </base-slider-item>
    </template>
  </base-slider>
</div>

```html
<BaseSlider show-nav />
```
