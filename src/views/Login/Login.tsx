import "./Login.scss";
import { defineComponent, ref, unref } from "vue";
import { useNamespace } from "element-plus";
import { fromField } from "@/views/Login/constant/formField";
import { Form } from "@/components/Form";
import { useRules } from "@/hooks/web/useRules";
// import * as PIXI from "pixi.js";
// import { useWindowSize } from "@vueuse/core";

const { requiredRules } = useRules();
const { FORM_FIELD, isFocusPassword } = fromField();
const bg1 = new URL("/src/assets/img/1.png", import.meta.url).href;
const bg2 = new URL("/src/assets/img/2.png", import.meta.url).href;
// const snowflakeImg = new URL(
//   "/src/assets/img/login/snowflake.png",
//   import.meta.url
// ).href;

export default defineComponent({
  name: "Login",
  setup() {
    const ns = useNamespace("login");
    const SnowRef = ref();
    // const { width, height } = useElementSize(SnowRef);
    // const { width, height } = useWindowSize();
    // 雪花
    // const initSnow = function () {
    //   const app = new PIXI.Application({
    //     width: unref(width) / 2,
    //     height: unref(height),
    //   });
    //   document.body.appendChild(app.view);
    //   app.stage.interactive = true;
    //   const bg = PIXI.Sprite.from(snowflakeImg);
    //   app.stage.addChild(bg);
    //   bg.height = 30;
    //   bg.width = 30;
    //   // 初始化雪花
    //   const snowPoi = Math.random() * unref(width) + "px";
    //   const snowSize = Math.random() * 15 + 5;
    // };
    // onMounted(() => {
    //   // initSnow();
    // });
    return () => (
      <>
        <main class={[ns.b()]}>
          <div ref={SnowRef} class={ns.e("left")}>
            <img class={ns.em("left", "bg")} src={bg1} />
          </div>

          <div class={ns.e("right")}>
            <img class={ns.em("right", "bg")} src={bg2} />
          </div>

          <div
            class={[
              ns.e("center"),
              ns.m(unref(isFocusPassword) ? "bg2" : "bg"),
            ]}
          >
            <h2 class={[ns.e("title")]}>HOF</h2>
            <Form
              propsList={FORM_FIELD()}
              rules={requiredRules(FORM_FIELD())}
            />
          </div>
        </main>
      </>
    );
  },
});
