const path = require('path')
const webpack = require('webpack')
const { resolve } = require('./build/utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve('src/js/main.js'),
    output: {
        path: resolve('dist'),
        filename: './js/[name][hash:8].js'
    },
    mode: 'development',
    devtool: "source-map",
    devServer: {
        host: 'localhost',
        port: 2,
        overlay: true,
        open: true,
        hot: true,
        inline: true,
        stats: 'errors-only'
    },
    resolve: {
        extensions: ['scss', 'css', 'vue', 'js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
            include: resolve('src'),
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.vue$/,
            use: 'vue-loader',
            include: resolve('src'),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: "body",
            filename: 'index.html',
            template: resolve('src/index.html'),
            title: '测试用例',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}