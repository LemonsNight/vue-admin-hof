export const CardConfig = (type: number) => {
  switch (type) {
    case 1:
      return {
        theme: "initiate",
      };
    case 2:
      return {
        theme: "approve",
      };
    case 3:
      return {
        theme: "copy",
      };
    default:
      return {
        theme: "initiate",
      };
  }
};
