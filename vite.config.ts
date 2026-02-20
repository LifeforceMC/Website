import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ server: { allowedHosts: true }, plugins: [sveltekit(), devtoolsJson()] });
