# Modal

<div class="mt-4">
    <base-button @click="$refs.modal.open()">Open Modal</base-button>
</div>

<base-modal ref="modal"
           title="Modal">Simple modal</base-modal>

```html
<BaseButton @click="$refs.modal.open()">Open Modal</BaseButton>

<BaseModal ref="modal"
           title="Modal">
  <p>Simple modal</p>
</BaseModal>
```

<div class="h-12"></div>

## Sizes

Use attribute `size`

```html
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

<div class="mt-4 flex space-x-3">
    <base-button @click="$refs.modal_xs.open()">Extra Small</base-button>
    <base-button @click="$refs.modal_sm.open()">Small</base-button>
    <base-button @click="$refs.modal.open()">Medium</base-button>
    <base-button @click="$refs.modal_lg.open()">Large</base-button>
    <base-button @click="$refs.modal_xl.open()">Extra Large</base-button>
</div>

| Param | Size     |
| ----- | -------- |
| xs    | max-w-xs |
| sm    | max-w-sm |
| md    | max-w-md |
| lg    | max-w-lg |
| xl    | max-w-xl |

<div class="h-12"></div>

## Header

Use slot `header`

<div class="mt-4">
    <base-button @click="$refs.modal_header.open()">Open Modal</base-button>
</div>

<base-modal ref="modal_header"><template #header><div class="text-center font-black py-4">Custom Title</div></template></base-modal>

```html
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
    <base-button @click="$refs.modal_body.open()">Open Modal</base-button>
</div>

<base-modal ref="modal_body"><template #body><div class="bg-gray-100 p-4 sm:rounded-lg">Custom Body</div></template></base-modal>

```html
<BaseModal ref="modal_header">
  <template #body>
    <div class="bg-gray-100 p-4 sm:rounded-lg">
      Custom Body
    </div>
  </template>
</BaseModal>
```

