const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    console.log(env.NODE_ENV)
    return {
        entry: './src/js/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './js/[name].[hash:8].js'
        },
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
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
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
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: 'body',
                filename: 'index.html',
                template: './src/index.html',
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
            new webpack.DefinePlugin({}),
            new webpack.NamedModulesPlugin(), // 打印更新的模块
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}