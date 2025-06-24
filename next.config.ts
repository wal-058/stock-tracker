import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PLATFORM_KEY: process.env.PLATFORM_KEY,
  }
};

export default nextConfig;
