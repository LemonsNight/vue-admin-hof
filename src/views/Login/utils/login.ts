import { unref } from "vue";
import type { FormInstance } from "element-plus";
import { usePermissionsStoreWithOut } from "@/stores/modules/permissions";
import router from "@/router";
import { postLogin } from "@/plugins/axios/modules/auth";

const { setPermissions } = usePermissionsStoreWithOut();

const onLogin = (formRef: FormInstance, formData) => {
  return new Promise((resolve) => {
    unref(formRef)?.validate(async (valid) => {
      if (valid) {
        const data = await postLogin(formData);
        setPermissions(data);
        await router.push("/");
        resolve(true);
      }
    });
  });
};

export { onLogin };
