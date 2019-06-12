> npm install --save-dev http-proxy-middleware

## 简介

用于把请求代理转发到其他服务器的中间件

## 基本用法

例如：我们当前主机为http://localhost:3000/，现在我们有一个需求，
如果我们请求/api，我们不希望由 3000 来处理这个请求，而希望由另一台
服务器来处理这个请求怎么办？

```js
var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use('/api', proxy({ target: 'http://localhost:3001/', changeOrigin: true }))
app.listen(3000)
```

现在，我们利用 express 在 3000 端口启动了一个小型的服务器，利用了
app.use('/api', proxy({target: 'http://localhost:3001/', changeOrigin: true}));
这句话，使发到 3000 端口的/api 请求转发到了 3001 端口。即请求http://localhost:3000/api
相当于请求http://localhost:3001/api。

## 核心概念

```js
proxy //中间件配置
proxy([context,] config)
var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api', {target: 'http://www.example.org'});
//                   \____/   \_____________________________/
//                     |                    |
//                需要转发的请求           目标服务器

```

'apiProxy' 现在已经准备作为一个中间件了。
options.target: target 由协议和主机组成

上例的简洁写法

```js
//proxy(uri [, config])
var apiProxy = proxy('http://www.example.org/api')
```

## 举例

```js
// 引用依赖
var express = require('express')
var proxy = require('http-proxy-middleware')

// proxy 中间件的选择项
var options = {
	target: 'http://www.example.org', // 目标服务器 host
	changeOrigin: true, // 默认 false，是否需要改变原始主机头为目标 URL
	ws: true, // 是否代理 websockets
	pathRewrite: {
		'^/api/old-path': '/api/new-path', // 重写请求，比如我们源访问的是 api/old-path，那么请求会被解析为/api/new-path
		'^/api/remove/path': '/path' // 同上
	},
	router: {
		// 如果请求主机 == 'dev.localhost:3000',
		// 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
		'dev.localhost:3000': 'http://localhost:8000'
	}
}

// 创建代理
var exampleProxy = proxy(options)

// 使用代理
var app = express()
app.use('/api', exampleProxy)
app.listen(3000)
```

上下文匹配
假如你不能使用主机的路径参数来创建代理，或者你需要更灵活的方式来创建代理的话，
这里提供了选择性的方式来决定哪些请求会被转发；

```js
foo://example.com:8042/over/there?name=ferret#nose
\_/  \______________/\_________/ \_________/ \__/
 |           |            |            |       |
协议        主机         路径          查询     碎片
```

路径匹配
`proxy({...})`：匹配任何路径，所有请求将被转发；
`proxy('/', {...})` ：匹配任何路径，所有请求将被转发；
`proxy('/api', {...})`：匹配/api 开头的请求
多重匹配
`proxy(['/api', '/ajax', '/someotherpath'], {...})`

通配符路径匹配
细粒度的匹配可以使用通配符匹配，Glob 匹配模式由 micromatch 创造，访问 micromatch or glob 查找更多用例。

-   proxy('\*\*', {...}) 匹配任何路径，所有请求将被转发；
-   proxy('\*_/_.html', {...}) 匹配任何以.html 结尾的请求；
-   proxy('/\*.html', {...}) 匹配当前路径下以 html 结尾的请求；
-   proxy('/api/\*_/_.html', {...}) 匹配/api 下以 html 为结尾的请求；
-   proxy(['/api/**', '/ajax/**'], {...}) 组合
-   proxy(['/api/**', '!**/bad.json'], {...}) 不包括\*\*/bad.json

### 自定义匹配

```js
/**
 * @return {Boolean}
 */
var filter = function(pathname, req) {
	return pathname.match('^/api') && req.method === 'GET'
}

var apiProxy = proxy(filter, { target: 'http://www.example.org' })
```

### 选项

http-proxy-middleware options

```js
option.pathRewrite：对象/函数，重写目标 url 路径

// 重写
pathRewrite: {'^/old/api' : '/new/api'}

// 移除
pathRewrite: {'^/remove/api' : ''}

// 添加
pathRewrite: {'^/' : '/basepath/'}

// 自定义
pathRewrite: function (path, req) { return path.replace('/api', '/base/api') }

// option.router：对象/函数，重新指定请求转发目标

// 使用主机或者路径进行匹配，返回最先匹配到结果
// 所以配置的顺序很重要
router: {
'integration.localhost:3000' : 'http://localhost:8001', // host only
'staging.localhost:3000' : 'http://localhost:8002', // host only
'localhost:3000/api' : 'http://localhost:8003', // host + path
'/rest' : 'http://localhost:8004' // path only
}

// 自定义
router: function(req) {
return 'http://localhost:8004';
}

// http-proxy 事件
// 参照：http-proxy events

// option.onError:

// 监听 proxy 的 onerr 事件
proxy.on('error', function (err, req, res) {
res.writeHead(500, {
'Content-Type': 'text/plain'
});

res.end('Something went wrong. And we are reporting a custom error message.');
});
```

option.onProxyRes：监听 proxy 的回应事件

```js
proxy.on('proxyRes', function(proxyRes, req, res) {
	console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2))
})
```

option.onProxyReq：监听 proxy 的请求事件

```js
proxy.on('proxyReq', function onProxyReq(proxyReq, req, res) {
	proxyReq.setHeader('x-added', 'foobar')
})
```

option.onProxyReqWs：

```js
function onProxyReqWs(proxyReq, req, socket, options, head) {
	proxyReq.setHeader('X-Special-Proxy-Header', 'foobar')
}
```

option.onOpen：监听来自目标服务器的信息

```js
proxy.on('open', function(proxySocket) {
	proxySocket.on('data', hybiParseAndLogMessage)
})
```

option.onClose：展示 websocket 链接分离

```js
proxy.on('close', function(res, socket, head) {
	console.log('Client disconnected')
})
```

// 原文： https://www.jianshu.com/p/a248b146c55a
