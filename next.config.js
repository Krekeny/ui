/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
};

const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "solito",
  //   "dripsy",
  //   "@dripsy/core",
  //   "moti",
  //   "@motify/core",
  //   "@motify/components",
  //   "app",
]);

module.exports = withPlugins(
  [withTM, withFonts, withImages, [withExpo, { projectRoot: __dirname }]],
  nextConfig
);
