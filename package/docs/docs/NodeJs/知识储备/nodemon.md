# Node 自动重启工具 nodemon

## 为什么要使用

在编写调试 Node.js 项目，修改代码后，需要频繁的手动 close 掉，然后再重新启动，非常繁琐。现在，我们可以使用 nodemon 这个工具，它的作用是监听代码文件的变动，当代码改变之后，自动重启。

## 如何使用

## 下载

```js
cnpm install -g  nodemon
```

安装在全局。

## 使用

编写代码 app.js

```js
var express = require('express')

var app = express()

app.get('/', function(req, res) {
	res.send('hello world')
})

app.listen(3000, function() {
	console.log('server is running')
})
```

这里使用了 express 框架。

传统的方法，我们使用 node app.js 命令，程序将启动。其实，我们刚才下载的 nodemon 工具也可以用来启动。

```js
nodemon app.js
```

我们访问 3000 端口，可以看到 hellloworld。

我们现在尝试修改一下代码：

```js
app.get('/', function(req, res) {
	res.send('hello express')
})
```

保存之后，我们可以看到命令行中，输出了以下内容：

```sh
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
```

我们只需要刷新浏览器，就可以看到改动后的内容。

实际上，我们可以看到，nodemon 其实也是在调用 node 命令。

## 参考

[https://www.jianshu.com/p/3b3b8bf9c4e9](https://www.jianshu.com/p/3b3b8bf9c4e9)

<ClientOnly>
  <article-info weather="qing" mood="fendou">2019年09月10日 13:46</article-info>
</ClientOnly>
