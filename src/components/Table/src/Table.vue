<script lang="tsx">
import { defineComponent } from "vue";
import { useNamespace, ElTable, ElTableColumn } from "element-plus";
import { tableProps } from "./constant";
const ns = useNamespace("pro-table");
export default defineComponent({
  name: "ProTable",
  props: tableProps(),
  setup(props) {
    return () => (
      <>
        <ElTable class={ns.b()}>
          {props.propsList.map((item) => (
            <ElTableColumn label={item.label} prop={item.prop}></ElTableColumn>
          ))}
        </ElTable>
      </>
    );
  },
});
</script>
