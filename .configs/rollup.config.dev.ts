import { nodeResolve } from '@rollup/plugin-node-resolve';
import { readPackageSync } from 'read-pkg';
import ts from 'rollup-plugin-ts';

const pkg = readPackageSync();

export default [
  {
    input: 'src/cli.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          const isLocal =
            (pkg?.dependencies?.[module] === undefined || pkg?.dependencies?.[module] === null) &&
            (pkg?.devDependencies?.[module] === undefined ||
              pkg?.devDependencies?.[module] === null);

          return isLocal;
        },
      }),
      ts({ tsconfig: 'tsconfig.json' }),
    ],
  },
  {
    input: 'src/ctix.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/ctix.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/ctix.js',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          const isLocal =
            (pkg?.dependencies?.[module] === undefined || pkg?.dependencies?.[module] === null) &&
            (pkg?.devDependencies?.[module] === undefined ||
              pkg?.devDependencies?.[module] === null);

          return isLocal;
        },
      }),
      ts({ tsconfig: 'tsconfig.json' }),
    ],
  },
];
