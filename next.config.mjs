/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co', // Allow ibb.co images
          },
        ],
      },
};

export default nextConfig;
