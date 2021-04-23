# Localization

```ts
import locale from '/-/plugins/locale'

app.use(locale, [
  {
      abbr: 'ru',
      label: 'Русский',
      value: {
          hi: 'Привет'
      }
  }
])
```

<div class="h-12"></div>

## Usage

```ts
import { useLocale } from '/-/plugins/locale'

const { setLang } = useLocale()

setLang('ru')
```
