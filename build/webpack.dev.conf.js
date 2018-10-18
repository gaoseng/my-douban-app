const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const config = require('../config');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');


const HSOT  = process.env.HSOT;
const PORT = process.env.PORT && Number(process.env.PORT);


const devWebpackConfig = webpackMerge(webpackBaseConfig,{
    mode: 'development',
    devtool: config.dev.devtool,
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ]
        },
        hot: true,
        contentBase: false,
        compress: true, //一切服务都启用gzip
        host: HSOT || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser, //自动打开浏览器
        overlay: config.dev.errorOverlay   //当编译器出现错误时是否全屏覆盖
            ? {warnings: false, errors: true}
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, //除了初始启动信息之外的任何信息不会被打印到控制台
        watchOptions: {
            poll: config.dev.poll
        }

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        
    ]
    
});
module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        console.log(port);
      if (err) {
        reject(err)
      } else {
        // publish the new Port, necessary for e2e tests
        process.env.PORT = port
        // add port to devServer config
        devWebpackConfig.devServer.port = port
  
        // Add FriendlyErrorsPlugin
        devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
          },
          onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
        }))
  
        resolve(devWebpackConfig)
      }
    })
  })