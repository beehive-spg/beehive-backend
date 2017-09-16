module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        strict: 0,
        indent: ['error', 'tab'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'function-paren-newline': ['error', 'multiline'],
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                singleQuote: true,
                trailingComma: 'all',
                jsxBracketSameLine: true,
                semi: false,
                useTabs: true,
                tabWidth: 4,
            },
        ],
    },
}
