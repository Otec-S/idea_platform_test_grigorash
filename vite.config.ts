import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteLegacyPlugin from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteLegacyPlugin({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: "idea_platform_test_grigorash",
});
