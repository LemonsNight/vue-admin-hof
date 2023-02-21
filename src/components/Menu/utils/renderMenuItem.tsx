import type { MenuItemsType } from "@/types/menu";
import { ElMenuItem, ElSubMenu } from "element-plus";
import { Icon } from "@/components/Icon";
export const renderMenuItem = (menuList: MenuItemsType[]) => {
  if (Array.isArray(menuList)) {
    return menuList.map((menuItem) => {
      if (Array.isArray(menuItem.children) && menuItem.children.length) {
        return (
          <ElSubMenu index={menuItem.index as string}>
            {{
              title: () => (
                <>
                  <Icon icon={menuItem.icon} />
                  <span>{menuItem.title}</span>
                </>
              ),
              default: () =>
                renderMenuItem(menuItem.children as MenuItemsType[]),
            }}
          </ElSubMenu>
        );
      }
      return (
        <ElMenuItem index={menuItem.index}>
          {{
            default: () => <Icon icon={menuItem.icon} />,
            title: () => <span>{menuItem.title}</span>,
          }}
        </ElMenuItem>
      );
    });
  }
  return <></>;
};
