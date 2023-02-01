import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  unref,
} from "vue";
import { useNamespace, ElTable, ElTableColumn } from "element-plus";
import { getElTableAttrs } from "./hepler";
import { isObject } from "lodash-es";
import { tableProps } from "./constant";

import type { TableSchema } from "./constant";

const ns = useNamespace("pro-table");
const ElTableRef = ref<ComponentRef<typeof ElTable>>();
export default defineComponent({
  name: "ProTable",
  props: tableProps(),
  setup(props, context) {
    const { attrs } = context;
    const getProps = reactive(getElTableAttrs(props));
    const getPropsList = computed(() => {
      return [
        {
          tableColumnProps: {
            type: "index",
            width: "50",
          },
        },
        ...props.propsList,
      ] as TableSchema[];
    });
    // 初始化表格参数
    function init() {
      getProps.maxHeight =
        unref(ElTableRef)?.$el.parentNode.parentNode.offsetHeight;
    }
    onMounted(() => {
      init();
    });
    return () => (
      <ElTable ref={ElTableRef} {...getProps} {...attrs} class={ns.b()}>
        {unref(getPropsList).map((item) => (
          <ElTableColumn
            label={item.label}
            prop={item.prop}
            {...item.tableColumnProps}
            {...(isObject(props.tableColumnProps)
              ? props.tableColumnProps
              : {})}
          >
            {{
              ...(isObject(item.componentSlots) ? item.componentSlots : {}),
            }}
          </ElTableColumn>
        ))}
      </ElTable>
    );
  },
});
