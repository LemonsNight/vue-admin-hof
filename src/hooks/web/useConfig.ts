import constant from "@/plugins/theme/namespace.module.scss";

export const useConfig = () => {
  const namespace = constant.namespace;
  const getPrefixCls = (scope: string) => {
    return `${namespace}-${scope}`;
  };
  return {
    getPrefixCls,
    namespace,
  };
};
