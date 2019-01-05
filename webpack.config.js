const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")

module.exports = (env = "development") => {
  const sourcePath = path.join(__dirname, "./src")
  const outPath = path.join(__dirname, "./dist")

  return ({
    mode: "development",
    entry: sourcePath + "/index.js",
    context: sourcePath,
    target: "web",
    optimization: {
      minimizer: [
        new UglifyJsPlugin()
      ],
    },
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: env, // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
    }),
    new HtmlWebpackPlugin({
      template: sourcePath + "/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: sourcePath + "/assets",
        to: outPath + "/assets"
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new WebpackPwaManifest({
      name: "ESynth Mobile",
      short_name: "ESynth",
      filename: "manifest.json",
      description: "ESynth Mobile - Mobile Javascript Web Audio API Synthesizer",
      inject: true,
      background_color: "#000000",
      theme_color: "#000000",
      icons: [
        {
          src: sourcePath + "/assets/img/esynth.png",
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),
  ]
  })
}
