import type { PropType } from "vue";
import type { ColProps, FormSchema } from "@/components/Form";

import { componentSizes } from "element-plus/es/constants/size";
import type { FormRules } from "element-plus";
export const defaultElFormProps = () => ({
  model: Object,
  rules: {
    type: Object as PropType<FormRules>,
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right",
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left",
  },
  labelWidth: {
    type: [String, Number],
    default: "",
  },
  labelSuffix: {
    type: String,
    default: "",
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    values: componentSizes,
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },
  scrollToError: Boolean,
});

export interface RowTypes {
  tag?: string;
  gutter?: number;
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  align?: "top" | "middle" | "bottom";
}

export const formProps = () => ({
  propsList: {
    type: Array as PropType<FormSchema[]>,
    default: () => [],
    required: true,
  },
  formData: {
    type: Object,
    default: () => ({}),
  },
  isCol: {
    type: Boolean,
    default: false,
  },
  rowProps: {
    type: Object as PropType<RowTypes>,
    default: () => ({}),
  },
  colProps: {
    type: Object as PropType<ColProps>,
    default: () => ({
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
    }),
  },
  ...defaultElFormProps(),
});
