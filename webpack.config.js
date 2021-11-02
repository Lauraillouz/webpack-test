const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
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
    ],
  },
  // Allow to show what fil the code comes from instead of just showing main.js
  devtool: "source-map",
  // Run little server to track what's going on from terminal without having to reload navigator page
  devServer: {
    static: "./dist",
  },
};
