# Web Worker javascript 多线程编程（一）

## 什么是 Web Worker？

web worker 是运行在后台的 JavaScript，不占用浏览器自身线程，独立于其他脚本，可以提高应用的总体性能，并且提升用户体验。

一般来说 Javascript 和 UI 页面会共用一个线程，在 HTML 页面中执行 js 脚本时，页面的状态是不可响应的，直到脚本已完成。而这段代码可以交给 Web Worker 在后台运行，那么页面在 Javascript 运行期间依然可以响应用户操作。后台会启动一个 worker 线程来执行这段代码，用户可以创建多个 worker 线程。

## 有两种 Web Worker

Web workers 可分为两种类型：专用线程 dedicated web worker，以及共享线程 shared web worker。 Dedicated web worker 随当前页面的关闭而结束；这意味着 Dedicated web worker 只能被创建它的页面访问。与之相对应的 Shared web worker 可以被多个页面访问。在 Javascript 代码中，“Work”类型代表 Dedicated web worker，而“SharedWorker”类型代表 Shared web worker。

在绝大多数情况下，使用 Dedicated web worker 就足够了，因为一般来说在 web worker 中运行的代码是专为当前页面服务的。而在一些特定情况下，web worker 可能运行的是更为普遍性的代码，可以为多个页面服务。在这种情况下，我们会创建一个共享线程的 Shared web worker，它可以被与之相关联的多个页面访问，只有当所有关联的的页面都关闭的时候，该 Shared web worker 才会结束。相对 Dedicated web worker，shared web worker 稍微复杂些。

new Worker()对象代表 Dedicated Web Worker，以下示例代码都为 Dedicated Web Worker。

## 如何创建 Web Worker？

创建一个新的 worker 十分简单。你所要做的就是调用 Worker() 构造函数，指定一个要在 worker 线程内运行的脚本的 URI，如果你希望能够与 worker 进行通信，接收其传递回来的数据，可以将 worker 的 onmessage 属性设置成一个特定的事件处理函数，当 web worker 传递消息时，会执行事件监听器中的代码。event.data 中存有来自 worker 的数据。。

example.html: (主页面):

```js
var myWorker = new Worker('worker_demo.js')

myWorker.onmessage = function(event) {
	console.log('Called back by the worker!\n')
}
```

或者，也可以使用 addEventListener()添加事件监听器：

```js
var myWorker = new Worker('worker_demo.js')

myWorker.addEventListener(
	'message',
	function(event) {
		console.log('Worker said : ' + event.data)
	},
	false
)

myWorker.postMessage('hello my worker') // start the worker.
```

例子中的第一行创建了一个新的 worker 线程。第三行为 worker 设置了 message 事件的监听函数。当 worker 调用自己的 postMessage() 函数时就会向后台 Worker 发送数据，并且后台返回消息调用 message 这个事件处理函数。

注意： 传入 Worker 构造函数的参数 URI 必须遵循同源策略为了高效地传输 ArrayBuffer 对象数据，需要在 postMessage 方法中的第二个参数中指定它。实例代码如下：

```js
myWorker.postMessage(
	{
		operation: 'list_all_users',
		//ArrayBuffer object
		input: buffer,
		threshold: 0.8
	},
	[buffer]
)
```

worker_demo.js (worker):

```js
postMessage("I'm working before postMessage('hello my worker').")

onmessage = function(event) {
	postMessage('Hi ' + event.data)
}
```

> 注意： 通常来说，后台线程 – 包括 worker – 无法操作 DOM。 如果后台线程需要修改 DOM，那么它应该将消息发送给它的创建者，让创建者来完成这些操作。

通过 Web Worker 你可以在前台做一些小规模分布式计算之类的工作，不过 Web Worker 有以下一些使用限制：

Web Worker 无法访问 DOM 节点；

Web Worker 无法访问全局变量或是全局函数；

Web Worker 无法访问 window、document 之类的浏览器全局变量、方法；

不过 Web Worker 作用域中依然可以使用有：

定时器相关方法 setTimeout()，clearTimeout()，setInterval()...之类的函数

navigator 对象，它含有如下能够识别浏览器的字符串，就像在普通脚本中做的那样，如：appName、appVersion、userAgent...

引入脚本与库，Worker 线程能够访问一个全局函数，importScripts() ，该函数允许 worker 将脚本或库引入自己的作用域内。你可以不传入参数，或传入多个脚本的 URI 来引入；以下的例子都是合法的：

```js
importScripts() /*什么都不引入*/
importScripts('foo.js') /*只引入 "foo.js" */
importScripts('foo.js', 'bar.js') /*引入两个脚本 */
```

