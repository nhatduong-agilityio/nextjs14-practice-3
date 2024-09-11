/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.w3.org',
        pathname: '/WAI/ER/tests/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [480, 600, 768, 1024, 1280, 1400, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
