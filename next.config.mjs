/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icon.icepanel.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
