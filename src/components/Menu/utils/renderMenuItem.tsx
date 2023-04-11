import type { MenuItemsType } from "@/types/menu";
import { ElMenuItem, ElSubMenu } from "element-plus";
import { Icon } from "@/components/Icon";
import { isUrl } from "@/utils/utils";
import router from "@/router";

export const renderMenuItem = (menuList: MenuItemsType[]) => {
  if (Array.isArray(menuList)) {
    return menuList.map((menuItem) => {
      if (Array.isArray(menuItem.children) && menuItem.children.length) {
        return (
          <ElSubMenu index={menuItem.id} vShow={!menuItem.meta.hideMenu}>
            {{
              title: () => (
                <>
                  <Icon icon={menuItem.meta.icon} />
                  <span class={"select-none"}>{menuItem.meta.title}</span>
                </>
              ),
              default: () =>
                renderMenuItem(menuItem.children as MenuItemsType[]),
            }}
          </ElSubMenu>
        );
      }
      return (
        <ElMenuItem
          vShow={!menuItem.meta.hideMenu}
          index={menuItem.id}
          onClick={() => {
            if (menuItem.path) {
              if (isUrl(menuItem.path)) {
                window.open(menuItem.path);
              } else {
                router.push(menuItem.path);
              }
            }
          }}
        >
          {{
            default: () => <Icon icon={menuItem.meta.icon} />,
            title: () => (
              <span class={"select-none"}>{menuItem.meta.title}</span>
            ),
          }}
        </ElMenuItem>
      );
    });
  }
  return <></>;
};
