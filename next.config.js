/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  exportTrailingSlash: true,
  reactStrictMode: true,
  distDir: "build",
};
