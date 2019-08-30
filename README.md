# Webpack Init and Examples

This repo has some examples on webpack configurations, distributed on the following branches:
* assetmanagement - currently merged with master
* outputmanagement - not merged
* development-mode - not merged

To be able to view configurations with useful comments for output management and development-mode, view that branch independently. 

Output Management branch includes: 
* `clean-webpack-plugin` - manages removal of files not used by your project.
* `html-webpack-plugin` - makes sure that `index.html` in `dist` references new generated files on build instead of the old files

Development Mode branch includes:
* `inline-source-map` devtool for useful debugging of bundled code
* `devServer`'s `contentBase` declaration for `webpack-dev-server` to serve files in directory and autoreload
* `watch` and `start` script commands for npm 

## Getting started with Webpack

1. Run `npm install webpack --save-dev` to add it as a development dependency
2. Run `npm install webpack-cli --save-dev`  to install CLI in dev dependency as well
3. Add `"build": "webpack"` in `"scripts"` key inside `package.json`
4. Create `webpack.config.js` and populate the `entry` and `output` keys with the files used for entry (`index.js`) and output (`bundle.js`) specifying the absolute path wherein to create the build folder (`/dist`)
5. Include the rest of the the tools in asset management, output management and development mode according to needs.
