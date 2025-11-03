/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2025-10-28 22:20:40
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2025-10-29 02:18:04
 * @Description: 布局配置
 */
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { defineStore } from 'pinia';

function useMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  return computed(() => {
    return breakpoints.between('sm', 'md').value || breakpoints.smallerOrEqual('sm').value
  })
}

export const useLayoutStore = defineStore('layout', () => {
  const mobile = useMobile()
  const showMobileSidebarDrawer = ref(false)

  const layout = reactive({
    /**
     * 布局模式
     */
    mode: 'vertical',
    /**
     * 是否显示顶栏
     */
    showNav: true,
    /**
     * 是否显示 logo
     */
    showLogo: true,
    /**
     * 是否显示侧边栏
     */
    showSidebar: true,
    /**
     * 是否显示标签栏
     */
    showTabbar: true,
    /**
     * 是否显示底部
     */
    showFooter: false,
    /**
     * 顶栏是否固定
     */
    navFixed: true,
    /**
     * 侧边栏是否折叠
     */
    collapsed: false,
    /**
     * 顶栏高度
     */
    navHeight: 50,
    /**
     * 侧边栏宽度
     */
    sidebarWidth: 224,
    /**
     * 底部高度
     */
    footerHeight: 32,
    /**
     * 底部是否固定
     */
    footerFixed: true,
    /**
     * 标签栏高度
     */
    tabbarHeight: 38,
    /**
     * 标签页主题
     */
    tabsMode: 'chrome',
    /**
     * 标签页是否持久化
     */
    tabsPersist: true,
    /**
     * 关闭标签页后是否重置缓存
     */
    resetCacheAfterCloseTab: true,
    /**
     * 侧边栏折叠后的宽度
     */
    sidebarCollapsedWidth: 58,
    /**
     * 侧边栏折叠后是否显示菜单名
     */
    sidebarCollapsedShowMenuTitle: true,
    /**
     * 当展示菜单标题时，侧边栏折叠后的宽度
     */
    sidebarCollapsedWidthWhenShowMenuTitle: 80,
    /**
     * 是否开启侧边栏菜单分组
     */
    sidebarMenuGroup: false,
    /**
     * 是否开启侧边栏菜单分割线
     */
    sidebarMenuDivider: false,
  })

  return {
    mobile,
    showMobileSidebarDrawer,
    ...toRefs(layout),
  }
}, {
  // 开启数据持久化
  persist: true
})
