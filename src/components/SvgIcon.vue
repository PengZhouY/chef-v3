<script setup lang="ts">
import type { SvgConfig } from '@/types'

withDefaults(defineProps<SvgConfig>(), {
  width: 16,
  height: 16,
  fill: 'currentColor'
})
</script>

<template>
  <svg :style="`--width:${width}px;--height:${height}px;`" class="size">
    <use :xlink:href="`#icon-${name}`" :fill="fill"></use>
  </svg>
</template>

<style scoped lang="less">
.size {
  width: var(--width);
  height: var(--height);
}
</style>
