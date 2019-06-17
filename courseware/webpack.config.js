const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
		hotOnly: true,
		inline: true,
		stats: 'errors-only'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: '/.js$/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: '[@babel/preset-ent]'
					}
				},
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/
			},
			{
				test: '/.css$/',
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: '/.styl$/',
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'stylus-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: 'body',
			filename: 'index.html',
			template: './src/index.html',
			hash: true,
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true
			}
		}),
		new webpack.DefinePlugin({})
	]
}
