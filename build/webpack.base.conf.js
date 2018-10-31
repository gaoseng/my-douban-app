const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const utils = require('./utils');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve('app')
        }
    },
    entry: {
        app: path.resolve('app/main.js')
    },
    output: {
        filename: 'bundle.js',
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" ,// translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                    
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css?$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                  ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}