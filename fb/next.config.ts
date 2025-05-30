import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Only add these rules on the server-side
    if (isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: 'node-loader',
      });
    }

    // Exclude tfjs-node from client-side bundles
    if (!isServer) {
      config.resolve.alias['@tensorflow/tfjs-node'] = false;
    }

    return config;
  },
  // Optional: Add experimental flags if needed
  serverExternalPackages: ['@tensorflow/tfjs-node']
};

export default nextConfig;
