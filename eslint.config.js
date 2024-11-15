import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
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
