import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        files: ['**/*vue'],
        languagesOptions: {
            parser: pluginVue.parserServices.getParser('snapshot'),
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.vue'],
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
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
