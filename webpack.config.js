const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const webpack = require("webpack")

module.exports = (env = "production") => {
  const sourcePath = path.join(__dirname, "./src")
  const outPath = path.join(__dirname, "./dist")

  return ({
    mode: "development",
    entry: sourcePath + "/index.js",
    context: sourcePath,
    target: "web",
    output: {
      path: outPath,
      filename: "bundle_[hash].js",
      publicPath: "/"
    },
    devServer: {
      progress: true,
      contentBase: sourcePath,
      inline: true,
      compress: true,
      historyApiFallback: true,
      stats: "minimal",
      // hot: true,
      host: "0.0.0.0",
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          use: {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                "@babel/preset-react"
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".js"],
      modules: [
        "node_modules"
      ],
      alias: {
        // "jquery-ui": "jquery-ui/jquery-ui.js",
        "jquery": "jquery",
        modules: path.join(__dirname, "node_modules"),
      }
    },
    plugins: [
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
    }),
    new HtmlWebpackPlugin({
      template: sourcePath + "/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: sourcePath + "/assets",
        to: "/assets"
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
  ]
  })
}
