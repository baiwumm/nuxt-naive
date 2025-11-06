import withNuxt from './.nuxt/eslint.config.mjs'
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default withNuxt([
  {
    // 启用 import 插件
    plugins: {
      import: simpleImportSort,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.ts', '.vue'],
        },
      },
    },
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
])