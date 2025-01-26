import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: {
                'bundle': 'lib/index.ts',
                'components': 'lib/components/index.ts',
                'blocks': 'lib/blocks/index.ts',
                'sections': 'lib/sections/index.ts',
                'utils': 'lib/utils/index.ts',
            },
            name: 'manjui',
            formats: ['es'],
            cssFileName: 'full',
        },
        rollupOptions: {
            external: ['vue'],
        },
    },
    plugins: [
        vue()
    ],
    esbuild: {
        legalComments: 'none',
        keepNames: true,
    },
    server: {
        port: 8881
    }
});
