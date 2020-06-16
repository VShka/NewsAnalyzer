const path = require('path');

module.exports = {
  entry: { main: './src/index.js'},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    }
  ]
  }
};