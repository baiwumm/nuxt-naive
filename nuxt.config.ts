import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxtjs-naive-ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@bubblesortt/nuxt-es-toolkit',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }, // 页面过渡效果
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.baiwumm.com/fonts/MapleMono-CN-Regular/result.css',
        },
      ],
    },
  },
  // 全局 CSS
  css: ['~/assets/css/main.css'],
  // @nuxtjs/color-mode 配置
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['naive-ui', 'vueuc'],
  },
  devServer: {
    port: 5173,
  },
  compatibilityDate: '2025-07-15',
  // Vite 配置
  vite: {
    plugins: [
      tailwindcss(),
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    optimizeDeps: {
      include: [
        'vueuc',
        'vueuc/dist/vueuc.cjs',
      ],
      // 强制预构建时将 vueuc 作为 ESM 处理
      esbuildOptions: {
        resolveExtensions: ['.js', '.cjs'],
      },
    },
    ssr: {
      noExternal: ['vueuc'], // 确保 SSR 时也正确处理
    },
  },
  // pinia-plugin-persistedstate 配置
  piniaPluginPersistedstate: {
    storage: 'localStorage',
    key: 'pinia_%id',
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
})
