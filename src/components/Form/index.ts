import Form from "@/components/Form/src/Form";
import type { FormInstance, ElForm } from "element-plus";
import type { ComponentName } from "@/types/components";

export type SelectOptions = {
  label?: string | number;
  value?: string | number;
  disabled?: boolean;
  key?: string | number;
  options?: SelectOptions[];
} & Recordable;

export type OptionsAlias = {
  label?: string;
  value?: string | ((activeValue: any) => string);
  children?: string;
};

export interface FormSchema {
  // 唯一值
  prop?: string;
  // 标题
  label?: string;
  // 自定义渲染
  render?: (args: Context) => JSX.Element;
  // 默认值
  defaultValue?: unknown;
  // 表单组件
  component?: ComponentName;
  componentProps?: {
    checkboxProps?: Record<string, any>;
  } & Record<string, any>;
  noRenderFormItem?: boolean;
  formItemProps?: unknown;
  options?: SelectOptions[];
  optionsAlias?: OptionsAlias;
  api?: () => Promise<SelectOptions[]>;
  componentSlots?: Record<string, () => JSX.Element>;
  colProps?: ColProps;
  isHidden?: boolean;
}

export interface Context {
  formData: Record<any, any>;
  ElFormRef: ComponentRef<FormInstance>;
  ComRefs: Record<any, any>;
}

export type SetSchemaOptions = {
  field: string;
  path: string;
  value: any;
};

export type ColProps = {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  tag?: string;
};

export type FormExposeType = {
  ElFormRef: ComponentRef<typeof ElForm>;
  formData: Record<any, any>;
  setSchema: (ext: SetSchemaOptions[]) => void;
  getComponentRef: () => Record<string, any>;
};

export { Form };
