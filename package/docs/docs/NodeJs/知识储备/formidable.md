# formidable 处理表单数据

## 说明

一般来说，客户端向服务端提交数据有 GET 和 POST 这两种方式，在之前的文章 node.js 当中的 http 模块与 url 模块的简单介绍 当中我们可以知道通过 req.url 与 url 模块的配合处理可以快速得到客户端通过 GET 方式向服务端提交的数据。而原生的 node.js 在处理客户端以 POST 方式提交的数据时，比较复杂，要写两个监听，并且要处理上传的图片、文件也比较艰难。故我们常用第三方模块包 formidable 来处理客户端以 POST 方式提交的表单、文件、图片等。

## 安装

```js
npm i formidable
```

## 使用

其中当服务端全部接收完客户端用 post 方式提交的表单数据之后，触发执行该回调函数。以 post 方式提交的表单域数据都放在 fields 这个对象当中，以 post 方式上传的文件、图片等文件域数据都放在 files 这个对象当中。
则我们在第二条路由选择的分支当中的代码示例为：

```js
const http = require('http')
const formidable = require('formidable')

http.createServer((req, res) => {
	if (req.url == '/') {
		const form = new formidable.IncomingForm()
		form.parse(req, function(err, fields, files) {
			// 文本数据保存在 fields 中
			// 文件、图片保存在 files 中
		})
	}
}).listen('3000', function() {
	console.log('监听的端口号为3000')
})
```

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月11日 15:18 今天24岁生日</article-info>
</ClientOnly>
