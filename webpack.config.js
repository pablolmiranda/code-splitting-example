const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/js/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
        minChunks: 2
    }),
  ]
};
