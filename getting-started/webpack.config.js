/* const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); */
const path = require("path");
/* const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5"); */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  /* entry: "./src/index.js", */
  entry: {
    index: "./src/index.js",
    /* print: "./src/print.js", */ // useless if we use Hot Module Replacement
  },
  devtool: "inline-source-map", // makes it easier to track down errors and warnings: it maps the compiled code back to the original source code
  devServer: {
    static: "./dist",
    hot: true, // usefull to use Hot Module Replacement
  }, // this tells webpack-dev-server to serve the files from the dist directory on localhost:8080
  module: {
    rules: [
      {
        test: /\.css$/i, // regex to determine which files webpack should look for and serve to a specific loader. Here, .css will be served to style-loader and css-loader
        // Module loaders can be chained: each loader in the chain applies transformations to the processed resource. It is executed in reverse order: the first loader passes its result to the next one. Webpack expects JS to be returned by the last loader in the chain
        use: ["style-loader", "css-loader"], // This order must be respected, if not webpack is likely to throw errors.
      },
    ],
  },
  plugins: [
    // Note that the HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in the dist/ folder. So it'll replace ours
    new HtmlWebpackPlugin({
      title: "Developmment",
    }),
  ],
  output: {
    /* filename: "bundle.js", */
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    //Webpack doesn't keep track of unused files. So it's good practice to clean the /dist folder before each build, so that only used files will be generated
    clean: true,
  },

  /* plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // regex to determine which files webpack should look for and serve to a specific loader. Here, .css will be served to style-loader and css-loader
        // Module loaders can be chained: each loader in the chain applies transformations to the processed resource. It is executed in reverse order: the first loader passes its result to the next one. Webpack expects JS to be returned by the last loader in the chain
        use: ["style-loader", "css-loader"], // This order must be respected, if not webpack is likely to throw errors.
      },
      {
        test: /\.(png|svg\jpg\jpeg|gif)$/i, // format images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // for fonts
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  optimization: {
    // Minify the output ony in production mode
    minimizer: [new CssMinimizerPlugin()],
  }, */
};
