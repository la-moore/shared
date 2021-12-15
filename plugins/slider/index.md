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

```vue
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

```vue
<BaseSlider hide-nav />
```

<div class="h-12"></div>

## Snap

Use attribute `snap`

<div class="mt-4">
  <base-slider>
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

```vue
<BaseSliderItem snap="center" />
```

| Param   | Position           |
| ------- | ------------------ |
| start   | scroll-snap-start  |
| center  | scroll-snap-center |
| end     | scroll-snap-end    |

<div class="h-12"></div>

## Drag

Use attribute `can-drag`

<div class="mt-4">
  <base-slider can-drag>
    <template v-for="idx in 3" :key="idx">
      <base-slider-item class="w-full">
        <div class="px-1">
          <BaseRatio :ratio="9/16" class="bg-gray-300 font-medium rounded-md">
            Slide {{ idx }}
          </BaseRatio>
        </div>
      </base-slider-item>
    </template>
  </base-slider>
</div>

```vue
<BaseSliderItem can-drag />
```

<div class="h-12"></div>

## Slots

Use slots `nav`, `nav-dot`, `button-left`, `button-right`

```vue
<BaseSlider>
  <template #nav></template>
</BaseSlider>
```

<div class="h-12"></div>

## Methods

```vue
<BaseSlider ref="slider" />
```

```ts
this.$refs.slider.slideToNext()
```

| Method        | Description             |
| ------------- | ----------------------- |
| `slideToPrev` | Slide to previous slide |
| `slideToNext` | Slide to next slide     |
| `slideTo`     | Slide to n slide        |

<div class="h-12"></div>

## Events

```vue
<BaseSlider @change="" />
```

| Method   | Description      |
| -------- | ---------------- |
| `change` | On slide change  |
| `scroll` | On slider scroll |
