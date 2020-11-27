const path = require("path");

module.exports = {
  entry: "./index.js",
  resolve: {
    alias: {
      // Throws error
      "@wordpress/data": path.join(
        __dirname,
        "node_modules/@wordpress/data/build"
      ),

      // Works
      // "@wordpress/data": path.join(
      //   __dirname,
      //   "node_modules/@wordpress/data/build-module"
      // ),
    },
  },
  optimization: {
    minimize: false,
  },
};
