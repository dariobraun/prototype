const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mf2",
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartModule": "./src/app//cart/cart.module.ts",
        "./CartComponent": "./src/app//cart/cart.component.ts",
      },
      shared: {
        "@angular/core": {
          singleton: true,
        },
        "@angular/common": {
          singleton: true,
        },
        "@angular/router": {
          singleton: true,
        },
      },
    }),
  ],
};
