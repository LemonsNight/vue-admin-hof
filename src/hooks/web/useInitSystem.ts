// 强制关闭生产环境调试
// https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
const debuggerFn = function () {
  if (import.meta.env.PROD) {
    requestAnimationFrame(debuggerFn);
  }
};

const useInitSystem = function () {
  return {
    debuggerFn,
  };
};

export { useInitSystem };
