const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';


  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    entry: ['./src/index.js', './src/scss/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
                // reloadAll: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  auto: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          loader: 'html-loader',
          options: {
            esModule: true,
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img/',
          },
        },
        {
          test: /\.(mp3|wav)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/audio/',
          },
        },
        {
          test: /\.(ico)$/,
          loader: 'file-loader?name=[name].[ext]',
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts/',
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: './favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    devServer: {
      contentBase: './dist',
      writeToDisk: true,
      clientLogLevel: 'silent',
      hot: false,
      open: 'chrome',
    },
  };

  return config;
};
