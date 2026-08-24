import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/mount.tsx'],
  bundle: true,
  outfile: 'react-bundle.js',
  format: 'iife',
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts'
  }
}).then(() => console.log('Build successful'))
  .catch(() => process.exit(1));
