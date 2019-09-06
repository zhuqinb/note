## 获取 style 样式

```js
export const getStyle = (element, attr, NumberMode = 'int') => {
	let target
	// scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
	if (attr === 'scrollTop') {
		target = element.scrollTop
	} else if (element.currentStyle) {
		target = element.currentStyle[attr]
	} else {
		target = document.defaultView.getComputedStyle(element, null)[attr]
	}
	//在获取 opactiy 时需要获取小数 parseFloat
	return NumberMode == 'float' ? parseFloat(target) : parseInt(target)
}
```

注意： document.defaultView 获取 document 所在的上下文（及 window 对象） 这个是正对 ff iframe(3.6)的写法; defaultVivew 只读属性
