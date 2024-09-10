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
        hostname: 'file-examples.com',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'www.w3.org',
        pathname: '/WAI/ER/tests/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/files/**',
      },
    ],
  },
};

export default nextConfig;
