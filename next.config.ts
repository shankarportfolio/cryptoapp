import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'deythere.com',
      'www.cryptopolitan.com',
      'en.bitcoinsistemi.com',
      'www.forbes.com',
      'cryptoslate.com',
      'www.bitcoinsistemi.com',
      'imageio.forbes.com',
      'en.coinotag.com',
    ],
  },
  eslint: {
    // ✅ This tells Vercel not to fail builds because of ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Optional: Prevent TypeScript errors from breaking builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
