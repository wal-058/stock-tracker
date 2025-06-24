import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'standalone',
  env: {
    PLATFORM_KEY: process.env.PLATFORM_KEY,
  }
};

export default nextConfig;
