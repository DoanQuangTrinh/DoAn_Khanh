import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    // ESLint warning/error sẽ không block build
    ignoreDuringBuilds: true,
  },

  // Các cấu hình khác nếu cần
  images: {
    // Ví dụ: domains cho next/image
    domains: ["example.com"],
  },
};

export default nextConfig;
