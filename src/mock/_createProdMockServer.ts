import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

// https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob("./**/.ts", {
  import: "default",
  eager: true,
});
const mockModules: any[] = Object.entries(modules)
  .filter((item) => !item.includes("_"))
  .map((item) => item[1]);
// 在 vite.config.ts 里面引用
export function setupProdMockServer() {
  createProdMockServer([]);
}
