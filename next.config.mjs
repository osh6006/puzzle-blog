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
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;
