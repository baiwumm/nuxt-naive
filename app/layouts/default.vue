<!-- layouts/default.vue -->
<script setup>
import { darkTheme, lightTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="$colorMode.value === 'dark' ? lightTheme : darkTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
