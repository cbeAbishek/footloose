import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

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
  sw: 'service-worker.js',
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
  fallbacks: {
    document: '/offline',
  },
  // disable PWA in non-production
  disable: !isProd,
})(nextConfig);
