import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import PurgeIcons from "vite-plugin-purge-icons";
import type { ConfigEnv, PluginOption, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import WindiCSS from "vite-plugin-windicss";
import visualizer from "rollup-plugin-visualizer"; // 依赖分析
import autoprefixer from "autoprefixer"; // CSS浏览器前缀

import VueMacros from "unplugin-vue-macros/vite"; // Vue 宏

import ElementPlus from "unplugin-element-plus/vite";

// import externalGlobals from "rollup-plugin-external-globals"; // 剔除依赖包
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root, ".", dir);
}

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const plugins: PluginOption[] = [];
  const isDev = mode === "dev";
  const isBuild = command === "build";
  if (isDev && isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }
  return {
    base: isBuild ? "/blog.github.io" : "",
    server: {
      open: true,
      port: 1314,
      proxy: {
        "/api.github.com": {
          target: "https://api.github.com", // easymock
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api.github.com/, ""),
        },
      },
    },
    plugins: [
      VueMacros({
        plugins: {
          vue: vue({
            reactivityTransform: true,
          }),
          vueJsx: vueJsx(),
        },
      }),
      // vue(),
      // vueJsx(),
      ElementPlus({
        useSource: true,
      }),
      createSvgIconsPlugin({
        // 本地 svg 存放路径
        iconDirs: [pathResolve("src/assets/svgs")],
        symbolId: "icon-[dir]-[name]",
        svgoOptions: true,
      }),
      PurgeIcons(),
      WindiCSS(),
      viteMockServe({
        ignore: /^_/,
        mockPath: "mock",
        localEnabled: !isBuild, // 表示是否在开发环境下启用模拟数据。
        prodEnabled: isBuild, // 表示是否在生产环境下启用模拟数据
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProdMockServer'
          
          setupProdMockServer()
          `,
      }),
      ...plugins,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/plugins/theme/index.scss" as *;
            @use 'element-plus/theme-chalk/src/mixins/mixins' as *;
            @use "~/plugins/theme/mixins.scss" as *;
          `,
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
              // "last 2 versions", // 所有主流浏览器最近2个版本
            ],
            grid: true,
          }),
        ],
      },
    },
    build: {
      terserOptions: {
        compress: {
          // drop_debugger: true,
          drop_console: !isDev,
        },
      },
      rollupOptions: {
        // external: ["vue"],
        // plugins: [
        //   externalGlobals({
        //     vue: "Vue",
        //   }),
        // ],
      },
    },
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "vue-types",
        "@iconify/iconify",
        "@vueuse/core",
        "axios",
      ],
    },
  };
};
