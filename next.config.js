/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
};

module.exports = nextConfig;
