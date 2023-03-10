import { unref } from "vue";
import type { FormInstance } from "element-plus";
import { usePermissionsStoreWithOut } from "@/stores/modules/permissions";
import router from "@/router";
import { postLogin } from "@/plugins/axios/modules/auth";
import { useGlobalDataStoreWithOut } from "@/stores/modules/globalData";
import type { PostLoginType } from "@/plugins/axios/modules/auth";
const { setPermissions } = usePermissionsStoreWithOut();
const { getMenuList } = useGlobalDataStoreWithOut();
const onLogin = (formRef: FormInstance, formData: PostLoginType) => {
  return new Promise((resolve) => {
    unref(formRef)?.validate(async (valid) => {
      if (valid) {
        postLogin(formData)
          .then(async (data) => {
            setPermissions(data);
            await getMenuList();
            await router.push("/");
          })
          .finally(() => {
            resolve(true);
          });
      }
    });
  });
};

export { onLogin };
