// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";

// extension/manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "snap n8n",
  version: "0.0.1",
  description: "Floating transparent AI debugger for n8n",
  permissions: ["tabs", "storage", "activeTab", "scripting"],
  host_permissions: ["https://*.anthropic.com/*"],
  background: {
    service_worker: "src/background.ts",
    type: "module"
  },
  content_scripts: [{
    matches: ["https://app.n8n.cloud/*", "http://localhost:5678/*"],
    js: ["src/content.tsx"],
    run_at: "document_end"
  }],
  action: {
    default_title: "snap n8n"
  },
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), crx({ manifest: manifest_default })],
  build: { outDir: "dist", emptyOutDir: true }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9leHRlbnNpb24vbWFuaWZlc3QuanNvbidcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgY3J4KHsgbWFuaWZlc3QgfSldLFxuICBidWlsZDogeyBvdXREaXI6ICdkaXN0JywgZW1wdHlPdXREaXI6IHRydWUgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLDJCQUFTLENBQUMsQ0FBQztBQUFBLEVBQ3BDLE9BQU8sRUFBRSxRQUFRLFFBQVEsYUFBYSxLQUFLO0FBQzdDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
