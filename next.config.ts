import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Mengabaikan modul canvas di sisi klien
      config.resolve.fallback = {
        canvas: false,
      };
    }
    return config;
  },
};

export default nextConfig;
