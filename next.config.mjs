import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';
const appEnv = process.env.APP_ENV || (isProd ? 'prod' : 'dev');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Expose APP_ENV (and any other build-time env) to the client
  env: {
    APP_ENV: appEnv,
  },
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable PWA in non-production
  disable: !isProd,
})(nextConfig);
