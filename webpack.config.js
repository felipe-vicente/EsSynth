const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
      ]
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: sourcePath + "/index.html"
    })
  ]
  })
}
