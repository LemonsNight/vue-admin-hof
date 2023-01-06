export const getBorderConfig = (index: number, total: number) => {
  if (index === 0) {
    return ["top-right", "bottom-right", "top"];
  }
  if (index === total - 1) {
    return ["top-left", "top", "bottom-left"];
  }
  return ["top", "top-left", "top-right", "bottom-right", "bottom-left"];
};
