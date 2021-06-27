const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "main.css",
    }),
    new WebpackPwaManifestPlugin({
      filename: "manifest.webmanifest",
      name: "Pettagram - Tu app social de mascotas",
      short_name: "Pettagram",
      description:
        "Con Petgram puedes encontrar y subir fotos de animales domésticos.",
      background_color: "#121f3d",
      prefer_related_applications: true,
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          size: "1024x1024",
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: "maskable any",
          destination: path.join("Icons"),
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://petgram-server-kevin.vercel.app"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
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
  resolve: {
    // ...
    alias: {
      // ...
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
    // ...
  },
};
