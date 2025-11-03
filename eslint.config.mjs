import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    ...withNuxt()[0], // 继承 Nuxt 默认配置
  },
  {
    // 自定义 ESLint 配置：针对 JS/TS/Vue 文件
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        // 使用 TypeScript 解析器，并指向 Nuxt 的 tsconfig
        typescript: {
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".ts", ".vue", ".tsx"],
        }
      },
    },
    rules: {
      // 核心验证规则
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/export": "error",
      
      // 排序规则
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-duplicates": "error",
      "import/no-absolute-path": "error",
      "import/no-cycle": "warn",
    },
  },
]);
