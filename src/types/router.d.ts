// typings.d.ts or router.ts
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string; // 设置该路由在侧边栏、面包屑、以及顶部TAB展示的名字
    icon?: string; // 设置该路由的图标
    hidden?: boolean; // 如果设置hidden，则为隐藏的模块，如果作用于目录，则下级所有的节点模块都不显示
    disablePermissions?: boolean; // 禁用权限，本身（包含子级）无需权限即可进入路由，可单独给子级设置
  }
}
