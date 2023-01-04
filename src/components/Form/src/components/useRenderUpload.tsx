import { ElButton } from "element-plus";
import type { FormSchema } from "@/components/Form";
import { useIcon } from "@/components/Icon";

export const useRenderUpload = () => {
  const renderUpload = function (row: FormSchema) {
    return (
      <>
        <ElButton icon={useIcon({ icon: "ep:upload" })}>点击上传</ElButton>
      </>
    );
  };
  return {
    renderUpload,
  };
};
