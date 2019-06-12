```js
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

modules.exports = {
	optimization: [new OptimizeCss()]
}
```

如果只是上面这个配置， 会压缩 css,但是之前能压缩的 js 的现在不能压缩了

需要使用 `uglifyjs-webpack-plugin`

```js
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
modules.exports = {
	optimization: [
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			sourceMap: true
		}),
		new OptimizeCss()
	]
}
```
