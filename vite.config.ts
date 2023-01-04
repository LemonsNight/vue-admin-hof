import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import PurgeIcons from "vite-plugin-purge-icons";
import type { ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";
import { resolve } from "path";
import WindiCSS from "vite-plugin-windicss";
import visualizer from "rollup-plugin-visualizer"; // 依赖分析
import autoprefixer from "autoprefixer"; // CSS浏览器前缀
// @ts-ignore
import externalGlobals from "rollup-plugin-external-globals"; // 剔除依赖包
import VueMacros from "unplugin-vue-macros/vite"; // Vue 宏
// https://vitejs.dev/config/
const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root, ".", dir);
}

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const plugins = [];
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
    server: {
      open: true,
    },
    plugins: [
      VueMacros({
        plugins: {
          vue: vue(),
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
      // viteMockServe({
      //   ignore: /^\_/,
      //   mockPath: "src/mock",
      //   localEnabled: !isBuild,
      //   prodEnabled: isBuild,
      //   injectCode: `
      //     import { setupProdMockServer } from '@/mock/_createProductionServer'
      //
      //     setupProdMockServer()
      //     `,
      // }),
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
  };
};
