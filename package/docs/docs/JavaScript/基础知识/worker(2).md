# worker 共享线程

Web Worker javascript 多线程编程（一）中提到有两种 Web Worker：专用线程 dedicated web worker，以及共享线程 shared web worker。不过主要讲了专用线程 dedicated web worker，并未提及共享线程 shared web worker。那么这一篇文章继上一篇讲讲共享线程 shared web worker。

shared web worker：运行的是更为普遍性的代码，可以为多个页面服务。它可以被与之相关联的多个页面访问，只有当所有关联的的页面都关闭的时候，该 Shared web worker 才会结束。

注意：如果要使共享进程可以连接到多个不同的页面，这些页面必须属于相同的域（相同的协议，主机以及端口）；

## 如何创建 shared web worker

创建 shared web worker 与创建 dedicated web worker 方法类似，调用 SharedWorker()构造函数，指定一个要在 worker 线程内运行的脚本的 uri。
下面的代码展示了如何通过 SharedWorker()构造函数来创建一个共享进程对象。

```js
var myWorker = new SharedWorker('worker.js')
```

与 dedicated web worker 不同的是，shared web worker 访问 worker 通过 sharedworker.port 属性创建了一个 messageport 对象，该对象可以用来进行通信和对共享进程进行控制。当使用 addEventListener 监听 message 事件时，端口需要手动启动，利用其 start()方法，采用 onmessage()则不用。

```js
myWorker.port.start()
```

端口开启后，使用 port.postmessage()向 SharedWorker 发送消息，使用 port.onmessage 监听事件接收 SharedWorker 传递的消息，代码演示如下：

```js
first.onchange = function() {
	myWorker.port.postMessage([first.value, second.value])
	console.log('Message posted to worker')
}

second.onchange = function() {
	myWorker.port.postMessage([first.value, second.value])
	console.log('Message posted to worker')
}

myWorker.port.onmessage = function(e) {
	result1.textContent = e.data
	console.log('Message received from worker')
}
```

在 SharedWorker 中，使用 onconnect 事件监听 SharedWorker 的所有页面连接在同一端口，同样用 port.onmessage 与页面通信接收消息，用 port.postMessage 向页面发回处理后的数据。

```js
onconnect = function(e) {
	var port = e.ports[0]

	port.addEventListener('message', function(e) {
		var workerResult = 'Result: ' + e.data[0] * e.data[1]
		port.postMessage(workerResult)
	})

	port.start() // 使用 addEventListener 监听message时需要. onmessage 则不需要
}
```

使用 onmessage 监听事件则代码如下：

```js
onconnect = function(e) {
	var port = e.ports[0]
	port.onmessage(function(e) {
		var workerResult = 'Result: ' + e.data[0] * e.data[1]
		port.postMessage(workerResult)
	})
}
```

注意：SharedWorker 本身就是继承自 Worker，所以与 Worker 一样受同样的限制，关于限制在 Web Worker javascript 多线程编程（一）中有介绍，在 Worker 的作用域中额外增添了 applicationCache 应用缓存(不过已经从 web 标准中删除)，另一个就是 name，在使用构造函数创建 SharedWorker 对象时的一个可选参数。

```js
var myWorker = new SharedWorker("worker.js"，"workerName");
```

这样在 worker 的全局作用域中可访问 name，在上例代码中值为"workerName"。

下面上一个两个 html 页面共享一个 SharedWorker 的完整简单例子：

index1.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width" />
		<title>Shared Workers basic example</title>
		<link rel="stylesheet" href="style.css" />
		<!--[if lt IE 9]>
			<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body>
		<h1>Shared<br />Workers<br />basic<br />example</h1>
		<div class="controls" tabindex="0">
			<form>
				<div>
					<label for="number1">Multiply number 1: </label>
					<input type="text" id="number1" value="0" />
				</div>
				<div>
					<label for="number2">Multiply number 2: </label>
					<input type="text" id="number2" value="0" />
				</div>
			</form>
			<p class="result1">Result: 0</p>
			<p><a href="index2.html" target="_blank">Go to second worker page</a></p>
		</div>
	</body>
	<script src="index1.js"></script>
</html>
```

index1.js

```js
var first = document.querySelector('#number1'),
	second = document.querySelector('#number2'),
	result1 = document.querySelector('.result1')
if (!!window.SharedWorker) {
	var myWorker = new SharedWorker('worker.js', 'sw1_')
	first.oninput = function() {
		myWorker.port.postMessage([first.value, second.value])
		console.log('Message posted to worker')
	}
	second.oninput = function() {
		myWorker.port.postMessage([first.value, second.value])
		console.log('Message posted to worker')
	}
	myWorker.port.onmessage = function(e) {
		result1.textContent = e.data
		console.log('Message received from worker')
	}
}
```

index2.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width" />
		<title>Shared Workers basic example</title>
		<link rel="stylesheet" href="style.css" />
		<!--[if lt IE 9]>
			<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body>
		<h1>Shared<br />Workers<br />basic<br />example</h1>
		<div class="controls" tabindex="0">
			<form>
				<div>
					<label for="number3">Square number: </label>
					<input type="text" id="number3" value="0" />
				</div>
			</form>
			<p class="result2">Result: 0</p>
		</div>
	</body>
	<script src="index2.js"></script>
</html>
```

index2.js

```js
var squareNumber = document.querySelector('#number3'),
	result2 = document.querySelector('.result2')
if (!!window.SharedWorker) {
	var myWorker = new SharedWorker('worker.js', 'sw2_')
	squareNumber.oninput = function() {
		myWorker.port.postMessage([squareNumber.value, squareNumber.value])
		console.log('Message posted to worker')
	}
	myWorker.port.onmessage = function(e) {
		result2.textContent = e.data
		console.log('Message received from worker')
	}
}
```

worker.js

```js
onconnect = function(e) {
	var port = e.ports[0]
	port.onmessage = function(e) {
		var workerResult = name + 'Result: ' + e.data[0] * e.data[1]
		port.postMessage(workerResult)
	}
}
```

style.css

```css
html {
	background-color: #7d2663;
	font-family: sans-serif;
}

h1 {
	margin: 0;
	font-size: 15vw;
	letter-spacing: -0.2rem;
	position: absolute;
	top: 0;
	z-index: -1;
}

p {
	margin: 0 0 1rem 0;
}

.controls {
	padding: 4vw;
	width: 75%;
	margin: 3vw auto;
	background-color: rgba(255, 255, 255, 0.7);
	border: 5px solid black;
	opacity: 0.3;
	transition: 1s all;
}

.controls:hover,
.controls:focus {
	opacity: 1;
}

.controls label,
.controls p,
.controls input {
	font-size: 3vw;
}

.controls div {
	padding-bottom: 1rem;
}
```

## 参考

[原文: https://www.cnblogs.com/peakleo/p/6223869.html](https://www.cnblogs.com/peakleo/p/6223869.html)
