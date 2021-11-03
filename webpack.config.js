const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Récupérer directement auprès de l'environnement env le mode
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  // Allows to have all CSS/SASS transpiled in main.css instead of multiple files
  plugins: [
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      // relates to the STATS option set up in the package.json. Allows to run the bundle analyzer server only in development mode and not when we run build in production (which would be useless)
      analyzerMode: process.env.STATS || "disabled",
    }),
  ],
  // entry and output not required if using "src/index.js" default
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additionnal settings this will reference .babelrc
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // The regex for test looks for scss OR css but also sass (which is what is says in the [])
        test: /\.(s[ac]|c)ss/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  // Allow to show what fil the code comes from instead of just showing main.js
  devtool: "source-map",
  // Run little server to track what's going on from terminal without having to reload navigator page
  devServer: {
    static: __dirname + "./dist",
  },
};
