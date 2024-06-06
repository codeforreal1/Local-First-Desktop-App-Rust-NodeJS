/** @type {import('next').NextConfig} */

import analyzeBundle from '@next/bundle-analyzer'

const packageJSON = await import('./package.json', {
  assert: { type: 'json' },
})

const withBundleAnalyzer = analyzeBundle({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  output: 'export',
  distDir: './dist',
  cleanDistDir: true,
  reactStrictMode: false,
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new webpack.DefinePlugin({
          'globalThis.__DEV__': false,
        }),
      )
    }

    return config
  },
  env: {
    version: packageJSON?.default?.version,
  },
})

export default nextConfig