浏览器将列出的脚本加载并运行。每个脚本中的全局对象都能够被 worker 使用。如果脚本无法加载，将抛出 NETWORK_ERROR 异常，接下来的代码也无法执行。而之前执行的代码(包括使用 setTimeout 延迟执行的代码)却依然能够使用。importScripts()之后的函数声明依然能够使用，因为它们始终会在其他代码之前运行。

注意： 脚本的下载顺序不固定，但执行时会按照你将文件名传入到 importScripts()中的顺序。这是同步完成的；直到所有脚本都下载并运行完毕，importScripts()才会返回。
atob() 、btoa() base64 编码与解码的方法。

也可以使用 XMLHttpRequest 对象来做 Ajax 通信，以及其他 API：WebSocket、Promise、Worker(可以在 Worker 中使用 Worker)

下面简单写下 Web Worker 使用 XMLHttpRequest 与服务端通信：

```js
addEventListener(
	'message',
	function(evt) {
		var xhr = new XMLHttpRequest()
		xhr.open('GET', 'serviceUrl') //serviceUrl 为后端 j 返回 son 数据的接口
		xhr.onload = function() {
			postMessage(xhr.responseText)
		}
		xhr.send()
	},
	false
)
```

上述举例的代码有些简陋，只是为了抛砖引玉，见谅。其他 API 与 Web Worker 的融合使用也是大同小异，大家可以自己琢磨琢磨。

### 终止 web worker

如果你想立即终止一个运行中的 worker，可以调用 worker 的 terminate()方法。被终止的 Worker 对象不能被重启或重用，我们只能新建另一个 Worker 实例来执行新的任务。

myWorker.terminate();

### 处理错误

当 worker 出现运行时错误时，它的 onerror 事件处理函数会被调用。它会收到一个实现了 ErrorEvent 接口名为 error 的事件，供开发者捕捉错误信息。下面的代码展示了如何绑定 error 事件：

```js
worker.addEventListener(
	'error',
	function(evt) {
		alert('Line #' + evt.lineno + ' - ' + evt.message + ' in ' + evt.filename)
	},
	false
)
```

如上可见， Worker 对象可以绑定 error 事件；而且 evt 对象中包含错误所在的代码文件（evt.filename）、错误所在的代码行数（evt.lineno）、以及错误信息（evt.message）。

下面上一个完整的 dedicated web worker 使用案例。

demo_worker.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>dedicated web worker</title>
	</head>
	<body>
		<p>
			Count numbers:
			<output id="result"></output>
		</p>
		<button id="startWorker">startWorker</button>
		<button id="endWorker">stopWorker</button>
	</body>
	<script>
		;(function() {
			var result = document.querySelector('#result'),
				startWorker = document.querySelector('#startWorker'),
				endWorker = document.querySelector('#endWorker'),
				worker,
				data = 10
			startWorker.addEventListener(
				'click',
				function(event) {
					if (typeof Worker !== 'undefined') {
						if (typeof worker == 'undefined') {
							worker = new Worker('./demo_workers.js')
						}
						worker.addEventListener(
							'message',
							function(event) {
								result.innerHTML = event.data
							},
							false
						)
						worker.addEventListener(
							'error',
							function(event) {
								alert('Line #' + event.lineno + ' - ' + event.message + ' in ' + event.filename)
							},
							false
						)
						worker.postMessage(data)
						endWorker.addEventListener(
							'click',
							function() {
								worker.terminate()
							},
							false
						)
					} else {
						result.innerHTML = 'sry, your browser does not support Web workers...'
					}
				},
				false
			)
		})()
	</script>
