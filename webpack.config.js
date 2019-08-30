// run build with this file by npx webpack --config webpack.config.js
// however, if a config file is present it will run with it by default

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // avoid in production
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from. In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.
  devServer: {
    contentBase: './dist' // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
  }, // webpack-dev-server doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path. If your page expects to find the bundle files on a different path, you can change this with the publicPath option in the dev server's configuration.
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