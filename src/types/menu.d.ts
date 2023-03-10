export type MenuItemsType = {
  id(id: any): string;
  title?: string;
  icon?: string;
  index?: string;
  children?: MenuItemsType[];
  url?: string;
};
