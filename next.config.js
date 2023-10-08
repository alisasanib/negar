/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  styledComponents: true,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "images.unsplash.com",
        port: "",
        // pathname:
        //   "/account123/**",
      },
    ],
  },
  // Can be safely removed in newer versions of Next.js
  future: {
    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,
  },

  webpack: (
    config,
    {
      buildId,
      dev,
      isServer,
      defaultLoaders,
      webpack,
    }
  ) => {
    config.resolve.fallback =
      {
        // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped.
        ...config.resolve
          .fallback,

        fs: false, // the solution
      };
    if (dev) {
      config.devtool = "eval";
    }

    return config;
  },
};

module.exports = nextConfig;
