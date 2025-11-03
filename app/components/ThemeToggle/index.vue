<template>
  <n-tooltip placement='bottom' trigger='hover'>
    <template #trigger>
      <n-button quaternary circle @click="toggleDark">
        <template #icon>
          <Icon :name="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'" />
        </template>
      </n-button>
    </template>
    切换主题
  </n-tooltip>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"

import { useThemeStore } from '@/stores/themeStore'
import { THEME } from '@/utils/constant'

const colorMode = useColorMode()

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

// 切换模式
const setColorMode = () => {
  colorMode.value = isDark.value ? THEME.LIGHT : THEME.DARK
}

// 判断是否支持 startViewTransition API
const enableTransitions = () =>
  'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 切换动画
async function toggleDark({ clientX: x, clientY: y }: MouseEvent) {
  if (!enableTransitions()) {
    setColorMode()
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    setColorMode()
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: !isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${!isDark.value ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
