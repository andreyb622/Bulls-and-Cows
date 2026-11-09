import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['dist', 'node_modules', 'coverage'] },

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    files: ['src/core/**/*.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ClassDeclaration',
          message: 'В игровой логике классы запрещены.',
        },
      ],
    },
  },

  prettier,
]);
