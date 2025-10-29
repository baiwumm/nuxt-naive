<template>
  <NConfigProvider>
    <NLoading-bar-provider>
      <NDialog-provider>
        <NNotification-provider>
          <NMessage-provider>
            <NuxtLayout>
              <!-- 在页面导航之间显示一个进度条 -->
              <NuxtLoadingIndicator />
              <NuxtPage />
            </NuxtLayout>
          </NMessage-provider>
        </NNotification-provider>
      </NDialog-provider>
    </NLoading-bar-provider>
  </NConfigProvider>
</template>
<script lang="ts" setup></script>
