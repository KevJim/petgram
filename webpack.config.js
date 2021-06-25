const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
