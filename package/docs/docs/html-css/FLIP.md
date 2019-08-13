# flip 你的动画

在 vue 官方文档上看到 vue 使用 flip 做动画，就去研究了一下。这是一个准则，协调 js 和 css 对动画的操作。如果你看到我的前一篇文章一篇文章说清浏览器解析和 CSS（GPU）动画优化，理解本篇文章还是很简单的。

## flip 概念

首先我们说说 flip 这几个字母的含义：

-   F:first，参加过渡元素的初始状态。
-   L:last，元素的终止状态。
-   I:invert，这是 flip 的核心。你通过这个元素的初始状态和终止状态计算出元素改变了什么，比如它的宽、高及透明度，然后你翻转这个改变；举个例子，如果一个元素的初始状态和终止状态之间偏移 90px，你应该设置这个元素 transform: translateY(-90px)。这个元素好像是在它的初始位置，其实正好相反。
-   P：play，为你要改变的任何 css 属性启用 tansition，移除你 invert 的改变。这时你的元素会做动画从起始点到终止点。

以下是代码示例：

```js
//js
var app = document.getElementById('app')
var first = app.getBoundingClientRect()
app.classList.add('app-to-end')
var last = app.getBoundingClientRect()
var invert = first.top - last.top
//使元素看起来好像在起始点
app.style.transform = `translateY(${invert}px)`
requestAnimationFrame(function() {
	//启用tansition，并移除翻转的改变
	app.classList.add('animate-on-transforms')
	app.style.transform = ''
})
app.addEventListener('transitionend', () => {
	app.classList.remove('animate-on-transforms')
})
```

```html
<div id="app"></div>
<style>
	#app {
		position: absolute;
		width: 20px;
		height: 20px;
		background: red;
	}
	.app-to-end {
		top: 100px;
	}
	.animate-on-transforms {
		transition: all 2s;
	}
</style>
```

## 使用 flip 的好处

看到这里，如果你看过我的上一篇文章一篇文章说清浏览器解析和 CSS（GPU）动画优化，你知道 getBoundingClientRect()是一个耗费昂贵的操作，它会迫使浏览器发生一次重排。那么为什么我们可以做这消耗不菲的操作呢？

在用户与网站交互后有 100ms 的空闲时间，如果我们利用这 100ms 做预计算操作，然后使用 css3 的 transform 和 opacity 执行动画，用户会觉得你的网站响应非常快。

## 注意事项

1. 别超过 100ms 的空闲期：一旦超过这个空闲期，就会造成卡顿的状况出现；使用开发者工具注意这一点。
2. 仔细安排动画：想象一下你正在执行你动画中的一个，然后你执行另外一个；这个需要大量的预计算。这会打断正在运行的动画，这是糟糕的。关键是确保你的预计算在用户响应的空闲时间执行，这样两个动画就不会冲突了。
3. 使用 transform 和 scale 时，元素会被扭曲；虽然可以重构标签避免扭曲，但最终他们会相互影响。

## 总结

flip 是一个如何做动画的思考方式，它是使 css 和 js 非常好的配合。使用 js 做计算，使用 css 做动画。使用 css 做动画不是一定的，你也可以使用 Web Animations API 或者单单 JavaScript。关键是你要减少每一帧的复杂度（推荐使用 transform 和 opacity）。

## 参考

[https://segmentfault.com/a/1190000008907850](https://segmentfault.com/a/1190000008907850)

[https://aerotwist.com/blog/flip-your-animations/](https://aerotwist.com/blog/flip-your-animations/)

## 补充

[https://blog.csdn.net/suzichenaa/article/details/78962374](https://blog.csdn.net/suzichenaa/article/details/78962374)
[https://www.w3cplus.com/animation/additive-animation-web-animations-api.html](https://www.w3cplus.com/animation/additive-animation-web-animations-api.html)
