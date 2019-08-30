// run build with this file by npx webpack --config webpack.config.js
// however, if a config file is present it will run with it by default

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(), // Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project. This is a popular plugin to manage this is the clean-webpack-plugin.
    new HtmlWebpackPlugin({ // makes sure that index.html references the new generated files on build, instead of the old files
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};