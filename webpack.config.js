// run build with this file by npx webpack --config webpack.config.js
// however, if a config file is present it will run with it by default

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};