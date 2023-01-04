import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  unref,
} from "vue";
import { formProps } from "@/components/Form/src/FormProps";
import type { FormInstance } from "element-plus";
import { ElCol, ElForm, ElRow } from "element-plus";
import {
  getElFormAttrs,
  initFormField,
  renderComponent,
} from "@/components/Form/src/helper";
import { isFunction, isString } from "@vueuse/core";
import type { SetSchemaOptions } from "@/components/Form";
import { isArray, set } from "lodash-es";

export default defineComponent({
  name: "Form",
  inheritAttrs: false,
  props: formProps(),
  setup(props, context) {
    const { attrs, expose, slots } = context;
    const { propsList } = toRefs(props);
    const ElFormRef = ref<FormInstance>();
    const ComRefs = ref<Record<string, any>>({});
    // 获取表单渲染字段
    const getPropsList = computed(() =>
      Array.isArray(unref(propsList)) ? reactive(unref(propsList)) : []
    );
    // 初始化表单
    const formData = reactive({
      ...initFormField(unref(getPropsList)),
    });
    // 初始化请求数据
    const initAsyncOptions = () => {
      unref(getPropsList).forEach((item) => {
        const { api, prop } = item;
        if (isFunction(api) && isString(prop)) {
          api().then(async (data) => {
            set(item, "options", data);
          });
        }
      });
    };
    // 设置表单字段
    const setSchema = (options: SetSchemaOptions[]) => {
      if (isArray(options)) {
        const map = new Map();
        options.map((item) => map.set(item.field, item));
        unref(getPropsList).forEach((item) => {
          if (item.prop && map.has(item.prop)) {
            const data = map.get(item.prop);
            set(item, data.path, data.value);
          }
        });
      }
    };

    const setComponentRef = () => {
      unref(getPropsList).forEach((item) => {
        if (!item.componentProps) {
          item.componentProps = {};
        }
        if (item.prop) {
          ComRefs.value[item.prop + "Ref"] = ref();
          item.componentProps.ref = ComRefs.value[item.prop + "Ref"];
        }
      });
    };
    // setComponentRef();

    // 获取表单组件的Ref
    const getComponentRef = () => {
      return unref(ComRefs);
    };

    onMounted(() => {
      initAsyncOptions();
    });
    expose({
      formData,
      setSchema,
      getComponentRef,
    });
    return () => (
      <>
        <ElForm
          {...getElFormAttrs(props)}
          {...attrs}
          model={formData}
          ref={ElFormRef}
        >
          <ElRow gutter={20}>
            {unref(getPropsList).map((item) => (
              <ElCol>
                {renderComponent(item, { formData, ElFormRef, ComRefs })}
              </ElCol>
            ))}
          </ElRow>
        </ElForm>
      </>
    );
  },
});
