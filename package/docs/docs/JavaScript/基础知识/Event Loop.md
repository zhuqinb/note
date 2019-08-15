# Event Loop

Event Loop 是 JavaScript 异步编程的核心思想，也是前端进阶必须跨越的一关。同时，它又是面试的必考点，特别是在 Promise 出现之后，各种各样的面试题层出不穷，花样百出。这篇文章从现实生活中的例子入手，让你彻底理解 Event Loop 的原理和机制，并能游刃有余的解决此类面试题。

```js
async function async1() {
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}
async function async2() {
	console.log('async2')
}
console.log('script start')
setTimeout(function() {
	console.log('setTimeout')
}, 0)
async1()
new Promise(function(resolve) {
	console.log('promise1')
	resolve()
}).then(function() {
	console.log('promise2')
})
console.log('script end')
```

## 为什么 JavaScript 是单线程的？

我们都知道 JavaScript 是一门 单线程 语言，也就是说同一时间只能做一件事。这是因为 JavaScript 生来作为浏览器脚本语言，主要用来处理与用户的交互、网络以及操作 DOM。这就决定了它只能是单线程的，否则会带来很复杂的同步问题。
假设 JavaScript 有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
既然 Javascript 是单线程的，它就像是只有一个窗口的银行，客户不得不排队一个一个的等待办理。同理 JavaScript 的任务也要一个接一个的执行，如果某个任务（比如加载高清图片）是个耗时任务，那浏览器岂不得一直卡着？为了防止主线程的阻塞，JavaScript 有了 同步 和 异步 的概念。

## 同步和异步

### 同步

如果在一个函数返回的时候，调用者就能够得到预期结果，那么这个函数就是同步的。也就是说同步方法调用一旦开始，调用者必须等到该函数调用返回后，才能继续后续的行为。下面这段段代码首先会弹出 alert 框，如果你不点击 确定 按钮，所有的页面交互都被锁死，并且后续的 console 语句不会被打印出来。

```js
alert('Yancey')
console.log('is')
console.log('the')
console.log('best')
```

### 异步

如果在函数返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的。比如说发一个网络请求，我们告诉主程序等到接收到数据后再通知我，然后我们就可以去做其他的事情了。当异步完成后，会通知到我们，但是此时可能程序正在做其他的事情，所以即使异步完成了也需要在一旁等待，等到程序空闲下来才有时间去看哪些异步已经完成了，再去执行。

这也就是定时器并不能精确在指定时间后输出回调函数结果的原因。

```js
setTimeout(() => {
	console.log('yancey')
}, 1000)

for (let i = 0; i < 100000000; i += 1) {
	// todo
}
```

### 注意事项

`setTimeout(fn, 0)`在下一轮“事件循环”开始时执行，Promise.resolve()在本轮'事件循环'结束时执行

## 执行栈和任务队列

### 复习下数据结构吧

栈 (stack): 栈是遵循后进先出 (LIFO) 原则的有序集合，新添加或待删除的元素都保存在同一端，称为栈顶，另一端叫做栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。栈在编程语言的编译器和内存中存储基本数据类型和对象的指针、方法调用等.

队列 (queue): 队列是遵循先进先出 (FIFO) 原则的有序集合，队列在尾部添加新元素，并在顶部移除元素，最新添加的元素必须排在队列的末尾。在计算机科学中，最常见的例子就是打印队列。

堆 (heap): 堆是基于树抽象数据类型的一种特殊的数据结构。
![avatar](https://user-gold-cdn.xitu.io/2019/4/21/16a3e8964d42e54e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![avatar](http://baidu.com/pic/doge.png)
// https: //juejin.im/post/5cbc0a9cf265da03b11f3505?utm_source=gold_browser_extension
