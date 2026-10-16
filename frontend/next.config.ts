import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Isolate from monorepo root lockfile
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
