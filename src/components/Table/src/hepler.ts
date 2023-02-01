import { fromPairs } from "lodash-es";
import { defaultTableProps } from "./constant";

/**
 * 获取Table属性
 * @param props
 */
export function getElTableAttrs(props: object) {
  const keys = Object.keys(defaultTableProps);
  const whiteList = new Set(["propsList", "tableColumnProps"]);
  return fromPairs(
    Object.entries(props).filter(
      (item) => keys.includes(item[0]) && !whiteList.has(item[0])
    )
  );
}

/**
 * 获取表格外的容器高度，进行自适应
 */
export function getTableHeight() {}
