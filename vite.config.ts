import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { civetman } from "vite-plugin-civetman";

export default defineConfig({
  plugins: [
    civetman(),
    sveltekit(),
  ],
});
