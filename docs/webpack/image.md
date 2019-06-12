## 在 js 中创建图片来引入

直接写 './logo.png' webpack 会当成字符串使用

```js
let img = new Image()
img.src = './logo.png'
document.appendChild(img) // 会找不到图片
```

```js
import logo from './logo.png' // 把图片引入，返回的结果时一个新的图片地址
```

安装模块

> npm i file-loader

默认会在内部生成一张图片 到 build 目录下， 把生成的图片的名字返回回来

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: 'file-loader'
			}
		]
	}
}
```

在 css 中使用图片

```css
bady {
	background: url('./logo.png');
}
```

上面这种写法，不需要装 file-loader 因为 css 用 css-loader 解析，解析时会自动将'./logo.png' 转换成 require('./logo.png');
相当于

```css
bady {
	background: url(require('./logo.png'));
}
```

## 在 html 使用图片

```html
<body>
	<img src="./logo.png" />
</body>
```

因为打包后的目录下没有 logo.png 这个文件夹，所以会找不到
需要安装插件(中国人写的)
会解析 html 文件

> npm i --save-dev html-withimg-loader

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'html-withimg-loader'
			}
		]
	}
}
```

## 一般小的图片转 base64 会减少 http 请求

> npm i --save-dev url-loader

```js
module.exports = {
	module: {
		rules: [
			{
				test: /.(png|jpg|gif)$/,
				// 做一个限制， 当我们的图片 小于多少k的时候 使用base64优化
				// 否则使用file-loader产生真实的图片
				use: {
					loader: 'url-loader',
					options: {
						limit: 200 * 1024,
						outputPath: '/img/'
					}
				}
			}
		]
	}
}
```

`outputPath`单独放到某个文件夹

如果将静态资源放到 cdn 服务器上，就需要给每个资源的引入加上一个域名

```js
module.exports = {
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
        publicPath: 'http://www.zhufengpeixun.cn'
    }
}
```

如果只是想将某类资源加到 cdn 上

```js
module.exports = {
	use: {
		loader: 'url-loader',
		options: {
			limit: 1,
			outputPath: '/img/',
			publicPath: 'http://...'
		}
	}
}
```
