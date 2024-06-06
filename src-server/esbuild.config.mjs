/** @type{import("esbuild").BuildOptions} */

import esbuild from 'esbuild'
import 'dotenv/config'

const define = {}

Object.keys(process.env).forEach((key) => {
  define[`process.env.${key}`] = JSON.stringify(process.env[key])
})

esbuild
  .build({
    entryPoints: ['./src/server/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: './bundle/server.bundle.js',
    platform: 'node',
    target: ['node20.0'],
    logLevel: 'info',
    define,
    external: ['better-sqlite3'],
  })
  .catch(() => process.exit(1))
