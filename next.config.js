const withPrefresh = require("@prefresh/next");
const preact = require("preact");
const withPreact = require("next-plugin-preact");
const withVanillaExtract = require("./configs/vanilla-extract/next-plugin");

const nextConfig = {
  basePath: "/next",
};

module.exports = withVanillaExtract()(withPreact(nextConfig));
