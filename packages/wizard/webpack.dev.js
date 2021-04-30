const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3030,
    host: "0.0.0.0",
    contentBase: ["../common/public", "./public"],
    historyApiFallback: true,
    watchContentBase: true,
  },
  devtool: "inline-source-map",
});
