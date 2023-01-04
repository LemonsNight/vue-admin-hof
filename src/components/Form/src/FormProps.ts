import type { PropType } from "vue";
import type { FormSchema } from "@/components/Form";

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
  ...defaultElFormProps(),
});
