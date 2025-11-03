<template>
  <!-- 首页加载全屏动画 -->
  <FullLoading v-if="isFullLoading" />
  <NuxtLayout>
    <!-- 在页面导航之间显示一个进度条 -->
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();

// 是否首次加载
const isFullLoading = ref(true);

nuxtApp.hook("page:start", () => {
  isFullLoading.value = true;
});

nuxtApp.hook("page:finish", () => {
  isFullLoading.value = false;
});

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  meta: [
    { name: "keywords", content: "Naive UI,Nuxt.js,Naive UI Pro" },
    { name: "description", content: "一个基于 Nuxt.js 和 Naive UI 的后台模板" },
  ],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
