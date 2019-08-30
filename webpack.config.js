// run build with this file by npx webpack --config webpack.config.js
// however, if a config file is present it will run with it by default

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // in order to import a CSS file from within a JS module, we need to install and add style-loader and css-loader to module configuration. So, after running `npm install --save-dev style-loader css-loader` in terminal, add the following:
  module: {
    rules: [
      {
        test: /\.css/, // webpack uses regex to determine which files it should look for and save to a specific loader. In this case, any file ending in .css will eb server to style-loader and css-loader.
        use: [ // when the modules is run, a <style> tag with stringified css will be inserted into the <head> of the html file.
          'style-loader', // npm install --save-dev style-loader css-loader
          'css-loader'
        ]
      },
      { // Using the file-loader we can easily incorporate images and icons
        test: /\.(png|svg|jpg|gif)$/,
        use: [ // The html-loader handles <img src="./my-image.png" />
          'file-loader' // npm install --save-dev file-loader
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // fonts use file-loader too
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};