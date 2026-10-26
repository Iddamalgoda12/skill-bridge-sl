import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "X-Frame-Options", value: "DENY" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]
    : []),
];

const nextConfig: NextConfig = {
  // Lets CI / e2e builds use their own output folder without touching a running `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactCompiler: true,
  // Keep Turbopack's file watcher inside the frontend app after the package
  // was moved out of the repository root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    // Avoid restoring an oversized persistent cache on machines with limited RAM.
    turbopackFileSystemCacheForDev: false,
  },
  async headers() {
    // The Content-Security-Policy (per-request nonce) is set in src/proxy.ts.
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default withNextIntl(nextConfig);
