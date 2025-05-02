import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
    remotePatterns: [
      { hostname: "images-assets.nasa.gov" },
      { hostname: "pt.wikipedia.org/" },
    ]
  },
};

export default nextConfig;
