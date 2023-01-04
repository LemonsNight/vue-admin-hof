import {
  ElCheckbox,
  ElCheckboxButton,
  ElRadio,
  ElRadioButton,
} from "element-plus";
import { isArray } from "lodash-es";
import type { FormSchema } from "@/components/Form";
import { isFunction, isObject } from "@vueuse/core";
import type { defineComponent } from "vue";

export const useRenderCheck = () => {
  const renderCheckboxOptions = function (row: FormSchema) {
    const { options, optionsAlias, componentProps } = row;
    const checkboxProps = isObject(componentProps)
      ? componentProps.checkboxProps
      : {};
    if (isArray(options)) {
      const labelAlias = isObject(optionsAlias) && optionsAlias.label;
      const valueAlias = isObject(optionsAlias) && optionsAlias.value;
      let Com: ReturnType<typeof defineComponent> = null;
      switch (row.component) {
        case "Checkbox":
          Com = ElCheckbox;
          break;
        case "CheckboxButton":
          Com = ElCheckboxButton;
          break;
        case "Radio":
          Com = ElRadio;
          break;
        case "RadioButton":
          Com = ElRadioButton;
          break;
        default:
          Com = ElCheckbox;
      }
      const ComProps = isObject(checkboxProps) ? checkboxProps : {};
      return (
        <>
          {options.map((item, index) => (
            <Com
              label={
                valueAlias
                  ? item[isFunction(valueAlias) ? valueAlias(item) : valueAlias]
                  : item.value
              }
              disabled={item.disabled}
              key={index}
              {...ComProps}
            >
              {{
                default: () => (labelAlias ? item[labelAlias] : item.label),
                ...(item.componentSlots ? item.componentSlots : {}),
              }}
            </Com>
          ))}
        </>
      );
    }
  };
  return {
    renderCheckboxOptions,
  };
};
