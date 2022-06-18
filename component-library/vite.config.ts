import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react({}),
        dts({
            insertTypesEntry: true
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'ComponentLibrary',
            formats: ['es', 'umd'],
            fileName: (format) => `ComponentLibrary.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});