import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to `out/` for plain hosting (cPanel / Apache).
  output: "export",
  // Emit `about/index.html` etc. so Apache serves `/about/` without rewrites.
  trailingSlash: true,
  images: {
    // No Node server on static hosting, so images are served as-is (already optimized WebP).
    unoptimized: true,
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
