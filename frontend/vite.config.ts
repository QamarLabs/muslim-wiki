import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import genezioLocalSDKReload from "@genezio/vite-plugin-genezio";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), genezioLocalSDKReload()],
  define: {
    'import.meta.env.VITE_API_URL_NESTJS': JSON.stringify('http://localhost:3000')
  }
});
