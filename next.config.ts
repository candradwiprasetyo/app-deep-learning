import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        canvas: false,
      };
    }
    return config;
  },
};

export default nextConfig;
