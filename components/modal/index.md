# Modal

<div class="mt-4">
    <base-button @click="$refs.modal.target('open')">Open Modal</base-button>
</div>

<base-modal ref="modal"
            title="Modal">Simple modal</base-modal>

```vue
<BaseButton @click="$refs.modal.target('open')">Open Modal</BaseButton>

<BaseModal ref="modal"
           title="Modal">
  <p>Simple modal</p>
</BaseModal>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
<BaseModal size="md"></BaseModal>
```

<base-modal ref="modal_xs"
            title="Extra Small Modal"
            size="xs">Modal content</base-modal>

<base-modal ref="modal_sm"
            title="Small Modal"
            size="sm">Modal content</base-modal>

<base-modal ref="modal_lg"
            title="Large Modal"
            size="lg">Modal content</base-modal>

<base-modal ref="modal_xl"
            title="Extra Large Modal"
            size="xl">Modal content</base-modal>

| Param | Size     | Look                                                                            |
| ----- | -------- | ------------------------------------------------------------------------------- |
| xs    | max-w-xs | <base-button size="sm" @click="$refs.modal_xs.target('open')">Extra Small</base-button> |
| sm    | max-w-sm | <base-button size="sm" @click="$refs.modal_sm.target('open')">Small</base-button>       |
| md    | max-w-md | <base-button size="sm" @click="$refs.modal.target('open')">Medium</base-button>         |
| lg    | max-w-lg | <base-button size="sm" @click="$refs.modal_lg.target('open')">Large</base-button>       |
| xl    | max-w-xl | <base-button size="sm" @click="$refs.modal_xl.target('open')">Extra Large</base-button> |

<div class="h-12"></div>

## Header

Use slot `header`

<div class="mt-4">
    <base-button @click="$refs.modal_header.target('open')">Open Modal</base-button>
</div>

<base-modal ref="modal_header"><template #header><div class="text-center font-black py-4">Custom Title</div></template></base-modal>

```vue
<BaseModal ref="modal_header">
  <template #header>
    <div class="text-center font-black py-4">
      Custom Title
    </div>
  </template>
</BaseModal>
```

<div class="h-12"></div>

## Body

Use slot `body`

<div class="mt-4">
    <base-button @click="$refs.modal_body.target('open')">Open Modal</base-button>
</div>

<base-modal ref="modal_body"><template #body><div class="bg-gray-100 p-4 sm:rounded-lg">Custom Body</div></template></base-modal>

```vue
<BaseModal ref="modal_header">
  <template #body>
    <div class="bg-gray-100 p-4 sm:rounded-lg">
      Custom Body
    </div>
  </template>
</BaseModal>
```

<div class="h-12"></div>

## Dialog

Use slot `dialog`

<div class="mt-4">
    <base-button @click="$refs.modal_dialog.target('open')">Open Modal</base-button>
</div>

<base-modal ref="modal_dialog"><template #dialog><div class="relative p-4 text-center inline-block text-left align-bottom bg-white rounded-lg max-w-lg shadow-xl transform sm:my-8 sm:align-middle w-full">Custom Dialog</div></template></base-modal>

```vue
<BaseModal ref="modal_dialog">
  <template #dialog>
    <div class="relative p-4 text-center inline-block text-left align-bottom bg-white rounded-lg max-w-lg shadow-xl transform sm:my-8 sm:align-middle w-full">
      Custom Dialog
    </div>
  </template>
</BaseModal>
```

<div class="h-12"></div>

## Animation

Use slot `animation`

<base-modal animation-from="scale"
            animation-to="scale"
            ref="modal_scale"
            title="Scale">Scale animation</base-modal>

<base-modal animation-from="translate"
            animation-to="translate"
            ref="modal_translate"
            title="Translate">Translate animation</base-modal>

| Param     | Look                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| translate | <base-button size="sm" @click="$refs.modal_scale.target('open')">Open Scale</base-button>         |
| scale     | <base-button size="sm" @click="$refs.modal_translate.target('open')">Open Translate</base-button> |

```vue
<BaseModal animation-from="scale"
           animation-to="scale" />
```

<div class="h-12"></div>

## Fullscreen

Use attribute `fullscreen`

```vue
<BaseModal fullscreen
           rounded="rounded-t-lg sm:rounded-lg" />
```

<base-modal ref="modal_fullscreen"
            title="Fullscreen"
            fullscreen
            rounded="rounded-t-lg sm:rounded-lg">Fullscreen</base-modal>

<div class="mt-4">
  <base-button @click="$refs.modal_fullscreen.target('open')">Open Modal</base-button>
</div>

