# connect-history-api-fallback 库的理解

## 介绍

今天在搭建项目的时候遇到了一个问题，该项目是一个单页面应用，前端使用的是 React，用 react-router 做的前端路由，后端用的 express 做的 web 服务器，遇到的问题是通过页面点击进入页面没有问题，但是当通过地址栏输入 URL 的方式访问页面就会报 404 错误，google 之后发现了这个神奇的 js 库。github 上是这么介绍这个库的：

单页面应用程序(SPA)通常使用一个 web 浏览器可以访问的索引文件，比如 index.html，然后，在 HTML5 History API 的帮助下（react-router 就是基于 History API 实现的），借助 JavaScript 处理应用程序中的导航。当用户单击刷新按钮或直接通过输入地址的方式访问页面时，会出现找不到页面的问题，因为这两种方式都绕开了 History API，而我们的请求又找不到后端对应的路由，页面返回 404 错误。
connect-history-api-fallback 中间件很好的解决了这个问题。具体来说，每当出现符合以下条件的请求时，它将把请求定位到你指定的索引文件(默认为/index.html)。

-   请求是 Get 请求
-   请求的 Content-Type 类型是 text/html 类型
-   不是直接的文件请求，即所请求的路径不包含.(点)字符
-   不匹配 option 参数中提供的模式

## 使用方法

安装

```js
npm install --save connect-history-api-fallback
```

下面主要介绍下在 express 中的使用方法：

```js
var history = require('connect-history-api-fallback')
var express = require('express')
var app = express()
app.use(history())
```

在 express 中使用的时候需要注意一点的是，该中间件必须要放在 express.static 中间前的前面引入，否则会出现问题。

## 选项

使用的时候可以传入一个可选的参数,比如覆盖默认的索引文件：

```js
history({
	index: '/default.html'
})
```

当请求 url 匹配 regex 模式时，重写索引。可以重写为静态字符串，也可以使用函数转换传入请求：

```js
history({
    rewrites: [ rewrites: [
      { from: /\/soccer/, to: '/soccer.html'}{ from: /\/soccer/, to: '/soccer.html'}
    ] ]
});
```

## 参考

[官方文档](https://github.com/bripkens/connect-history-api-fallback)
[https://blog.csdn.net/astonishqft/article/details/82762354](https://blog.csdn.net/astonishqft/article/details/82762354)

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月10日 16:28</article-info>
</ClientOnly>
