# Dialog

<div class="mt-4">
    <base-button @click="$refs.dialog.target('open')">Open Dialog</base-button>
</div>

<base-dialog ref="dialog"
             title="Dialog">Simple dialog</base-dialog>

```vue
<BaseButton @click="$refs.dialog.target('open')">Open Dialog</BaseButton>

<BaseDialog ref="dialog"
            title="Dialog">
  <p>Simple dialog</p>
</BaseDialog>
```

<div class="h-12"></div>

## Disable Close

```vue
<BaseDialog ref="dialog"
            title="Dialog"
            disable-close>
  <p>Simple dialog</p>
  
  <BaseButton @click="$refs.dialog.target('close')">
    Close
  </BaseButton>
</BaseDialog>
```

<div class="mt-4">
    <base-button @click="$refs.dialog2.target('open')">Open Dialog</base-button>
</div>

<base-dialog ref="dialog2" title="Dialog" disable-close>
  <div>Simple dialog</div>
  <base-button class="w-full mt-6" @click="$refs.dialog2.target('close')">Close</base-button>
</base-dialog>
