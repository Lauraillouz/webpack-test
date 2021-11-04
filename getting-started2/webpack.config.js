const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Caching"
        })
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single", 
        // Extract third-party libraries to a separate vendor cunck, as they are less likely to change tan the local source code. It allows clients to request even less from the server to stay up to date.
        
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                }
            }   
    
        }

    }
}