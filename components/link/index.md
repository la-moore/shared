# Link

Can use `to=""` like router-link and `href` like simple link 

<div class="mt-4">
    <base-link>Simple Link</base-link>
</div>

```html
<BaseLink href="#">Simple Link</BaseLink>
<BaseLink :to="{ name: 'home' }">Simple Link</BaseLink>
```

<div class="h-12"></div>

## Themes

Use attribute `theme`

```html
<BaseLink theme="primary">Simple Link</BaseLink>
```

| Param       | Look                                            |
| ----------- | ----------------------------------------------- |
| black       | <base-link theme="black">Link</base-link>       |
| dark        | <base-link theme="dark">Link</base-link>        |
| white       | <base-link theme="white">Link</base-link>       |
| primary     | <base-link theme="primary">Link</base-link>     |
| success     | <base-link theme="success">Link</base-link>     |
| destructive | <base-link theme="destructive">Link</base-link> |
| info        | <base-link theme="info">Link</base-link>        |


<div class="h-12"></div>

## Weights

Use attribute `weight`

```html
<BaseLink weight="semibold">Simple Link</BaseLink>
```

| Param    | Look                                          |
| -------- | --------------------------------------------- |
| light    | <base-link weight="light">Link</base-link>    |
| semibold | <base-link weight="semibold">Link</base-link> |
| bold     | <base-link weight="bold">Link</base-link>     |
| black    | <base-link weight="black">Link</base-link>    |
