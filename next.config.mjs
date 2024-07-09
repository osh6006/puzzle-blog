/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ko.vitejs.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reactnative.dev",
        port: "",
        pathname: "/**",
      },
    ],

    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
