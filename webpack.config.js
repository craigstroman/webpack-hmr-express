const path = require('path');
const webpack = require('webpack');

const PORT = 3000;
const filePath = path.join(__dirname, './public/js/');
const fileName = 'bundle.js';

module.exports = {
  mode: 'development',

  entry: {
    app: [
      path.join(__dirname, 'client/index.jsx'),
      `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`,
    ],
  },

  output: {
    publicPath: '/static/js/',
    path: filePath,
    filename: fileName,
    hotUpdateChunkFilename: '.hot/hot-update.js',
    hotUpdateMainFilename: '.hot/hot-update.json',
  },

  watchOptions: {
    ignored: '/node_modules/',
  },

  resolve: {
    extensions: [
      '.js','.jsx'
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { "legacy": true }],
            ]
          },
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
