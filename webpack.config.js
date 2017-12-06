const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './'),
        ],
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
