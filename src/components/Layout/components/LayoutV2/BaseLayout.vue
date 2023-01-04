<script lang="tsx">
import { defineComponent } from "vue";
import { useNamespace } from "element-plus";
import "./BaseLayout.scss";
import { useConfigStoreWithOut } from "@/stores/modules/config";

const configStore = useConfigStoreWithOut();
const ns = useNamespace("base-layoutV2");

export default defineComponent({
  name: "BaseLayout",
  setup(props, context) {
    const { slots } = context;
    return () => <main class={[ns.b()]}></main>;
  },
});
</script>
