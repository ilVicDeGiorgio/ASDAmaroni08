import globals from 'globals';
import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import'; 

const indentOptions = {
  SwitchCase: 1,
  outerIIFEBody: 'off',
  MemberExpression: 2,
  FunctionDeclaration: { body: 1, parameters: 2 },
  FunctionExpression: { body: 1, parameters: 2 },
  CallExpression: { arguments: 2 },
  flatTernaryExpressions: true,
  ignoreComments: false,
  ignoredNodes: ['JSXAttribute'],
};

export default [
  {
    ignores: ['next-env.d.ts', 'node_modules', 'dist', '.eslintrc.cjs', '*.js', '*.mjs', '/next.*', '*.cjs']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      }
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Layout & Formatting
      'array-bracket-newline': ['warn', 'consistent'],
      'array-bracket-spacing': ['warn', 'never'],
      'array-element-newline': ['warn', 'consistent'],
      'arrow-parens': ['warn', 'as-needed'],
      'arrow-spacing': 'warn',
      '@typescript-eslint/block-spacing': 'warn',
      '@typescript-eslint/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
      '@typescript-eslint/comma-spacing': 'warn',
      'comma-style': 'warn',
      'computed-property-spacing': 'warn',
      'dot-location': ['warn', 'property'],
      'eol-last': 'warn',
      '@typescript-eslint/func-call-spacing': 'warn',
      'function-call-argument-newline': ['warn', 'consistent'],
      'function-paren-newline': ['warn', 'multiline-arguments'],
      'import/no-duplicates': 'error', // Regola del plugin import
      '@typescript-eslint/indent': ['warn', 2, indentOptions],
      'jsx-quotes': 'warn',
      '@typescript-eslint/key-spacing': [
        'warn',
        { beforeColon: false, afterColon: true, mode: 'minimum' },
      ],
      '@typescript-eslint/keyword-spacing': ['warn', { overrides: { function: { after: false } } }],
      'linebreak-style': ['warn', 'unix'],
      '@typescript-eslint/lines-between-class-members': [
        'warn',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'max-len': ['error', { code: 100, ignoreUrls: true, ignoreRegExpLiterals: true }],
      'new-parens': 'warn',
      'no-multi-spaces': ['warn', { exceptions: { ConditionalExpression: true } }],
      'no-whitespace-before-property': 'warn',
      'nonblock-statement-body-position': 'warn',
      'object-curly-newline': ['warn', { multiline: true, consistent: true }],
      '@typescript-eslint/object-curly-spacing': ['warn', 'always', { objectsInObjects: false }],
      'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
      'operator-linebreak': ['warn', 'after'],
      '@typescript-eslint/quotes': [
        'warn',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'rest-spread-spacing': ['warn', 'never'],
      '@typescript-eslint/semi': ['error', 'always'],
      'semi-spacing': 'warn',
      'semi-style': ['warn', 'last'],
      '@typescript-eslint/space-before-blocks': 'warn',
      '@typescript-eslint/space-before-function-paren': [
        'warn',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': 'warn',
      '@typescript-eslint/space-infix-ops': ['warn', { int32Hint: true }],
      'space-unary-ops': [1, { words: true, nonwords: false }],
      'switch-colon-spacing': 'warn',
      'template-curly-spacing': 'warn',
      'template-tag-spacing': 'warn',
      'wrap-iife': 'warn',

      // * Regole dal plugin:react *
      'react/boolean-prop-naming': [
        'error',
        { rule: '^(is|are|has|does|should|)[A-Z]([A-Za-z0-9]?)+' },
      ],
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
      'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
      'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],
      'react/jsx-equals-spacing': ['warn'],
      'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      'react/jsx-fragments': 'warn',
      'react/jsx-handler-names': 'warn',
      'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
      'react/jsx-indent-props': ['warn', 4],
      'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
      'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-tag-spacing': ['warn', { beforeClosing: 'never' }],
      'react/jsx-wrap-multilines': [
        'warn',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'ignore',
        },
      ],
    },
  },
];
