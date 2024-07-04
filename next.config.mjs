/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enjoydev.life",
        port: "",
        pathname: "/posts/**",
      },

      {
        protocol: "https",
        hostname: "www.d5br5.dev",
        port: "",
        pathname: "/posts/**",
      },
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;
