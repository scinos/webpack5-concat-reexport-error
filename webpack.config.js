const path = require("path");

module.exports = {
  entry: "./index.js",
  resolve: {
    alias: {
      "@wordpress/data": path.join(
        __dirname,
        "node_modules/@wordpress/data/build"
      ),
    },
  },
  optimization: {
    minimize: false,
  },
};
