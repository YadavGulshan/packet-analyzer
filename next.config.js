/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([
  withSass,
  withCSS,
  withLess,
  withFonts,
  withImages,
]);
module.exports = nextConfig;
