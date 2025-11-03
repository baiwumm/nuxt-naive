<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <div class="h-screen">
              <pro-layout v-model:collapsed="collapsed" :mode="mode" :show-nav="showNav" :show-logo="showLogo"
                :is-mobile="mobile" :nav-fixed="navFixed" :nav-height="navHeight" :show-footer="showFooter"
                :show-tabbar="showTabbar" :show-sidebar="showSidebar" :footer-fixed="footerFixed"
                :footer-height="footerHeight" :sidebar-width="sidebarWidth" :tabbar-height="tabbarHeight"
                :sidebar-collapsed-width="sidebarCollapsedWidth" logo-class="flex justify-center h-full">
                <template #logo>
                  logo
                </template>
                <template #nav-left>
                  <n-popover v-if="mobile" trigger="click" style="padding: 0">
                    <template #trigger>
                      <n-button type="primary" size="small">
                        菜单
                      </n-button>
                    </template>
                    <n-scrollbar class="flex-[1_0_0]">
                      <n-menu v-bind="verticalLayout.verticalMenuProps" :collapsed="false" />
                    </n-scrollbar>
                  </n-popover>
                </template>
                <template #nav-center>
                  <n-menu v-if="hasHorizontalMenu" v-bind="layout.horizontalMenuProps" />
                </template>
                <template #nav-right>
                  <nav-header />
                </template>
                <template #sidebar>
                  <n-scrollbar class="flex-[1_0_0]">
                    <n-menu v-bind="layout.verticalMenuProps" :collapsed-width="sidebarCollapsedWidth" />
                  </n-scrollbar>
                  <n-divider />
                  <n-avatar style="color:yellow; background-color:red">
                    M
                  </n-avatar>
                </template>
                <template #sidebar-extra>
                  <div class="flex justify-center font-bold">
                    糖....
                  </div>
                  <n-divider />
                  <n-scrollbar class="flex-[1_0_0]">
                    <n-menu v-bind="layout.verticalExtraMenuProps" :collapsed-width="sidebarCollapsedWidth" />
                  </n-scrollbar>
                </template>
                <template #tabbar>
                  <div>tabbar</div>
                </template>
                <template #footer>
                  <div>footer</div>
                </template>
                <slot />
              </pro-layout>
            </div>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="tsx">
import { type MenuOption, darkTheme, lightTheme } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { ProLayout, useLayoutMenu } from 'pro-naive-ui'

import { Icon } from '#components'
import { useLayoutStore } from '@/stores/layoutStore'
import { useThemeStore } from '@/stores/themeStore'

const layoutStore = useLayoutStore()
const {
  navFixed,
  showNav,
  showLogo,
  mobile,
  showFooter,
  showTabbar,
  collapsed,
  showSidebar,
  footerFixed,
  navHeight,
  sidebarWidth,
  tabbarHeight,
  footerHeight,
  sidebarCollapsedWidth,
  mode,
} = storeToRefs(layoutStore)

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const menuOptions: MenuOption[] = [
  {
    label: '控制台',
    key: 'dashboard',
    icon: () => <Icon name="mdi:monitor-dashboard" />,
  },
  {
    label: '智能行政',
    key: 'administrative',
    icon: () => <Icon name="ri:quill-pen-line" />,
    children: [
      {
        label: '组织管理',
        key: 'organization',
        icon: () => <Icon name="ri:exchange-2-line" />,
      },
    ],
  },
]

const { layout, verticalLayout } = useLayoutMenu({
  mode,
  menus: menuOptions,
})

const hasHorizontalMenu = computed(() => ['horizontal', 'mixed-two-column', 'mixed-sidebar'].includes(mode.value))
</script>
