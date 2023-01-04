import type { FormRules } from "element-plus";
import type { FormSchema } from "@/components/Form";
import { fromPairs } from "lodash-es";

const requiredRules = (propsList: FormSchema[]): FormRules => {
  return fromPairs(
    propsList
      .filter((f) => f.prop)
      .map((m) => [
        m.prop,
        {
          required: true,
          message: `${m.label}为必填项`,
        },
      ])
  );
};

const useRules = function () {
  return {
    requiredRules,
  };
};

export { useRules };
