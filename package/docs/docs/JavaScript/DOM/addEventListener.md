# addEventListener

## addEventListener介绍
EventTarget.prototype.addEventListener(type: string, listener: function, useCapture: boolean)

最后一个参数是 决定是在冒泡阶段(false)执行监听还是捕获阶段执行(true),冒泡是默认值

后来 DOM 规范做了修订：addEventListener() 的第三个参数可以是个对象值了,也就是说第三个参数现在可以是两种类型的值了

EventTarget.prototype.addEventListener(type: string, listener: function, useCapture: boolean)
EventTarget.prototype.addEventListener(type: string, listener: function, options: object)

这个修订是为了扩展新的选项，从而自定义更多的行为，目前规范中 options 对象可用的属性有三个,默认全是false：

options = {
	capture: false,
    passive: false,
    once: false
}

## passive介绍

很多移动端的页面都会监听 touchstart 等 touch 事件，像这样：

```js
document.addEventListener("touchstart", function(e){
    ... // 浏览器不知道这里会不会有 e.preventDefault()
})
```

由于 touchstart 事件对象的 cancelable 属性为 true，也就是说它的默认行为可以被监听器通过 preventDefault() 方法阻止，那它的默认行为是什么呢，通常来说就是滚动当前页面（还可能是缩放页面），如果它的默认行为被阻止了，页面就必须静止不动。但浏览器无法预先知道一个监听器会不会调用 preventDefault()，它能做的只有等监听器执行完后再去执行默认行为，而监听器执行是要耗时的，有些甚至耗时很明显，这样就会导致页面卡顿。即便监听器是个空函数，也会产生一定的卡顿，毕竟空函数的执行也会耗时。

而有 80% 的滚动事件监听器是不会阻止默认行为的，也就是说大部分情况下，浏览器是白等了。所以，passive 监听器诞生了，passive 的意思是“顺从的”，表示它不会对事件的默认行为说 no，浏览器知道了一个监听器是 passive 的，它就可以在两个线程里同时执行监听器中的 JavaScript 代码和浏览器的默认行为了。


## cancelable
cancelable 事件返回一个布尔值。如果用 preventDefault() 方法可以取消与事件关联的默认动作，则为 true，否则为 fasle。

语法：`event.cancelable`
