# Helpers

<div class="h-12"></div>

## Format Links

Format links in string to html tags.

```ts
import { formatLinks } from '/-/helpers'

formatLinks('Links like https://example.com and mail@mail.com will be formatted')
```

::: tip Output
<div class="py-4"
     v-html="formatLinks('Links like https://example.com and mail@mail.com will be formatted')"></div>
:::

<div class="h-12"></div>

## Remove Tags

Remove HTML tags from string.

```ts
import { removeTags } from '/-/helpers'

removeTags('Some <p>text with</p> html')
```

::: tip Output
<div class="py-4"
     v-html="removeTags('Some <p>text with</p> html')"></div>
:::

<div class="h-12"></div>

## Generate Token

Generate random token.

```ts
import { generateToken } from '/-/helpers'

generateToken()
generateToken(24)
```

::: tip Output
<div class="py-4">
  <p>{{ generateToken() }}</p>
  <p>{{ generateToken(24) }}</p>
</div>
:::

<div class="h-12"></div>

## Clamp

Clamp number between nim and max.

```ts
import { clamp } from '/-/helpers'

clamp(14, 20, 50)
clamp(57, 20, 50)
```

::: tip Output
<div class="py-4">
  <p>{{ clamp(14, 20, 50) }}</p>
  <p>{{ clamp(57, 20, 50) }}</p>
</div>
:::

<div class="h-12"></div>

## Pluralize

Pluralize strings.

```ts
import { pluralize } from '/-/helpers'

pluralize(1, 'apple')
pluralize(6, 'apple')
pluralize(5, 'city', 'ies')
```

::: tip Output
<div class="py-4">
  <p>{{ pluralize(1, 'apple') }}</p>
  <p>{{ pluralize(6, 'apple') }}</p>
  <p>{{ pluralize(5, 'city', 'ies') }}</p>
</div>
:::

<div class="h-12"></div>

## Difference

Deep clone objects.

```ts
import { difference } from '/-/helpers'

const object = {
  name: 'Alex',
  age: 23
}
const base = {
  name: 'Oleg',
  age: 23
}

difference(object, base)
```

::: tip Output
<div class="py-4">
  <p>{{ difference({ name: 'Alex', age: 23 }, { name: 'Oleg', age: 23 }) }}</p>
</div>
:::

<div class="h-12"></div>

## Deep Clone

Deep clone objects.

```ts
import { deepClone } from '/-/helpers'

deepClone({ ... })
```

<div class="h-12"></div>

## Read File

Convert uploaded file to url.

```ts
import { readFile } from '/-/helpers'

readFile(media)
```

<script>
import * as helpers from '/-/helpers';

export default {
  setup () {
    return {
      ...helpers
    }
  }
}
</script>
