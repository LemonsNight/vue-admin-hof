import { ElOption, ElOptionGroup } from "element-plus";
import { isArray } from "lodash-es";
import type { FormSchema } from "@/components/Form";
import { isFunction, isObject } from "@vueuse/core";

export const useRenderSelect = () => {
  const renderSelectOptions = function (row: FormSchema) {
    const { options, optionsAlias } = row;
    if (isArray(options)) {
      const labelAlias = isObject(optionsAlias) && optionsAlias.label;
      const valueAlias = isObject(optionsAlias) && optionsAlias.value;
      return (
        <>
          {options.map((item, index) =>
            Array.isArray(item.options) && item.options.length ? (
              <ElOptionGroup
                label={"label" in item ? String(item.label) : ""}
                disabled={item.disabled}
              >
                {item.options.map((children, childrenIndex) => (
                  <ElOption
                    label={labelAlias ? children[labelAlias] : children.label}
                    value={
                      valueAlias
                        ? children[
                            isFunction(valueAlias)
                              ? valueAlias(children)
                              : valueAlias
                          ]
                        : children.value
                    }
                    disabled={children.disabled}
                    key={childrenIndex}
                  >
                    {{
                      default: () =>
                        labelAlias ? children[labelAlias] : children.label,
                      ...(children.componentSlots
                        ? children.componentSlots
                        : {}),
                    }}
                  </ElOption>
                ))}
              </ElOptionGroup>
            ) : (
              <ElOption
                label={labelAlias ? item[labelAlias] : item.label}
                value={
                  valueAlias
                    ? item[
                        isFunction(valueAlias) ? valueAlias(item) : valueAlias
                      ]
                    : item.value
                }
                disabled={item.disabled}
                key={index}
              >
                {{
                  default: () => (labelAlias ? item[labelAlias] : item.label),
                  ...(item.componentSlots ? item.componentSlots : {}),
                }}
              </ElOption>
            )
          )}
        </>
      );
    }
  };
  return {
    renderSelectOptions,
  };
};
