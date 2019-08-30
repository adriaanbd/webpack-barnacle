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


## Loaders and Plugins

Loaders perform transformation to a single file before being added to a dependency graph. In order to apply changes to multiple files or create bundles of css or minimify code, we need to rely on plugins. 

Note: to use a loader or a plugin, they need to be installed via npm or yarn.

## Loaders

A loader is added inside a `module` and `rules` key within `webpack.config.js`. This allows any type of asset to be treated as a module but converted back to JavaScript so it can be added to the dependency graph. 

Each rule set is going to be an object and take two important properties required: 

* `test` - tells webpack that before being added to dependency graph, match against this regex and perform a certain transform on it; this is how loaders come into play. 

A common example is the `babel-loader`, which triggers on any `/\.js$/` file:

```
test: `/\.js$/`,
use: "babel-loader"
```

Note: loaders functionally transform themselves right to left, inside to out or bottom to top. This allows to use an array of loaders that'd get execute from last to first.

A common example of this would be transforming a `scss` file:

```
test: `/\.scss$/`,
use: [
  "style-loader",
  "css-loader",
  "sass-loader"
]
```

### Plugin 

There are many custom plugins provided by webpack, as well as an ecosystem of plugins. The idea to use a plugin is to add it to your `webpack.config.js` file by `require` and then add a reference to it in a `plugins` key as:

```
plugins: [
  new ExamplePlugin()
]
```

```
// ExamplePlugin.js

class ExamplePlugin {
  // allows plugin author to hook in to different lifecycle events of webpack to perform functionality
  apply(compiler) { 
    compiler.plugin('run', (compiler, callback) => {
      console.log('Hello Plugin');
      callback();
    });
  }
}
```