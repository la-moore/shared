## Main Color

<div class="flex flex-wrap mt-4 -mx-1">
    <div v-for="colorItem in Object.keys(colors)"
         class="w-1/12 p-1">
        <base-ratio class="rounded-md cursor-pointer"
             :style="{ backgroundColor: colors[colorItem][500] }"
             @click="() => setColor(colorItem)">
            <div v-if="color === colorItem"
                 class="absolute top-0 right-0 p-1">
                <div class="w-5 h-5 bg-white flex items-center justify-center rounded-md">
                    <base-icon name="outline_check" size="xs"></base-icon>
                </div>
            </div>
        </base-ratio>
    </div>
</div>

<div class="h-12"></div>

## Main Theme

<div class="mt-4">
    <base-select :value="theme"
                 label="Select Theme"
                 :options="themes.map((value) => ({ label: value, value }))"
                 @change="({ value }) => setTheme(value)"></base-select>
</div>

<script>
import { useColor } from '/-/plugins/color';
import { useTheme } from '/-/plugins/theme';

export default {
  setup () {
    const { color, colors, setColor } = useColor();
    const { theme, themes, setTheme } = useTheme();

    return {
      color,
      colors,
      theme,
      themes,
      setColor,
      setTheme
    }
  }
}
</script>
