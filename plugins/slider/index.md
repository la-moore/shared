# Slider

```ts
import slider from '/-/plugins/slider'

app.use(slider)
```

<div class="h-12"></div>

<div class="mt-4">
  <base-slider group-slides>
    <template v-for="idx in 20" :key="idx">
      <base-slider-item class="w-1/4">
        <div class="px-1">
          <BaseRatio class="bg-gray-300 font-medium rounded-md">
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

## Hide Navigation

Use attribute `hide-nav`, `hide-dots`

<div class="mt-4">
  <base-slider hide-nav hide-dots>
    <template v-for="idx in 3" :key="idx">
      <base-slider-item class="w-full">
          <BaseRatio :ratio="9/16" class="bg-gray-300 font-medium rounded-md">
            Slide {{ idx }}
          </BaseRatio>
      </base-slider-item>
    </template>
  </base-slider>
</div>

```html
<BaseSlider hide-nav />
```

<div class="h-12"></div>

<div class="h-12"></div>

## Snap

Use attribute `snap`

<div class="mt-4">
  <base-slider show-nav>
    <template v-for="idx in 3" :key="idx">
      <base-slider-item snap="center" class="w-4/6">
        <div class="px-1">
          <BaseRatio :ratio="9/16" class="bg-gray-300 font-medium rounded-md">
            Slide {{ idx }}
          </BaseRatio>
        </div>
      </base-slider-item>
    </template>
  </base-slider>
</div>

```html
<BaseSliderItem snap="center" />
```

| Param   | Position           |
| ------- | ------------------ |
| start   | scroll-snap-start  |
| center  | scroll-snap-center |
| end     | scroll-snap-end    |