</html>
```

这个 HTML 页面中有个 startWorker 按钮，点击后会运行一个 Javascript 文件。上面的代码中首先检测当前浏览器是否支持 Web Worker，不支持的话就显示提醒信息。

按钮的点击事件中创建了 Worker 对象，并给它指定了 Javascript 脚本文件——demo_workers.js(稍后会有代码)，并且给 Worker 对象绑定了一个“message”事件。该事件会在后台代码（demo_workers.js）向页面返回数据时触发。“message”事件可以通过 event.data 来获取后台代码传回的数据。最后，postMessage 方法正式执行 demo_workers.js，该方法向后台代码传递参数，后台代码同样通过 message 事件参数的 data 属性获取。

demo_worker.js

```js
addEventListener('message', function(event) {
	var count = event.data
	var interval = setInterval(function() {
		postMessage(count--)
		!count && clearInterval(interval)
	}, 1000)
})
```

以上代码在后台监听 message 事件，并获取页面传来的参数；这里实际上是一个从 10 到 1 的倒计时：在 message 事件被触发之后，把结果传给页面显示出来。

所以当点击 startWorker 按钮，页面会在 count number: 显示从 10 递减一变为最终的 1，在这 10 秒钟内页面依然可以响应鼠标键盘事件。点击 stopWorker 按钮，web worker 会直接终止，页面变化显示会直接停止。

### 嵌入式 web worker

目前没有一种官方的方法能够像 script 标签一样将 worker 的代码嵌入的网页中。但是如果一个 script 元素没有指定 src 属性，并且它的 type 没有指定成一个可运行的 mime-type，那么它就会被认为是一个数据块元素，并且能够被 JavaScript 使用。数据块是 HTML5 中一个十分常见的特性，它可以携带几乎任何文本类型的数据。所以，你能够以如下方式嵌入一个 worker：

```htm
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>MDN Example - Embedded worker</title>
		<script type="text/js-worker">
			// 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
			var myVar = "Hello World!";
			// 剩下的 worker 代码写到这里。
		</script>
		<script type="text/javascript">
			// 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。
			function pageLog(sMsg) {
				// 使用 fragment：这样浏览器只会进行一次渲染/重排。
				var oFragm = document.createDocumentFragment()
				oFragm.appendChild(document.createTextNode(sMsg))
				oFragm.appendChild(document.createElement('br'))
				document.querySelector('#logDisplay').appendChild(oFragm)
			}
		</script>
		<script type="text/js-worker">
			// 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
			onmessage = function (oEvent) {
			  postMessage(myVar);
			};
			// 剩下的 worker 代码写到这里。
		</script>
		<script type="text/javascript">
			// 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。

			// 在过去...：
			// 我们使用 blob builder
			// ...但是现在我们使用 Blob...:
			var blob = new Blob(
				Array.prototype.map.call(document.querySelectorAll('script[type="text\/js-worker"]'), function(oScript) {
					return oScript.textContent
				}),
				{ type: 'text/javascript' }
			)

			// 创建一个新的 document.worker 属性，包含所有 "text/js-worker" 脚本。
			document.worker = new Worker(window.URL.createObjectURL(blob))

			document.worker.onmessage = function(oEvent) {
				pageLog('Received: ' + oEvent.data)
			}

			// 启动 worker.
			window.onload = function() {
				document.worker.postMessage('')
			}
		</script>
	</head>
	<body>
		<div id="logDisplay"></div>
	</body>
</html>
```

现在，嵌入式 worker 已经嵌套进了一个自定义的 document.worker 属性中。

### 在 worker 内创建 worker

worker 的一个优势在于能够执行处理器密集型的运算而不会阻塞 UI 线程。在下面的例子中，worker 用于计算斐波那契数。

fibonacci.js

```js
var results = []
function resultReceiver(event) {
	results.push(parseInt(event.data))
	if (results.length == 2) {
		postMessage(results[0] + results[1])
	}
}
function errorReceiver(event) {
	throw event.data
}
onmessage = function(event) {
	var n = parseInt(event.data)
	if (n == 0 || n == 1) {
		postMessage(n)
		return
	}
	for (var i = 1; i <= 2; i++) {
		var worker = new Worker('fibonacci.js')
		worker.onmessage = resultReceiver
		worker.onerror = errorReceiver
		worker.postMessage(n - i)
	}
}
```

worker 将属性 onmessage 设置为一个函数，当 worker 对象调用 postMessage()时该函数会接收到发送过来的信息。(注意，这么使用并不等同于定义一个同名的全局变量，或是定义一个同名的函数。var onmessage 与 function onmessage 将会定义与该名字相同的全局属性，但是它们不会注册能够接收从创建 worker 的网页发送过来的消息的函数。) 这会启用递归，生成自己的新拷贝来处理计算的每一个循环。

fibonacci.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Test threads fibonacci</title>
	</head>
	<body>
		<div id="result"></div>
		<script>
			var worker = new Worker('fibonacci.js')
			worker.onmessage = function(event) {
				document.getElementById('result').textContent = event.data
				dump('Got: ' + event.data + '\n')
			}
			worker.onerror = function(error) {
				dump('Worker error: ' + error.message + '\n')
				throw error
			}
			worker.postMessage('5')
		</script>
	</body>
</html>
```

网页创建了一个 div 元素，ID 为 result，用它来显示运算结果，然后生成 worker。在生成 worker 后，onmessage 处理函数配置为通过设置 div 元素的内容来显示运算结果,最后，向 worker 发送一条信息来启动它。

注意：chrome 下不支持在 worker 中创建 worker、以及 dump 方法、所以上述代码可以在 Firefox 下运行。由于文章篇幅过长，关于共享线程 shared web worker 的介绍将在下篇文章 Web Worker javascript 多线程编程（二）发布。

## 参考

[原文: https://www.cnblogs.com/peakleo/p/6218823.html](https://www.cnblogs.com/peakleo/p/6218823.html)