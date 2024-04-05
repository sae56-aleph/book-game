import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), // Gère les composants React
        svgr(), // Gère les fichiers SVG
    ],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: '/src/tests/setup.js', // assuming the test folder is in the root of our project
    }
});
