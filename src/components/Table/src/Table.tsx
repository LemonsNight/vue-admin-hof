import { computed, defineComponent, reactive, ref, unref } from "vue";
import { useNamespace, ElTable, ElTableColumn, ElButton } from "element-plus";
import { getElTableAttrs } from "./hepler";
import { isObject } from "lodash-es";
import { HeaderIcon, tableProps } from "./constant";
import { useIcon } from "@/components/Icon";
import "./css/table.scss";

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
    return () => (
      <div class={[ns.b()]}>
        <header class={["flex", "justify-between", "mb-4"]}>
          <div></div>
          <div>
            <ElButton circle icon={useIcon({ icon: HeaderIcon.refresh })} />
            <ElButton circle icon={useIcon({ icon: HeaderIcon.print })} />
            <ElButton circle icon={useIcon({ icon: HeaderIcon.operation })} />
            <ElButton circle icon={useIcon({ icon: HeaderIcon.search })} />
          </div>
        </header>
        <ElTable ref={ElTableRef} {...getProps} {...attrs} class={["flex-1"]}>
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
      </div>
    );
  },
});
