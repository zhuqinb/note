const path = require('path')
const webpack = require('webpack')
const { smart } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[hash:8].js'
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 2,
        overlay: true,
        open: true,
        hot: true,
        inline: true,
        stats: 'errors-only'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    'postcss-loader',
                    "sass-loader"
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        extensions: ['.scss', '.css', '.vue', '.js', '.png'],
        alias: {
            'root': path.resolve('./src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            title: "测试用例",
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: 'src/css/style.css',
            chunkFilename: "[hash:8].css"
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({}),
        new webpack.NamedModulesPlugin(), // 打印更新的模块
        new webpack.HotModuleReplacementPlugin()
    ]
}