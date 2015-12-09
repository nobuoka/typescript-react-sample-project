var path = require("path");

module.exports = {
    entry: "./built/typescript/default.js",
    output: {
        path: path.resolve("built/webpack/"),
        filename: "bundle.js"
    },
};
