import type { ColProps, Context, FormSchema } from "@/components/Form";
import type { defineComponent } from "vue";
import type { RowTypes } from "@/components/Form/src/FormProps";

import { fromPairs, isArray, isFunction, isObject, isString } from "lodash-es";

import { componentMap } from "@/components/Form/src/componentMap";
import { ElFormItem } from "element-plus";
import { useRenderSelect } from "./components/useRenderSelect";
import { useRenderCheck } from "@/components/Form/src/components/useRenderCheck";
import { useRenderUpload } from "@/components/Form/src/components/useRenderUpload";
import { defaultElFormProps } from "@/components/Form/src/FormProps";
/**
 * 自定义表单组件
 * @param row
 * @param context
 */
function renderComponent(row: FormSchema, context: Context) {
  if (!isObject(row)) {
    return <></>;
  }
  const { render, component, prop, noRenderFormItem } = row;
  const FormItemCom = noRenderFormItem ? "div" : ElFormItem;
  // 直接渲染组件
  if (isFunction(render)) {
    return <FormItemCom {...getElFormItem(row)}>{render(context)}</FormItemCom>;
  }
  // 字段和组件必须同时存在
  if (isString(component) && isString(prop)) {
    const CustomComponent = componentMap[component] as ReturnType<
      typeof defineComponent
    >;
    return (
      <FormItemCom {...getElFormItem(row)}>
        {{
          default: () => {
            if (component === "Upload") {
              return (
                <CustomComponent
                  vModel={[context.formData[prop], "fileList"]}
                  ref={(el) => {
                    if (el) {
                      context.ComRefs.value[prop + "Ref"] = el;
                    }
                  }}
                  {...setComAttrs(row, context)}
                >
                  {{ ...setFromSlot(row) }}
                </CustomComponent>
              );
            }
            if (component === "Tree") {
              return (
                <CustomComponent
                  data={context.formData[prop]}
                  vModel={[context.formData[prop]]}
                  ref={(el) => {
                    if (el) {
                      context.ComRefs.value[prop + "Ref"] = el;
                    }
                  }}
                  {...setComAttrs(row, context)}
                >
                  {{ ...setFromSlot(row) }}
                </CustomComponent>
              );
            }
            return (
              <CustomComponent
                vModel={[context.formData[prop]]}
                ref={(el) => {
                  if (el) {
                    context.ComRefs.value[prop + "Ref"] = el;
                  }
                }}
                {...setComAttrs(row, context)}
              >
                {{ ...setFromSlot(row) }}
              </CustomComponent>
            );
          },
        }}
      </FormItemCom>
    );
  }
}

/**
 * 设置组件内置插槽
 * @param item
 */
function setFromSlot(item: FormSchema) {
  const { renderSelectOptions } = useRenderSelect();
  const { renderCheckboxOptions } = useRenderCheck();
  const { renderUpload } = useRenderUpload();
  if (isObject(item)) {
    const { component, componentSlots } = item;
    const slots = isObject(componentSlots) ? componentSlots : {};
    if (component) {
      switch (component) {
        case "Select":
          return {
            default: () => renderSelectOptions(item),
            ...slots,
          };
        case "Radio":
        case "RadioButton":
        case "CheckboxButton":
        case "Checkbox":
          return {
            default: () => renderCheckboxOptions(item),
          };
        case "Upload":
          return {
            default: () => renderUpload(item),
            ...slots,
          };
        default:
          return slots;
      }
    }
  }
  return {};
}

/**
 * 设置组件属性
 * @param item
 */
function setComAttrs(item: FormSchema, context: Context) {
  const { component, componentProps, label } = item;

  const props = isObject(componentProps) ? { ...componentProps } : {};
  const filterAttrs = fromPairs(
    Object.entries(props).filter((f) => !["checkboxProps"].includes(f[0]))
  );
  switch (component) {
    case "Select":
      return {
        clearable: true,
        placeholder: `请选择${label}`,
        filterable: true,
        "no-data-text": `暂无${label || "列表"}数据`,
        "no-match-text": `暂无${label || "搜索"}数据`,
        ...filterAttrs,
      };
    case "Input":
      return {
        clearable: true,
        placeholder: `请输入${label}`,
        ...filterAttrs,
      };
    case "Autocomplete":
      return {
        clearable: true,
        placeholder: `请输入${label}`,
        ...filterAttrs,
      };
    case "Cascader":
      return {
        clearable: true,
        placeholder: `请选择${label}`,
        filterable: true,
        ...filterAttrs,
      };
    case "SelectV2":
      return {
        clearable: true,
        placeholder: `请选择${label}`,
        filterable: true,
        ...filterAttrs,
        options: Array.isArray(filterAttrs.options) ? filterAttrs.options : [],
      };
    // case "Upload":
    //   return {
    //     ...filterAttrs,
    //   };
    default:
      return {
        placeholder: `请输入${label}`,
        ...filterAttrs,
      };
  }
}

/**
 * 初始化表单字段
 * @param data
 */
function initFormField(data: FormSchema[]) {
  return isArray(data)
    ? fromPairs(
        data
          .filter(({ prop }) => prop)
          .map(({ prop, defaultValue }) => [prop, defaultValue])
      )
    : {};
}

/**
 * 获取ElFormItem属性
 * @param data
 */
function getElFormItem(data: FormSchema) {
  if (isObject(data)) {
    const { label, prop } = data;
    if (isObject(data.formItemProps)) {
      return {
        label,
        prop,
        ...fromPairs(Object.entries(data.formItemProps)),
      };
    }
    return { label, prop };
  }
  return {};
}

/**
 * 获取ElForm属性
 * @param props
 */
function getElFormAttrs(props: object) {
  const keys = Object.keys(defaultElFormProps());
  return fromPairs(
    Object.entries(props).filter((item) => keys.includes(item[0]))
  );
}
/**
 * 设置colProps的属性
 * @param colProps
 */
function setLayout(colProps: ColProps | undefined): ColProps {
  return isObject(colProps) ? colProps : {};
}

/**
 * 设置RowProps的属性
 * @param rowProps
 */
function setRowProps(rowProps: RowTypes | undefined): RowTypes {
  const props = {
    gutter: 20,
  };
  return isObject(rowProps) ? { ...props, ...rowProps } : props;
}

export {
  renderComponent,
  initFormField,
  getElFormItem,
  getElFormAttrs,
  setLayout,
  setRowProps,
};
