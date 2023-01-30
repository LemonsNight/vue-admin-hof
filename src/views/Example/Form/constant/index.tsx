import type { FormSchema } from "@/components/Form";
import type { AutocompleteFetchSuggestionsCallback } from "element-plus";

const componentSlots = {
  default: () => <div>插槽1</div>,
};
export const propsList: FormSchema[] = [
  {
    label: "Input 输入框",
    prop: "Input",
    component: "Input",
  },
  {
    label: "Select 选择器",
    prop: "Select",
    component: "Select",
    options: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
      { label: "选项3", value: "3", disabled: true },
      {
        label: "自定义插槽",
        value: "4",
        componentSlots: {
          default: () => <div>自定义插槽</div>,
        },
      },
      {
        label: "Group组",
        options: [
          { label: "选项11", value: "11" },
          { label: "选项22", value: "22" },
        ],
      },
    ],
  },
  {
    label: "自动补全输入框",
    prop: "Autocomplete",
    component: "Autocomplete",
    componentProps: {
      "fetch-suggestions": (
        queryString: string,
        cb: AutocompleteFetchSuggestionsCallback
      ) => {
        cb([
          { value: "vue", link: "https://github.com/vuejs/vue" },
          { value: "element", link: "https://github.com/ElemeFE/element" },
          { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
          { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
          { value: "vuex", link: "https://github.com/vuejs/vuex" },
          { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
          { value: "babel", link: "https://github.com/babel/babel" },
        ]);
      },
      onChange: (value: string) => {
        alert(value);
      },
      onSelect: (value: object) => {
        alert(JSON.stringify(value));
      },
    },
    componentSlots: {
      prefix: () => <div>插槽prefix</div>,
      suffix: () => <div>插槽suffix</div>,
      prepend: () => <div>插槽prepend</div>,
      append: () => <div>插槽append</div>,
    },
  },
  {
    label: "Cascader 级联选择器",
    prop: "Cascader",
    component: "Cascader",
    componentProps: {
      options: [
        { label: "选项1", value: "1" },
        { label: "选项2", value: "2" },
      ],
    },
  },
  {
    label: "Checkbox 多选框",
    prop: "Checkbox",
    component: "Checkbox",
    componentProps: {
      label: "Checkbox 多选框",
      checkboxProps: {
        border: true,
      },
    },
    options: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
    ],
  },
  {
    label: "CheckboxButton 多选框",
    prop: "CheckboxButton",
    component: "CheckboxButton",
    componentProps: {
      label: "CheckboxButton 多选框",
    },
    options: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
    ],
  },
  {
    label: "自定义插槽 Checkbox 多选框",
    prop: "CheckboxSlot",
    component: "Checkbox",
    componentProps: {
      label: "Checkbox 多选框",
      checkboxProps: {
        border: true,
      },
    },
    options: [
      {
        label: "选项1",
        value: "1",
        componentSlots: componentSlots,
      },
      { label: "选项2", value: "2" },
    ],
  },
  {
    label: "ColorPicker 颜色选择器",
    prop: "ColorPicker",
    component: "ColorPicker",
  },
  {
    label: "DatePicker 日期选择器",
    prop: "DatePicker",
    component: "DatePicker",
  },
  {
    label: "Input Number 数字输入框",
    prop: "InputNumber",
    component: "InputNumber",
  },
  {
    label: "Radio 单选框",
    prop: "Radio",
    component: "Radio",
    componentProps: {
      label: "Checkbox 多选框",
      checkboxProps: {
        border: true,
      },
    },
    options: [
      { label: "选项1", value: "1" },
      { label: "选项2", value: "2" },
    ],
  },
  {
    label: "Rate 评分",
    prop: "Rate",
    component: "Rate",
  },
  {
    label: "Select V2 虚拟列表选择器",
    prop: "SelectV2",
    component: "SelectV2",
    componentProps: {
      options: [
        { label: "选项1", value: "1" },
        { label: "选项2", value: "2" },
      ],
    },
  },
  {
    label: "Slider 滑块",
    prop: "Slider",
    component: "Slider",
  },
  {
    label: "Switch 开关",
    prop: "Switch",
    component: "Switch",
  },
  {
    label: "TimePicker 时间选择器",
    prop: "TimePicker",
    component: "TimePicker",
  },
  {
    label: "TimeSelect 时间选择",
    prop: "TimeSelect",
    component: "TimeSelect",
  },
  {
    label: "Transfer 穿梭框",
    prop: "Transfer",
    component: "Transfer",
    componentProps: {
      data: [
        { label: "选项1", key: "1" },
        { label: "选项2", key: "2" },
      ],
    },
  },
  {
    label: "Upload 上传",
    prop: "Upload",
    component: "Upload",
    componentProps: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    },
  },
  {
    label: "Tree 树形控件",
    prop: "Tree",
    component: "Tree",
  },
  {
    label: "TreeSelect",
    prop: "TreeSelect",
    component: "TreeSelect",
  },
  {
    label: "Tree V2",
    prop: "TreeV2",
    component: "TreeV2",
  },
];
