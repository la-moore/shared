# Ratio

Can use any Tailwind CSS utilities for controlling the element.

<div class="mt-4 flex -mx-3">
  <div v-for="i in 4"
       :key="i"
       class="w-1/4 px-3">
    <base-ratio class="bg-gray-100 rounded-md">1x1</base-ratio>
  </div>
</div>

```vue
<div class="w-12">
  <BaseRatio />
</div>
```

<div class="h-12"></div>

## Ratio

Use attribute `ratio`

```vue
<BaseRatio :ratio="9/16" />
```

<div class="mt-4">
  <base-ratio :ratio="9/16" class="bg-gray-100 rounded-md"></base-ratio>
</div>

<div class="h-12"></div>

## Background

Use attribute `src`

```vue
  <BaseRatio src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
```

<div class="mt-4">
  <base-ratio :ratio="9/16" size="cover" src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-gray-100 rounded-md"></base-ratio>
</div>

<div class="h-12"></div>

## Background Size

Use attribute `size`

```vue
<div class="w-12">
  <BaseRatio src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
</div>
```

| Param   | Size       | Look                                                                                                                                                                                       |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contain | bg-contain | <base-ratio size="contain" src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-gray-300 rounded-md"></base-ratio> |
| cover   | bg-cover   | <base-ratio size="cover" src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="bg-gray-300 rounded-md"></base-ratio>   |

<div class="h-12"></div>

## Overlay

```vue
<BaseRatio>
  Overlay content
</BaseRatio>
```

<div class="mt-4">
  <base-ratio :ratio="9/16" class="bg-gray-100 rounded-md">Overlay content</base-ratio>
</div>
