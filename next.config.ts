// next.config.ts
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ protocol: "https" as const, hostname: "picsum.photos" }],
  },
};

export default nextConfig;
