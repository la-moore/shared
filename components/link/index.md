# Link

Can use `to=""` like router-link and `href` like simple link 

<div class="mt-4 flex flex-col">
    <base-link :to="{ path: '/' }">Simple Link</base-link>
    <base-link href="#">Simple Link</base-link>
</div>

```vue
<BaseLink :to="{ name: 'home' }">Simple Link</BaseLink>
<BaseLink href="#">Simple Link</BaseLink>
```

<div class="h-12"></div>

## Look

Use attribute `look`

```vue
<BaseLink look="current">Simple Link</BaseLink>
```

| Param       | Look                                           |
| ----------- | ---------------------------------------------- |
| current     | <base-link look="current">Link</base-link>     |
| black       | <base-link look="black">Link</base-link>       |
| dark        | <base-link look="dark">Link</base-link>        |
| white       | <base-link look="white">Link</base-link>       |
| primary     | <base-link look="primary">Link</base-link>     |
| success     | <base-link look="success">Link</base-link>     |
| destructive | <base-link look="destructive">Link</base-link> |
| info        | <base-link look="info">Link</base-link>        |
| warning     | <base-link look="warning">Link</base-link>     |
