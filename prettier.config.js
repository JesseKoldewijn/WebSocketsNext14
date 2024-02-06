/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import("@trivago/prettier-plugin-sort-imports")} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  // sortImports
  importOrder: ["^next/(.*)$", "^react/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  // tailwindcss
  tailwindAttributes: ["className", "class"],
  tailwindFunctions: ["cn"],
  tailwindConfig: "./tailwind.config.ts",
};

export default config;
