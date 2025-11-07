<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <n-button quaternary circle @click="toggle">
        <template #icon>
          <Icon :name="isFullscreen ? 'ri:fullscreen-exit-line' : 'ri:fullscreen-line'" />
        </template>
      </n-button>
    </template>
    全屏切换
  </n-tooltip>
</template>
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen();

</script>