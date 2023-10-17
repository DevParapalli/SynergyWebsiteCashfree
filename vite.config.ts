import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';

const config: UserConfig = {
  plugins: [sveltekit(), ViteImageOptimizer({
    png: {
      quality: 60,
    },
    webp: {
      quality: 60,
    },
    jpeg: {
      quality: 60,
    },
    jpg: {
      quality: 60,
    }
  })],
};

export default config;
