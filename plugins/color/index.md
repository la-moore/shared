# Color

```ts
import color from '/-/plugins/color'

app.use(theme, 'indigo')
```

<div class="h-12"></div>

## Usage

```ts
import { useColor } from '/-/plugins/color'

const { setColor } = useColor()

setColor(ColorType)
```

<div class="h-12"></div>

## All Colors

<table>
<thead>
    <tr>
      <th>ColorType</th>
      <th>Styles</th>
    </tr>
</thead>
<tbody>
    <tr v-for="color in Object.keys(colors)">
        <td>{{ color }}</td>
        <td>
            <div class="space-x-1 flex">
                <div v-for="tone in Object.keys(colors[color])"
                     class="w-6 h-3 rounded"
                     :style="{ backgroundColor: colors[color][tone] }">
                </div>
            </div>
        </td>
    </tr>
</tbody>
</table>

<script>
import { useColor } from '/-/plugins/color';

export default {
  setup () {
    const { colors } = useColor();

    return {
      colors
    }
  }
}
</script>
