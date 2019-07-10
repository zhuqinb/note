```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css' //单独抽出来作为一个文件的名称
		})
	]
}
```

如果只配置上面这个，会报错误，`找不到配置postcss.config.js`文件

在根目录下新建一个文件

file: postcss.config.js

```js
module.exports = {
	plugins: [require('autoprefixer')]
}
```
