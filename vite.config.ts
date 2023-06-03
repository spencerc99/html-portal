import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // sanfrancisco: resolve(__dirname, "sanfrancisco.html"),
        // file for each .html file in the root directory
        ...fs
          .readdirSync(__dirname)
          .filter((s) => s !== "index.html" && s.endsWith(".html"))
          .map((path) => path.slice(0, -5))
          .reduce((acc, path) => {
            acc[path] = resolve(__dirname, `${path}.html`);
            return acc;
          }, {} as Record<string, string>),
      },
    },
  },
});
