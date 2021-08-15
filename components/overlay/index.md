# Overlay

<div class="mt-4">
    <base-button @click="$refs.overlay.open()">Open Overlay</base-button>
</div>

<base-overlay ref="overlay"
              title="Overlay">Simple Overlay</base-overlay>

```html
<BaseButton @click="$refs.overlay.open()">Open overlay</BaseButton>

<BaseOverlay ref="overlay"
             title="Overlay">
  <p>Simple overlay</p>
</BaseOverlay>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```html
<BaseOverlay size="md"></BaseOverlay>
```

<base-overlay ref="overlay_xs"
              title="Extra Small Overlay"
              size="xs">Overlay content</base-overlay>

<base-overlay ref="overlay_sm"
              title="Small Overlay"
              size="sm">Overlay content</base-overlay>

<base-overlay ref="overlay_lg"
              title="Large Overlay"
              size="lg">Overlay content</base-overlay>

<base-overlay ref="overlay_xl"
              title="Extra Large Overlay"
              size="xl">Overlay content</base-overlay>

<base-overlay ref="overlay_full"
              title="Fullscreen Overlay"
              size="full">Overlay content</base-overlay>

<div class="mt-4 flex space-x-3">
    <base-button @click="$refs.overlay_xs.open()">Extra Small</base-button>
    <base-button @click="$refs.overlay_sm.open()">Small</base-button>
    <base-button @click="$refs.overlay.open()">Medium</base-button>
    <base-button @click="$refs.overlay_lg.open()">Large</base-button>
    <base-button @click="$refs.overlay_xl.open()">Extra Large</base-button>
    <base-button @click="$refs.overlay_full.open()">Fullscreen</base-button>
</div>

| Param | Size     |
| ----- | -------- |
| xs    | max-w-xs |
| sm    | max-w-sm |
| md    | max-w-md |
| lg    | max-w-lg |
| xl    | max-w-xl |
| full  | max-w-full |

<div class="h-12"></div>

## Header

Use slot `header`

<div class="mt-4">
    <base-button @click="$refs.overlay_header.open()">Open Overlay</base-button>
</div>

<base-overlay ref="overlay_header"><template #header><div class="text-center font-black py-4">Custom Title</div></template></base-overlay>

```html
<BaseOverlay ref="modal_header">
  <template #header>
    <div class="text-center font-black py-4">
      Custom Title
    </div>
  </template>
</BaseOverlay>
```

<div class="h-12"></div>

## Body

Use slot `body`

<div class="mt-4">
    <base-button @click="$refs.overlay_body.open()">Open Overlay</base-button>
</div>

<base-overlay ref="overlay_body"><template #body><div class="bg-gray-100 h-full p-4 sm:rounded-lg">Custom Body</div></template></base-overlay>

```html
<BaseOverlay ref="modal_header">
  <template #body>
    <div class="bg-gray-100 p-4 h-full sm:rounded-lg">
      Custom Body
    </div>
  </template>
</BaseOverlay>
```

<div class="h-12"></div>

## Dialog

Use slot `dialog`

<div class="mt-4">
    <base-button @click="$refs.overlay_dialog.open()">Open Modal</base-button>
</div>

<base-overlay ref="overlay_dialog"><template #dialog><div class="bg-white shadow-xl w-screen max-w-lg">Custom Dialog</div></template></base-overlay>

```html
<BaseOverlay ref="overlay_dialog">
  <template #dialog>
    <div class="bg-white shadow-xl w-screen max-w-lg">
      Custom Dialog
    </div>
  </template>
</BaseOverlay>
```
