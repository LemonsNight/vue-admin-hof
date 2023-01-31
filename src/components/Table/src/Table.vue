<script lang="tsx">
import { defineComponent } from "vue";
import { useNamespace, ElTable, ElTableColumn } from "element-plus";
import { tableProps } from "./constant";
const ns = useNamespace("pro-table");
export default defineComponent({
  name: "ProTable",
  props: tableProps(),
  setup() {
    return () => (
      <>
        <ElTable class={ns.b()}>
          <ElTableColumn></ElTableColumn>
        </ElTable>
      </>
    );
  },
});
</script>
