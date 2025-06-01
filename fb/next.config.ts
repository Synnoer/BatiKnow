import type { NextConfig } from "next";
import {
  PHASE_DEVELOPMENT_SERVER
} from "next/constants.js";
import { RuntimeCaching } from 'workbox-build';
import { runtimeCaching } from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  // config lainnya
};

const nextConfigFunction = async (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const customRuntimeCaching: RuntimeCaching[] = [
    ...runtimeCaching,
    {
      urlPattern: /^\/batik\/.*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'batik-detail-pages',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^\/api\/batik\/.*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'batik-api-detail',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ];

  const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
    disable: isDev,
    register: true,
    workboxOptions: {
      skipWaiting: true,
      runtimeCaching: customRuntimeCaching,
    },
  });

  return withPWA(nextConfig);
};

export default nextConfigFunction;
