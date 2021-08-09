<template>
  <Layout>
    <template #page-top>
      {{ url }}
      <div v-if="path.includes('/components') || path.includes('backgrounds') || path.includes('slider')"
           class="flex flex-wrap mt-4 -mx-1">
        <div v-for="colorItem in Object.keys(colors)"
             class="w-1/12 p-1">
          <BaseRatio class="rounded-md cursor-pointer"
                      :style="{ backgroundColor: colors[colorItem][500] }"
                      @click="() => setColor(colorItem)">
            <div v-if="color === colorItem"
                 class="absolute top-0 right-0 p-1">
              <div class="w-5 h-5 bg-white flex items-center justify-center rounded-md">
                <BaseIcon name="outline/check" size="xs"></BaseIcon>
              </div>
            </div>
          </BaseRatio>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useColor } from '/-/plugins/color'

const { color, colors, setColor } = useColor()
const { Layout } = DefaultTheme

const path = computed(() => {
  const { path } = useRoute()

  return path
})
</script>
