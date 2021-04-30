const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../common/public/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
  ],
});
