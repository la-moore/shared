# Ratio

Can use any Tailwind CSS utilities for controlling the element.

<div class="mt-4 flex -mx-3">
    <div v-for="i in 4"
         :key="i"
         class="w-1/4 px-3">
        <base-ratio class="bg-gray-100 rounded-md">1x1</base-ratio>
    </div>
</div>

```html
<div class="w-12">
  <BaseRatio />
</div>
```

<div class="h-12"></div>

## Overlay

```html
<div class="w-12">
  <BaseRatio>
    Overlay content
  </BaseRatio>
</div>
```
