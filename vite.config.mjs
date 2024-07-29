import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.js"),
      name: "DottyGlobe",
      fileName: (format) => `globe.${format}.js`,
    },
    rollupOptions: {
      external: ["three"],
      output: {
        globals: {
          three: "THREE",
        },
      },
    },
  },
  server: {
    open: "/index.html",
  },
})