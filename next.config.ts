import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
