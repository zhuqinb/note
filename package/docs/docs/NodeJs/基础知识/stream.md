# NodeJs stream 流

## 什么是流

流的英文 stream, 流(Stream)是一个抽象的数据接口，Node.js 中很多对象都实现了流，流是 EventEmitter 对象的一个实例
，总之它是会冒数据(以 Buffer 为单位)，或者能够吸收数据的东西，他的本质就是数据流动起来

<img :src="$withBase('/images/NodeJs/stream-01.png')" style="margin: 0 auto;display: block;" alt="foo">

注意：stream 不是 node.js 独有的概念，而是一个操作系统最基本的操作方式，只不过 node.js 有 api 支持这种操作方式，linux 命令的|就是 stream

## 为什么要学习 stream

### 视频播放例子

小伙伴肯定都在线看过电影，对比定义中的图-水桶管道流转图，source 就是服务端的视频，dest 就是你的自己的播放器(或者浏览器中的 false 和 h5 video)。大家想一下，看电影的方式就如同上面的图管道换水一样，一点点从服务端将视频流动道本地播放器，一遍流动一遍播放，最后流动完了也就播放完了。

说明：视频播放的这个例子，如果我们不使用管道和流动的方式，直接先从服务端加载完视频文件，然后再播放。会造成很多问题

1. 因内存占有太多而导致系统卡顿或者崩溃
2. 因为我们的网速 内存 cpu 运算速度都是有限的，而且还要有多个程序共享使用，一个视频文件加载完可能有几个 g 那么大。

### 读取大文件 data 的例子

**有一个这样的需求，想要读取大文件 data 的例子**

使用文件读取

```js
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function(req, res) {
	const fileName = path.resolve(__dirname, 'data.txt')
	fs.readFile(fileName, function(err, data) {
		res.end(data)
	})
})
server.listen(8000)
```

使用文件读取这段代码语法上并没有什么问题，但是如果 data.txt 文件非常大的话，到了几百 M，在响应大量用户并发请求的时候，程序可能会消耗大量的内存，这样可能造成用户连接缓慢的问题。而且并发请求过大的话，服务器内存开销也会很大。这时候我们来看一下用 stream 实现。

```js
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer(function(req, res) {
	const fileName = path.resolve(__dirname, 'data.txt')
	let stream = fs.createReadStream(fileName) // 这一行有改动
	stream.pipe(res) // 这一行有改动
})
server.listen(8000)
```

使用 stream 就可以不需要把文件全部读取了再返回，而是一边读取一边返回，数据通过管道流动给客户端，真的减轻了服务器的压力。
看了两个例子我想小伙伴们应该知道为什么要使用 stream 了吧！因为一次性读取,操作大文件，内存和网络是吃不消的，因此要让数据流动起来，一点点的进行操作。

## stream 流转过程

再次看上面那张水桶管道流转图

图中可以看出，stream 整个流转过程包括 source，dest，还有连接二者的管道 pipe(stream 的核心)，分别介绍三者来带领大家搞懂 stream 流转过程。

stream 从哪里来-source
stream 的常见来源方式有三种：

1. 从控制台输入
2. http 请求中 request
3. 读取文件

这里先说一下从控制台输入这种方式，2 和 3 两种方式 stream 应用场景章节会有详细的讲解。

看一段 process.stdin 的代码

```js
process.stdin.on('data', chunk => {
    console.log('stream by stdin', chunk)
    console.log('stream by stdin', chunk.toString())
}}
```

## 参考

[https://juejin.im/post/5d25ce36f265da1ba84ab97a?utm_source=gold_browser_extension](https://juejin.im/post/5d25ce36f265da1ba84ab97a?utm_source=gold_browser_extension)
