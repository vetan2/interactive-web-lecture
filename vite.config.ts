import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react"
import { ImageLoader } from "esbuild-vanilla-image-loader"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [ImageLoader()],
      },
    }),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        ref: true,
      },
    }),
  ],
  base: "/interactive-web-lecture",
})
