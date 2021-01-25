
// webpack webpack-cli
// @babel/core
// babel-loader 
// @babel/preset-env 
// vue-loader vue-template-compiler
// css-loader
// vue-style-loader css-loader
// html-webpack-plugin 
// npm install -D webpack webpack-cli @babel-core babel babel-loader @babel-preset-env vue-loader vue-template-compiler vue-style-loader css-loader


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        // test: '/.css$/',
        // use: [
        //   'vue-styles-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       esModule: false,
        //     },
        //   },
        // ],

        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false, // 注意为了配套使用vue-style-loader
            },
          },
        ], // 从右向左执行
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};



