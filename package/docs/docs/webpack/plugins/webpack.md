使用 expose-loader 暴露全局的 loader 内联的 loader
pre 上一个 loader
normal 普通的 loader
post 下一个 loader

将 jquery 暴露给全局

```js
import $ from 'expose-loader?$!jquery'
```

或者使用

```js
module.exports = {
	module: {
		rules: [{
			test: require.resolve('jquery')
			use: 'expose-loader?$'
		}]
	}
}
```

## 使用 webpack 插件

```js
let webpack = require('webpack')

module.exports = {
	plugins: [
		//在每个模块中都注入jquery
		new webpack.ProvidePlugin({
			$: 'jquery '
		})
	]
}
```

如果使用了 script 这种方式将 jquery 引入，在使用上面的方式，会是 webpack 继续将 jqeury 打包进来，但是这是多余的，所以应该忽略

```js
module.export = {
	//这样当使用import导入jquery时会被忽略
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery'
		})
	]
}
```

:::warning 注意
如果配置了 externals，里面字段的 value 必须在 webpack 加载的时候可以访问的到

比如配置了 jquery 字段，必须在 html 中通过 script 引入 jquery，而且必须加载 body 结束标签之前
:::
