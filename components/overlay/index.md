# Overlay

<div class="mt-4">
    <base-button @click="$refs.overlay.target('open')">Open Overlay</base-button>
</div>

<base-overlay ref="overlay"
              title="Overlay">Simple Overlay</base-overlay>

```vue
<BaseButton @click="$refs.overlay.target('open')">Open overlay</BaseButton>

<BaseOverlay ref="overlay"
             title="Overlay">
  <p>Simple overlay</p>
</BaseOverlay>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
<BaseOverlay size="md"></BaseOverlay>
<BaseOverlay size="max-w-full"></BaseOverlay>
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
              size="max-w-full">Overlay content</base-overlay>

| Param  | Size       | Look                                                                                   |
| ------ | ---------- | -------------------------------------------------------------------------------------- |
| xs     | max-w-xs   | <base-button size="sm" @click="$refs.overlay_xs.target('open')">Extra Small</base-button>  |
| sm     | max-w-sm   | <base-button size="sm" @click="$refs.overlay_sm.target('open')">Small</base-button>        |
| md     | max-w-md   | <base-button size="sm" @click="$refs.overlay.target('open')">Medium</base-button>          |
| lg     | max-w-lg   | <base-button size="sm" @click="$refs.overlay_lg.target('open')">Large</base-button>        |
| xl     | max-w-xl   | <base-button size="sm" @click="$refs.overlay_xl.target('open')">Extra Large</base-button>  |
| custom | max-w-full | <base-button size="sm" @click="$refs.overlay_full.target('open')">Fullscreen</base-button> |

<div class="h-12"></div>

## Header

Use slot `header`

<div class="mt-4">
    <base-button @click="$refs.overlay_header.target('open')">Open Overlay</base-button>
</div>

<base-overlay ref="overlay_header"><template #header><div class="text-center font-black py-4">Custom Title</div></template></base-overlay>

```vue
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
    <base-button @click="$refs.overlay_body.target('open')">Open Overlay</base-button>
</div>

<base-overlay ref="overlay_body"><template #body><div class="bg-gray-100 h-full p-4 sm:rounded-lg">Custom Body</div></template></base-overlay>

```vue
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
    <base-button @click="$refs.overlay_dialog.target('open')">Open Modal</base-button>
</div>

<base-overlay ref="overlay_dialog"><template #dialog><div class="bg-white shadow-xl w-screen max-w-lg">Custom Dialog</div></template></base-overlay>

```vue
<BaseOverlay ref="overlay_dialog">
  <template #dialog>
    <div class="bg-white shadow-xl w-screen max-w-lg">
      Custom Dialog
    </div>
  </template>
</BaseOverlay>
```

