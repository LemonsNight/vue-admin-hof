<script lang="tsx">
import { defineComponent } from "vue";
const homeImg = new URL("/src/assets/img/home/welcome.png", import.meta.url)
  .href;
console.log(homeImg);
export default defineComponent({
  name: "Home",
  setup() {
    return () => (
      <>
        <img class="w-full h-full" src={homeImg} />
      </>
    );
  },
});
</script>
