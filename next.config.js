// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withSass(withCSS(withImages({
  distDir: 'dist/.next',
  /* config options here */
  webpack(config, options) {
    return config
  }
})));
