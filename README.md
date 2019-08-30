# Webpack Examples

This repo has some examples on webpack configurations, distributed on the following branches:
* assetmanagement - currently merged with master
* outputmanagement - not merged
* development-mode - not merged

To be able to view configurations with useful comments for output management and development-mode, view that branch independently. 

Output Management branch inclues: 
* `clean-webpack-plugin` - manages removal of files not used by your project.
* `html-webpack-plugin` - makes sure that `index.html` in `dist` references new generated files on build instead of the old files

Development Mode branch includes:
* `inline-source-map` devtool dor useful debugging of bundled code
* `devServer`'s `contentBase` declaration for `webpack-dev-server` to serve files in directory and autoreload
* `watch` and `start` script commands for npm 