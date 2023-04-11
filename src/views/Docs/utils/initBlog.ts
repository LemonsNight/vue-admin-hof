export const initConfig = () => {
  document.title = "Daiyousei的博客";
  const icon = new URL("/src/assets/blog/web_icon.png", import.meta.url).href;
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = icon;
};
