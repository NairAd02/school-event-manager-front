import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "http", 
      hostname: "45.61.55.120",
      port: "8001"
    }]
  }
};

export default nextConfig;
