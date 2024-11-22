import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            'coverage/**',
            '.vscode/**',
            '.idea/**',
            '*.config.js',
            'public/**',
            'build/**',
            '.github/workflows/build.yml',
        ],
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: import('vue-eslint-parser'),
            parserOptions: {
                parser: {
                    ts: tsParser,
                    tsx: tsParser,
                    js: tsParser,
                },
                extraFileExtensions: ['.vue'],
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            vue: pluginVue,
        },
    },
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        plugins: {
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];
