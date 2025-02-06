import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            semi: "off",
            "no-undef":"off"
        }
    }
];