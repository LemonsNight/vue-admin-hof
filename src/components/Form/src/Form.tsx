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
import { ElCol, ElForm, ElRow, useNamespace } from "element-plus";
import {
  getElFormAttrs,
  initFormField,
  renderComponent,
  setLayout,
  setRowProps,
} from "@/components/Form/src/helper";
import { isFunction, isString } from "@vueuse/core";
import type { SetSchemaOptions } from "@/components/Form";
import { isArray, set } from "lodash-es";

export default defineComponent({
  name: "Form",
  inheritAttrs: false,
  props: formProps(),
  setup(props, context) {
    const ns = useNamespace("base-form");
    const { attrs, expose } = context;
    const { propsList, formData: propFormData } = toRefs(props);
    const ElFormRef = ref<FormInstance>();
    const ComRefs = ref<Record<string, any>>({});
    // 获取表单渲染字段
    const getPropsList = computed(() =>
      Array.isArray(unref(propsList)) ? reactive(unref(propsList)) : []
    );
    // 初始化表单
    const formData = reactive({
      ...initFormField(unref(getPropsList)),
      ...unref(propFormData),
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

    // 获取表单组件的Ref
    const getComponentRef = () => {
      return unref(ComRefs);
    };

    onMounted(() => {
      initAsyncOptions();
    });

    expose({
      ElFormRef,
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
          class={ns.b()}
        >
          {props.isCol ? (
            <ElRow {...setRowProps(props.rowProps)}>
              {unref(getPropsList).map((item) => (
                <ElCol
                  v-show={!item.isHidden}
                  class={ns.e("col")}
                  {...{ ...props.colProps, ...setLayout(item.colProps) }}
                >
                  {renderComponent(item, { formData, ElFormRef, ComRefs })}
                </ElCol>
              ))}
            </ElRow>
          ) : (
            unref(getPropsList).map((item) =>
              renderComponent(item, { formData, ElFormRef, ComRefs })
            )
          )}
        </ElForm>
      </>
    );
  },
});
