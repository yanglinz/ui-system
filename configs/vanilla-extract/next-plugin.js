const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const {
  getGlobalCssLoader,
} = require("next/dist/build/webpack/config/blocks/css/loaders");
const {
  default: MiniCssExtractPlugin,
} = require("next/dist/build/webpack/plugins/mini-css-extract-plugin/src");

// Taken from https://github.com/seek-oss/vanilla-extract/issues/4#issuecomment-810842869
function withVanillaExtract(pluginOptions = {}) {
  return (nextConfig = {}) => {
    return {
      ...nextConfig,

      // For Webpack 4, you'll need to install it separately
      future: {
        webpack5: true,
      },
      webpack(config, options) {
        const { dev, isServer } = options;

        config.module.rules.push({
          test: /\.css$/i,
          sideEffects: true,
          use: dev
            ? getGlobalCssLoader(
                {
                  assetPrefix: options.config.assetPrefix,
                  future: {
                    webpack5: true,
                  },
                  isClient: !isServer,
                  isServer,
                  isDevelopment: dev,
                },
                [],
                []
              )
            : [MiniCssExtractPlugin.loader, "css-loader"],
        });

        const plugins = [];

        plugins.push(new VanillaExtractPlugin(pluginOptions));

        if (!dev) {
          plugins.push(
            new MiniCssExtractPlugin({
              filename: "static/css/[contenthash].css",
              chunkFilename: "static/css/[contenthash].css",
              ignoreOrder: true,
            })
          );
        }

        config.plugins.push(...plugins);

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    };
  };
}

module.exports = withVanillaExtract;
