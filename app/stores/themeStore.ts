/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2025-10-30 08:56:57
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2025-10-30 10:25:58
 * @Description: 主题配置
 */
import { defineStore } from 'pinia'

import { THEME } from '@/utils/constant'

export const useThemeStore = defineStore('theme', () => {
  const colorMode = useColorMode()
  const isDark = computed(() => colorMode.value === THEME.DARK)
  return {
    isDark,
  }
}, {
  // 开启数据持久化
  persist: true,
})
