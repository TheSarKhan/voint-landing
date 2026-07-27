import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serverdə Docker içində işlədiyi üçün standalone: node_modules-un yalnız
  // lazımi hissəsi image-ə düşür, image ~10x kiçilir.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
