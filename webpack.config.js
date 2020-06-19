const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: "./pages/main/main.js",
    analytics: "./pages/analytics/analytics.js",
    about: "./pages/about/about.js"
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
            publicPath: "img",
            outputPath: "img",
            useRelativePath: true,
            esModule: false,
          }
        },
        {
          loader: "image-webpack-loader",
          options: {}
        },
      ]
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "vendor/fonts/[name].[ext]"
          }
        }
      ]
    }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./pages/main/index.html",
      filename: "index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./pages/about/index.html",
      filename: "about/index.html",
      chunks: ["about"]
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./pages/analytics/index.html",
      filename: "analytics/index.html",
      chunks: ["analytics"]
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};