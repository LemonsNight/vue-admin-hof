import { reactive } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { filterForm, isArray } from "@/utils/utils";
interface SubmitType {
  loading?: string;
  params?: any;
  // api: Function
  successText?: string;
  errorText?: string;
  message?: string;
  title?: string;
}

interface SubmitParamsType {
  loadingText?: string;
  params?: any;
  api: Function;
  success?: string;
  error?: string;
  submitMessage?: string;
}

interface UpdateType {
  loading?: string;
  params?: any;
  api?: Function;
  successText?: string;
  errorText?: string;
}

interface CrudLoadingType {
  [_submitLoading: string]: boolean;
}

interface UpdateLoadingType {
  [_updateLoading: string]: boolean;
}

const submitDataHook = (context: SubmitType) => {
  const {
    loading = "_submitLoading",
    // params,
    // api,
    successText = "操作成功",
    errorText = "操作失败",
    message = "是否进行提交",
    title = "温馨提示",
  } = context;
  const submitLoading = reactive({}) as CrudLoadingType;
  const submitHook = ({
    params,
    api,
    loadingText = loading,
    success = successText,
    error = errorText,
    submitMessage = message,
  }: SubmitParamsType) => {
    return new Promise((resolve, reject) => {
      submitLoading[loadingText as string] = true;
      ElMessageBox.confirm(submitMessage, title)
        .then(() => {
          return api(isArray(params) ? params : filterForm(params))
            .then((data: any) => {
              ElMessage.success(success);
              resolve(data);
              return data;
            })
            .catch((res: any) => {
              reject(res);
              if (res.code === "1" && !res.msg) {
                ElMessage.error(error);
              }
            });
        })
        .catch(() => {
          reject();
          ElMessage.warning("取消操作");
        })
        .finally(() => {
          submitLoading[loadingText as string] = false;
        });
    });
  };
  return {
    submitHook,
    submitLoading,
  };
};

const updateData = (context: UpdateType) => {
  const {
    loading = "_updateLoading",
    successText = "操作成功",
    errorText = "操作失败",
  } = context;
  const updateLoading = reactive({ [loading]: false }) as UpdateLoadingType;
  const updateHook = ({
    params,
    api,
    success = successText,
    error = errorText,
    loadingText = loading,
  }: SubmitParamsType) => {
    updateLoading[loadingText] = true;
    return api(isArray(params) ? params : filterForm(params))
      .then((data: any) => {
        ElMessage.success(success);
        return data;
      })
      .catch((e: any) => {
        ElMessage.error(error);
        throw e;
      })
      .finally(() => {
        updateLoading[loadingText] = false;
      });
  };
  return {
    updateHook,
    updateLoading,
  };
};

export { submitDataHook, updateData };
