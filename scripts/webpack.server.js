const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports =merge(base,{
  target: 'node', // 打包后的代码是给 node 环境用的
  entry: {
    server: path.resolve(__dirname, '../src/server-entry.js'),
  },
  output: {
    libraryTarget: "commonjs2", // 以库的形式打包 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      filename: 'server.html',
      excludeChunks: ['server'], // 不引入
      minify: false, // 不压缩 
    }),
  ],
})