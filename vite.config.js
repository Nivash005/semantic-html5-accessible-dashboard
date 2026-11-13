import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        dashboard: "index.html",
        services: "services.html",
        reports: "reports.html"
      }
    }
  }
});
