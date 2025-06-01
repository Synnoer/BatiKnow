import type { NextConfig } from "next";
import {
  PHASE_DEVELOPMENT_SERVER
} from "next/constants.js";

const nextConfig: NextConfig = {
  // config lainnya
};

const nextConfigFunction = async (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const withPWA = (await import("@ducanh2912/next-pwa")).default({
    dest: "public",
    disable: isDev,
    register: true,
    workboxOptions: {
      skipWaiting: true,
    },
  });

  return withPWA(nextConfig);
};

export default nextConfigFunction;
