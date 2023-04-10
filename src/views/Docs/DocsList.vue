<script lang="tsx">
import { defineComponent, onMounted } from "vue";
import { queryPosts } from "@/plugins/axios/modules/blog";

export default defineComponent({
  name: "DocsList",
  setup() {
    onMounted(() => {
      queryPosts({});
    });
    return () => <div></div>;
  },
});
</script>
