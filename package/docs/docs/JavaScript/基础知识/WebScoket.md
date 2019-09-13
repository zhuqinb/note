# WebScoket

## 前言

在工作中我们开发接触最多的协议莫过于 HTTP 协议了，近些年 H5 的很多 API 和技术已经如雨后春笋般开始渐渐发扬光大了，今天我们就来一起讨论下其中的一个比较有意思的 API，WebSocket

首先，在介绍主角之前，总要有一个铺垫，那么我就来三言两语先说一下最常见的 HTTP 协议吧，以示区分

## 三言两语说说 HTTP

HTTP 是客户端/服务器模式中请求-响应所用的协议，在这种模式中，浏览器向服务器提交 HTTP 请求，服务器响应请求的资源

言下之意就是你可以把这种模式，想象成对讲机，一个人说，另一个人听

### HTTP 是半双工通信

这种半双工通信的特点就是：

-   同一时刻数据是单向流动的，客户端向服务端请求数据->单向，服务端向客户端返回数据->单向
-   服务器不能主动的推送数据给客户端

以上就是对 HTTP 协议的简单概括，那么下面直接开始进入今天的主题

## 双工通信

在 H5 的 websocket 出现之前，为了实现这种推送技术，大家最常用的实现方式有这三种：轮询、长轮询和 iframe 流，但是他们三兄弟或多或少都有些美中不足

于是乎，在大神们的不断努力下，定义了 websocket 这个好用的 API，来完善了双工通信的更好实现方式

WebSocket 时代已来，不要错过！！！

### WebSocket

WebSocket 实现了，在客户端和服务端上建立了一个长久的连接，两边可以任意发数据嗨皮

当然如果知道的更深一层的话，要知道它属于应用层的协议，它基于 TCP 传输协议，并复用 HTTP 的握手通道

<img :src="$withBase('/images/JavaScript/base/WebScoket-01')" alt="foo">

说的再多，不如懂它，下面来看看 websocket 的优势何在

### WebSocket 的优势

1. 支持双向通信，实时性更强(你可以来做个 QQ，微信了，老铁)
1. 更好的二进制支持
1. 较少的控制开销(连接创建后，ws 客户端、服务端进行数据交换时，协议控制的数据包头部较少)

那么废话说到这里了，接下来开始实战，直接检验一下成果

### 一起敲敲 WebSocket

我们先来写下前端页面的 WebSocket，看看基本用法，上代码，别犹豫

```js
// 创建一个 index.html 文件
// 下面直接写 WebSocket

// 只需要 new 一下就可以创建一个 websocket 的实例
// 我们要去连接 ws 协议
// 这里对应的端口就是服务端设置的端口号 9999
let ws = new WebSocket('ws://localhost:9999')

// onopen 是客户端与服务端建立连接后触发
ws.onopen = function() {
	ws.send('哎呦，不错哦')
}

// onmessage 是当服务端给客户端发来消息的时候触发
ws.onmessage = function(res) {
	console.log(res) // 打印的是 MessageEvent 对象
	// 真正的消息数据是 res.data
	console.log(res.data)
}
```

以上代码，除去注释的话，也就不到 10 行代码，就把 websocket 的用法写完了，so easy，使用起来很简单啊，有木有
那么做事要做全，我们再写一下后台那边的 websocket 接收和发送消息部分吧，继续撸
等等，在撸之前，先要安装一下

```js
// 后台需要安装 ws 包
npm i ws -S
```

这里我们用 node 的 express 来简单搭个后台服务，目录结构也很简单，如下图

<img :src="$withBase('/images/JavaScript/base/WebScoket-02')" alt="foo">

下面开始撸这个 server.js 文件吧

