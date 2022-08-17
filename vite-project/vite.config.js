import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //路径别名
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    port: 3001,
    open: true,
    strictPort: false,
    https: false,

    // 代理
     proxy: {
       '/api': {
         target: 'http://localhost:9990',
         changeOrigin: true,
        //  rewrite: (path) => path.replace(/^\/admin/, '')
       },
     }
  },
});
