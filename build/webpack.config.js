const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');
const MZQiniuUploadWebpackPlugin = require('mz-qiniu-upload-webpack-plugin');

const QINIU_UPLOAD_CONFIG = require('../qiniu-config/index');

const isProd = process.env.NODE_ENV === 'production';
const isAutoPublish = process.env.AUTO_PUBLISH === 'true';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: path.resolve(__dirname, '../src/app.ts'),
    video: path.resolve(__dirname, '../src/applications/video/video.ts')
  },
  output: {
    filename: isProd ? '[name].[hash:8].js' : '[name].js',
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
  devServer: isProd ? undefined : {host: '0.0.0.0'},
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {url: true}}, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
          {
            loader: 'less-loader',
            options: {lessOptions: {strictMath: true}}
          }
        ]
      },
      {
        test: /\.(svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            preprocess: sveltePreprocess({
              postcss: {
                plugins: [require('autoprefixer')()]
              }
            })
          }
        }
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
      title: '????????????',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      title: '????????????',
      filename: 'video.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['video']
    }),
    isProd && new CleanWebpackPlugin(),
    isProd && isAutoPublish && new MZQiniuUploadWebpackPlugin(QINIU_UPLOAD_CONFIG)
  ].filter(i => !!i)
};
