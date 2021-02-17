const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${SRC_DIR}/index.js`],
  mode: 'development',
  output: {
    filname: 'bundle.js',
    path: DIST_DIR
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //avoid expensive transpilation if there are no changes
              cacheDirectory: true
            }
          }
        ]
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extension: ['*', '.js', '.jsx']
  }
};