import { nodeResolve } from '@rollup/plugin-node-resolve';
import { readPackageSync } from 'read-pkg';
import ts from 'rollup-plugin-typescript2';

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
          return pkg?.dependencies?.[module] != null && pkg?.devDependencies?.[module] != null;
        },
      }),
      ts({ tsconfig: 'tsconfig.prod.json' }),
    ],
  },
];
