// next.config.ts
import { wpRedirects } from './src/lib/redirects'

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ protocol: 'https' as const, hostname: 'picsum.photos' }],
  },
  async redirects() {
    return wpRedirects
  },
}

export default nextConfig
