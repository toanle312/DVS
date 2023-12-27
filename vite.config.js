import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/DVS/",
  plugins: [
    react(), // I add this on my project
    nodePolyfills({
      protocolImports: true,
    }),
  ],
});
