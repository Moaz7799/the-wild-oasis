import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["date-fns"],
  },
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Emit warnings instead of errors
      emitError: false, // Do not treat linting errors as blocking
    }),
  ],
});
