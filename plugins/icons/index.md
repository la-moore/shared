# Icon

Can use any Tailwind CSS utilities for controlling the element.

<div class="mt-4">
    <base-icon name="logo" :size="false" class="h-10"></base-icon>
</div>

```ts
import icons from '/-/plugins/icons'

const localIcons = {
  "custom_icon_name": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>...</svg>"
}

app.use(icons, localIcons)
```

<div class="h-12"></div>

| Param   | Size      | Look                                                  |
| ------- | --------- | ----------------------------------------------------- |
| xs      | h-4 w-4   | <base-icon name="outline/add-circle" size="xs" />   |
| sm      | h-5 w-5   | <base-icon name="outline/add-circle" size="sm" />   |
| md      | h-6 w-6   | <base-icon name="outline/add-circle" size="md" />   |
| lg      | h-8 w-8   | <base-icon name="outline/add-circle" size="lg" />   |
| xl      | h-10 w-10 | <base-icon name="outline/add-circle" size="xl" />   |

<div class="h-12"></div>

## Sizes

Use attribute `size`

```vue
<BaseIcon size="md"
          name="logo" />
```

| Param   | Size      | Look                                                  |
| ------- | --------- | ----------------------------------------------------- |
| xs      | h-4 w-4   | <base-icon name="outline/arrow-square-up" size="xs" />   |
| sm      | h-5 w-5   | <base-icon name="outline/arrow-square-up" size="sm" />   |
| md      | h-6 w-6   | <base-icon name="outline/arrow-square-up" size="md" />   |
| lg      | h-8 w-8   | <base-icon name="outline/arrow-square-up" size="lg" />   |
| xl      | h-10 w-10 | <base-icon name="outline/arrow-square-up" size="xl" />   |

<div class="h-12"></div>

## All Icons

<input v-model="search"
       placeholder="Search..."
       aria-label=""
       class="appearance-none block w-full px-3 h-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

<div class="mt-4 flex flex-wrap -mx-1">
    <div v-for="(icon, idx) in visibleIcons"
         :key="icon"
         class="w-1/12 p-1">
        <base-ratio v-tooltip :content="icon" class="bg-gray-100 rounded-md cursor-pointer" @click="() => onClick(icon)">
            <base-icon :name="icon"></base-icon>
            <div class="absolute inset-0 rounded-md border-2 border-transparent active:opacity-50 hover:border-green-500"></div>
        </base-ratio>
    </div>
</div>

<input aria-label="" id="myInput" class="opacity-0 absolute pointer-events-none" />

<script>
import { useIcons } from '/-/plugins/icons';

export default {
  data () {
    const { icons } = useIcons();

    return {
      search: '',
      icons: Object.keys(icons.value)
    }
  },
  computed: {
    visibleIcons() {
      if (!this.search) {
        return this.icons
      }

      return this.icons.filter((item) => item.includes(this.search))
    }
  },
  methods: {
    onClick(text) {
      let copyText = document.getElementById("myInput");

      copyText.value = text;
      copyText.select();
      copyText.setSelectionRange(0, 99999);

      document.execCommand("copy");
    }
  }
}
</script>
