import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['api.fulfillbiz.com'],
  },
  devIndicators: false,
};

export default nextConfig;