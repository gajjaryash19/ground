import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["gsap"],
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
