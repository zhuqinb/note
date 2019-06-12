let MiniCssExtractPlugin = require('mini-css-extract-plugin')

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
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

1. 把之前的 style-loader 改成 MiniCssExtractPlugin.loader 之前是直接创建`style` 然后插入样式，换成这个后改成`link`标签引入
