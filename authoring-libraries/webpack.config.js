const path = require("path");

module.exports = (env) => {
    // Use env.<VARIABLE>. Here is an example if variables in terminal are: npx webpack --env goal=local --env production --progress
    console.log("Goal: ", env.goal) // local
    console.log("Production: ", env.production) // true

    return {
        mode: "development",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "webpack-numbers.js", // We're telling webpack to bundle src/index.js into dist/webpack-numbers.js
            library: {
                name: "webpackNumbers",
                type: "umd" // Making it work through script tag, but also CommonJS, AMD, Node.js, etc
            }
        },
        externals: {
            lodash: { // The library expects a dependency named lodash to be available in the consumer's environment
                commonjs: "lodash",
                commonjs2: "lodash",
                amd: "lodash",
                root: "_"
            }
        }
    }
}
