import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: {
                'bundle': 'lib/index.ts',
                'components': 'lib/components/index.ts',
                'utils': 'lib/utils/index.ts',
            },
            name: 'manjui',
            formats: ['es'],
            cssFileName: 'components',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                preserveModules: false,
                exports: 'named',
                format: 'es',
                interop: 'auto',
            }
        },
        minify: false,
        sourcemap: true,
        target: 'es2020',
    },
    plugins: [
        vue()
    ],
    esbuild: {
        legalComments: 'none',
        keepNames: true,
        target: 'es2020',
    },
    server: {
        port: 8881
    }
});
