import { defineConfig } from "vite-plugin-windicss";
import plugin from "windicss/plugin";

export default defineConfig({
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".rotate-center": {
          animation: "rotate-center 0.6s ease-in-out both",
        },
        ".bounce-in-right": {
          animation: "bounce-in-right 1.1s both",
        },
        ".bounce-in-left": {
          animation: "bounce-in-left 1.1s both",
        },
        ".bounce-in-top": {
          animation: "bounce-in-top 1.1s 1.1s both",
        },
        ".vibrate-1": {
          animation: "vibrate-1 0.3s linear infinite both",
        },
      });
    }),
  ],
});
