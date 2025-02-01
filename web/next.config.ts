import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
