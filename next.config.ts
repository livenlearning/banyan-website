import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
