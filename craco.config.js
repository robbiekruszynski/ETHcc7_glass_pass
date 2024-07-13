const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  webpack: {
    plugins: [
      new NodePolyfillPlugin()
    ],
    configure: {
      resolve: {
        fallback: {
          "stream": require.resolve("stream-browserify"),
          "assert": require.resolve("assert"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "url": require.resolve("url")
        }
      }
    }
  }
};
