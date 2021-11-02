const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  // Allows to have all CSS/SASS transpiled in main.css instead of multiple files
  plugins: [new MiniCssExtractPlugin()],
  mode: mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additionnal settings this will reference .babelrc
          loader: "babel-loader",
        },
      },
      {
        // The regex for test looks for scss OR css but also sass (which is what is says in the [])
        test: /\.(s[ac]|c)ss/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  // Allow to show what fil the code comes from instead of just showing main.js
  devtool: "source-map",
  // Run little server to track what's going on from terminal without having to reload navigator page
  devServer: {
    static: "./dist",
  },
};
