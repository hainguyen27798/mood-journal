/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '/mock': ['./mock/**/*'],
    },
  },
};

export default nextConfig;
