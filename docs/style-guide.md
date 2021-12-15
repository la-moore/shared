# Style Guide

<div class="h-4"></div>

These rules help prevent errors, so learn and abide by them at all costs. Exceptions may exist, but should be very rare 
and only be made by those with expert knowledge of both JavaScript and Vue.

<div class="h-12"></div>

## Multi-word component names

This prevents conflicts with existing and future HTML elements, since all HTML elements are a single
word.

::: danger Bad
```ts
export default {
  name: 'form'
}
```
:::

::: tip Good
```ts
export default {
  name: 'TheForm'
}
```
:::

<div class="h-12"></div>

## Prop definitions

In committed code, prop definitions should always be as detailed as possible, specifying at least type.

::: danger Bad
```ts
export default {
  props: ['status']
}
```
:::

::: tip Good
```ts
export default {
  props: {
    status: {
      type: String,
      required: true,
      default: ''
    }
  }
}
```
:::

<div class="h-12"></div>

## Keyed `v-for`

`key` with `v-for` is always required on components, in order to maintain internal component state down the subtree.

::: danger Bad
```vue
<ul>
  <li v-for="todo in []">
    {{ todo.text }}
  </li>
</ul>
```
:::

::: tip Good
```vue
<ul>
  <li v-for="(todo, idx) in []"
      :key="idx">
    {{ todo.text }}
  </li>
</ul>
```
:::

<div class="h-12"></div>

## Component style

Use [Tailwind CSS](https://tailwindcss.com) for component style

::: danger Bad
```vue
<style>
label {
  display: block;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold;
}
</style>
```
:::

::: tip Good
```vue
<label class="block text-sm font-medium leading-5">
...
</label>
```
:::

<div class="h-12"></div>

## Component files

This helps you to more quickly find a component when you need to edit it or review how to use it.

::: danger Bad
```sh
|-- component/
  |-- TheComponent.vue
```
```sh
|-- component/
  |-- theComponent.vue
```
```sh
|-- component/
  |-- thecomponent.vue
```
```sh
|-- component/
  |-- the_component.vue
```
:::

::: tip Good
```sh
|-- component/
  |-- сomponent.vue
```
:::

<div class="h-12"></div>

## Tightly coupled component names

Child components that are tightly coupled with their parent should include the parent component name as a prefix.

::: danger Bad
```sh
|-- component/
  |-- component.vue
  |-- item.vue
  |-- button.vue
```
:::

::: tip Good
```sh
|-- component/
  |-- component.vue
  |-- component-item.vue
  |-- component-button.vue
```
:::

<div class="h-12"></div>

## Self-closing components

Components that self-close communicate that they not only have no content, but are meant to have no content. It's the
difference between a blank page in a book and one labeled "This page intentionally left blank." Your code is also
cleaner without the unnecessary closing tag.

::: danger Bad
```vue
<TheComponent></TheComponent>
```
:::

::: tip Good
```vue
<TheComponent />
```
:::

<div class="h-12"></div>

## Component name casing in templates

In most projects, component names should always be PascalCase in single-file components and string templates.

::: danger Bad
```vue
<thecomponent/>
```
```vue
<theComponent/>
```
```vue
<TheComponent></TheComponent>
```
:::

::: tip Good
```vue
<TheComponent />
```
```vue
<TheComponent>
  content
</TheComponent>
```
:::

<div class="h-12"></div>

## Prop name casing

In most projects, component names should always be PascalCase in single-file components and string templates.

::: danger Bad
```ts
export default {
  props: {
    'custom-title': {
      type: String
    }
  }
}
```

```vue
<TheComponent customTitle="hi"/>
```
:::

::: tip Good
```ts
export default {
  props: {
    customTitle: {
      type: String
    }
  }
}
```
```vue
<TheComponent custom-title="hi"/>
```
:::

<div class="h-12"></div>

## Multi-attribute elements

Elements with multiple attributes should span multiple lines, with one attribute per line.

::: danger Bad
```ts
export default {
  props: {
    'custom-title': {
      type: String
    }
  }
}
```

```vue
<TheComponent title="hi" text="hello" size="sm"/>
```
:::

::: tip Good
```vue
<TheComponent title="hi"
              text="hello"
              size="sm"/>
```
:::
