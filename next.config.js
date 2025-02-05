/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  distDir: "build",
  output: "export",
};
