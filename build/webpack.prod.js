const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/app.ts')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.ts', '.js', '.svelte'],
    // Webpack's resolve.mainFields option determines which fields in package.json are used to resolve identifiers. If you're using Svelte components installed from npm, you should specify this option so that your app can use the original component source code, rather than consuming the already-compiled version (which is less efficient).
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {lessOptions: {strictMath: true}}
          }
        ]
      },
      {
        test: /\.(svelte)$/,
        loader: 'svelte-loader'
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '猪猪导航',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin()
  ]
};
