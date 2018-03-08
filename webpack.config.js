const path = require('path');

module.exports = {
  entry: './frontend/challenge1/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'frontend', 'static'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx$/, 
        use: 'babel-loader', 
        exclude: /node_modules/,
         }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};

