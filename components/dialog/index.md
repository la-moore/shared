# Dialog

<div class="mt-4">
    <base-button @click="$refs.dialog.open()">Open Dialog</base-button>
</div>

<base-dialog ref="dialog"
             title="Dialog">Simple dialog</base-dialog>

```html
<BaseButton @click="$refs.dialog.open()">Open Dialog</BaseButton>

<BaseDialog ref="dialog"
            title="Dialog">
  <p>Simple dialog</p>
</BaseDialog>
```
