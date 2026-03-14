import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginZod from 'eslint-plugin-zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    '.source/**',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'sort-imports': [
        'error',
        { ignoreDeclarationSort: true, allowSeparatedGroups: true },
      ],
      'max-depth': ['error', 3],
      eqeqeq: ['error', 'always'],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowAny: true,
          allowNullableBoolean: true,
          allowNullableEnum: true,
          allowNullableNumber: false,
          allowNullableObject: true,
          allowNullableString: true,
          allowNumber: true,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
          allowString: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  eslintPluginZod.configs.recommended,
  {
    rules: {
      'zod/prefer-string-schema-with-trim': 'off',
      'zod/consistent-import': ['error', { syntax: 'named' }],
    },
  },
]);
