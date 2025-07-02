import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "https://cnjh4294-3000.asse.devtunnels.ms"],
    },
  },
};

export default nextConfig;
