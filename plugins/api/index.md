# Api

```ts
import api from '/-/plugins/api'

app.use(api, {
    default: 'v1',
    resources: []
})
```

<div class="h-12"></div>

## Integration

```ts
interface ApiConfig {
    default: string,
    resources: ApiResource[]
}
```

```ts
interface ApiResource {
    name: string
    baseUrl: string
    headers: () => {}
    refreshToken: () => {}
}
```

<div class="h-12"></div>

## Usage

```ts
import { Api } from '/-/plugins/api'

await Api.fetch('/url/')
```

```ts
import { Api } from '/-/plugins/api'

await Api.fetch(RequestParams)
```

```ts
export interface RequestParams {
    resource?: string,
    url: string,
    method?: 'DELETE' | 'POST' | 'GET' | 'PUT' | 'PATCH'
    formData?: any
    params?: Record<string, string | number | undefined | number[] | string[]>
    body?: any
}
```
