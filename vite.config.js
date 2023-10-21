import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/AdminPanel/",

  build: {
    target: "esnext",
  },

  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@reducer": path.resolve(__dirname, "./src/reducer"),
      "@http-service": path.resolve(__filename, "./src/core/http-service.js"),
    },
  },

  plugins: [react()],
});