```js
const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(\_\_dirname));
// 监听 3000 端口
app.listen(3000);
// =============================================
// 开始创建一个 websocket 服务
const Server = require('ws').Server;
// 这里是设置服务器的端口号，和上面的 3000 端口不用一致
const ws = new Server({ port: 9999 });

// 监听服务端和客户端的连接情况
ws.on('connection', function(socket) {
    // 监听客户端发来的消息
    socket.on('message', function(msg) {
        console.log(msg); // 这个就是客户端发来的消息
        // 来而不往非礼也，服务端也可以发消息给客户端
        socket.send(`这里是服务端对你说的话： ${msg}`);
    });
});
```

这样就搭了一个后台服务了，访问 localhost:3000 后，在控制台就可以看到消息了

<img :src="$withBase('/images/JavaScript/base/WebScoket-03')" alt="foo">

看到这里，我们会由衷的发现，无论是前端来写还是后台来写，发现其实都很类似，所以用起来比较流畅，多敲几遍就好了，熟能生巧嘛，哈哈

接下来还没完，由于 websocket 是 H5 标准出的东西，老版本的浏览器当然就不能很好的支持了，这时前端就要处理该死的兼容问题了

正因如此，世上才会有了另外一个更好用的库出现，这就是大名鼎鼎的 socket.io

下面趁此雅兴，不要停，继续来学习一下这个全双工通信中的王者吧

### socket.io

先来看下 socket.io 的特别有哪些
socket.io 的特点

-   易用性：封装了服务端和客户端，使用简单方便
-   跨平台：支持跨平台，可以选择在服务端或是客户端开发实时应用
-   自适应：会根据浏览器来自己决定是使用 WebSocket、Ajax 长轮询还是 Iframe 流等方式去选择最优方式，甚至支持 IE5.5

好了，看完了特点，那就......

少点套路，多点真诚，废话不说了，直接上手从头撸一遍吧

### socket.io 安装

```js
// 安装在本地项目
npm i socket.io -S
```

启动服务，手写服务端

还是用 node 中的 express 框架来搭个服务，代码如下

```js
// server.js 文件
const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(\_\_dirname));
// 通过 node 的 http 模块来创建一个 server 服务
const server = require('http').createServer(app);
// WebSocket 是依赖 HTTP 协议进行握手的
const io = require('socket.io')(server);
    // 监听客户端与服务端的连接
    io.on('connection', function(socket) {
    // send 方法来给客户端发消息
    socket.send('青花瓷');
    // 监听客户端的消息是否接收成功
    socket.on('message', function(msg) {
        console.log(msg); // 客户端发来的消息
        socket.send('天青色等烟雨，而我在等你' );
    });
});
// 监听 3000 端口
server.listen(3000);
```

辣么，服务端的代码已经写完了，接下来开始写前端的部分，撸起袖子加油干啊！！！

在服务端运行后，客户端就需要引用一个动态生成的文件路径，路径是固定的直接引用即可(/socket.io/socket.io.js)

```html
// index.html 文件 ...省略 // 引用 socket.io 的 js 文件

<script src="/socket.io/socket.io.js"></script>
<script>
	const socket = io('/')
	// 监听与服务器连接成功的事件
	socket.on('connect', () => {
		console.log('连接成功')
		socket.send('周杰伦')
	})
	// 监听服务端发来的消息
	socket.on('message', msg => {
		// 这个msg就是传过来的真消息了，不用再msg.data取值了
		console.log(`客户端接收到的消息： ${msg}`)
	})
	// 监听与服务器连接断开事件
	socket.on('disconnect', () => {
		console.log('连接断开成功')
	})
</script>
```

☆ 这里要有个小提示: io 创建 socket 的时候可以接收一个 url 参数

url 可以是 socket 服务完整的 http 地址，如：io('http://localhost:3000')

也可以是相对路径，如：io('/')

不填的话就表示默认连接当前路径，如：io()

基本用法就是这些了，还有其他的划分命名空间、加入房间和广播等方法没有讲到，本想继续往下写的

[参考](https://juejin.im/post/5bc7f6b96fb9a05d3447eef8)

<ClientOnly>
  <article-info weather="qing" mood="maren">2019年09月04日 01:05 今天是地大信息上班的最后一天</article-info>
</ClientOnly>
