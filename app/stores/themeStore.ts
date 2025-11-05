/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2025-10-30 08:56:57
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2025-11-05 21:00:54
 * @Description: 主题配置
 */
import { defineStore } from 'pinia'

import { THEME } from '@/utils/constant'

export const useThemeStore = defineStore('theme', () => {
  // 使用 Nuxt 的 useColorMode
  const colorMode = useColorMode()

  // 计算属性：是否为暗黑模式
  const isDark = computed(() => colorMode.value === THEME.DARK)

  // 设置颜色模式（同时会触发 DOM 更新和 localStorage 持久化）
  function setColorMode(mode: (typeof THEME)[keyof typeof THEME]) {
    colorMode.preference = mode
  }

  return {
    isDark,
    setColorMode,
  }
}, {
  // 开启数据持久化
  persist: true,
})
