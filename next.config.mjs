/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: "itsmesajan.github.io", // if deploying to user.github.io/REPO_NAME
};

export default nextConfig;
