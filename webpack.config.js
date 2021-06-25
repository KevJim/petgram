const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "assests/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
};
