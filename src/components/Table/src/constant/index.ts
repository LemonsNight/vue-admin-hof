import type { PropType, CSSProperties } from "vue";
import type { TableProps } from "element-plus";
type DefaultRow = any;
type Layout = "fixed" | "auto";
export const defaultTableProps = {
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  size: String,
  width: [String, Number],
  height: {
    type: [String, Number],
    default: "100%",
  },
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true,
  },
  stripe: Boolean,
  border: {
    type: Boolean,
    default: true,
  },
  rowKey: [String, Function] as PropType<TableProps<DefaultRow>["rowKey"]>,
  showHeader: {
    type: Boolean,
    default: true,
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function as PropType<TableProps<DefaultRow>["summaryMethod"]>,
  rowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["rowClassName"]
  >,
  rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>["rowStyle"]>,
  cellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["cellClassName"]
  >,
  cellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["cellStyle"]
  >,
  headerRowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["headerRowClassName"]
  >,
  headerRowStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["headerRowStyle"]
  >,
  headerCellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["headerCellClassName"]
  >,
  headerCellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["headerCellStyle"]
  >,
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array as PropType<TableProps<DefaultRow>["expandRowKeys"]>,
  defaultExpandAll: Boolean,
  defaultSort: Object as PropType<TableProps<DefaultRow>["defaultSort"]>,
  tooltipEffect: String,
  spanMethod: Function as PropType<TableProps<DefaultRow>["spanMethod"]>,
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  indent: {
    type: Number,
    default: 16,
  },
  treeProps: {
    type: Object as PropType<TableProps<DefaultRow>["treeProps"]>,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children",
      };
    },
  },
  lazy: Boolean,
  load: Function as PropType<TableProps<DefaultRow>["load"]>,
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  className: {
    type: String,
    default: "",
  },
  tableLayout: {
    type: String as PropType<Layout>,
    default: "fixed",
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
  flexible: Boolean,
};

export interface TableSchema {
  // 唯一值
  prop?: string;
  // 标题
  label?: string;
  componentSlots?: Record<string, () => JSX.Element>;
  tableColumnProps?: Record<any, any>;
}

export const tableProps = () => ({
  propsList: {
    type: Array as PropType<TableSchema[]>,
    default: () => [],
    required: true,
  },
  tableColumnProps: {
    type: Object,
    default: () => ({
      align: "center",
      "header-align": "center",
      "show-overflow-tooltip": true,
    }),
  },
  paginationProps: {
    type: Object,
    default: () => ({
      background: true,
      layout: "total, sizes, prev, pager, next, jumper",
      total: 0,
      defaultCurrentPage: 1,
    }),
  },
  ...defaultTableProps,
});

export const HeaderIcon = {
  refresh: "ep:refresh",
  print: "material-symbols:print-outline",
  operation: "ep:operation",
  search: "ep:search",
};
