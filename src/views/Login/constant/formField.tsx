import type { Context, FormSchema } from "@/components/Form";
import { ElButton, ElInput } from "element-plus";
import { useIcon } from "@/components/Icon";
import { ref, unref } from "vue";
import { onLogin } from "@/views/Login/utils/login";
const loading = ref(false);
const isFocusPassword = ref(false);
const FORM_FIELD = function (): FormSchema[] {
  return [
    {
      label: "账号",
      prop: "username",
      defaultValue: "admin",
      render: ({ formData }: Context) => {
        return (
          <ElInput
            clearable
            v-model={formData.username}
            showWordLimit={true}
            placeholder={"请输入账号"}
            maxlength={11}
          />
        );
      },
    },
    {
      label: "密码",
      prop: "password",
      defaultValue: "123456",
      render: ({ formData }: Context) => {
        return (
          <ElInput
            showPassword
            clearable
            maxlength={16}
            type={"password"}
            v-model={formData.password}
            placeholder={"请输入密码"}
            onFocus={() => {
              isFocusPassword.value = !unref(isFocusPassword);
            }}
            onBlur={() => {
              isFocusPassword.value = !unref(isFocusPassword);
            }}
          />
        );
      },
    },
    {
      labelWidth: "50px",
      render: ({ ElFormRef, formData }: Context) => {
        return (
          <aside class={"w-full flex"}>
            <div class={"flex-1"}>
              <ElButton
                loading={loading.value}
                type={"primary"}
                icon={useIcon({ icon: "material-symbols:login" })}
                onClick={async () => {
                  loading.value = true;
                  await onLogin(ElFormRef, formData);
                  loading.value = false;
                }}
              >
                登录
              </ElButton>
              <ElButton icon={useIcon({ icon: "mdi:register-outline" })}>
                注册
              </ElButton>
            </div>
            <ElButton
              icon={useIcon({ icon: "material-symbols:devices-other" })}
              type={"text"}
            >
              第三方登录
            </ElButton>
          </aside>
        );
      },
    },
  ].map((t) => ({
    ...t,
    required: true,
  }));
};

const fromField = function () {
  return {
    FORM_FIELD,
    isFocusPassword,
  };
};

export { fromField };
