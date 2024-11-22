import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command, mode }) => ({
    plugins: [
        vue(),
        dts({
            include: ['src/ui/**/*.ts', 'src/ui/**/*.vue'],
            outDir: 'dist/types',
            cleanVueFileName: true,
            beforeWriteFile: (filePath, content) => {
                if (content.trim() === '') {
                    return false;
                }
                return { filePath, content };
            },
        }),
    ],

    resolve: {
        alias: [{ find: '@/components', replacement: resolve(__dirname, './src/ui/components') }],
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/ui/index.ts'),
            name: 'taylux',
            fileName: (format) => `taylux.${format}.js`,
        },
        minify: command === 'build' ? 'terser' : false,
        cssCodeSplit: false,
        cssMinify: true,
        terserOptions:
            command === 'build'
                ? {
                      compress: {
                          drop_console: true,
                          drop_debugger: true,
                          pure_funcs: ['console.log', 'console.info', 'console.debug'],
                          passes: 2,
                      },
                      mangle: {
                          properties: false,
                      },
                      format: {
                          comments: false,
                      },
                  }
                : undefined,
        rollupOptions: {
            external: ['vue'],
            output: [
                {
                    format: 'es',
                    exports: 'named',
                    globals: {
                        vue: 'Vue',
                    },
                    assetFileNames: 'assets/[name][extname]',
                    preserveModulesRoot: 'src',
                    banner: command === 'build' ? '/*! Taylux v1.0.0 | MIT License */' : '',
                },
                {
                    format: 'umd',
                    name: 'tailux',
                    exports: 'named',
                    globals: {
                        vue: 'Vue',
                    },
                    assetFileNames: 'assets/[name][extname]',
                    banner: command === 'build' ? '/*! Taylux v1.0.0 | MIT License */' : '',
                },
            ],
        },
        reportCompressedSize: true,
        chunkSizeWarningLimit: 1000,
        assetsDir: command === 'build' ? 'assets' : '',
    },
    server: {
        port: 3000,
        open: true,
        cors: true,
        hmr: {
            overlay: true,
        },
    },
    optimizeDeps: {
        include: ['vue'],
    },
    esbuild: {
        drop: command === 'build' ? ['console', 'debugger'] : [],
    },
}));
