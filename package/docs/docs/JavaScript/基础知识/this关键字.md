# this 关键字

this 针对于函数

es5 this 指的是函数运行时所在的环境。

es6 箭头的 this 静态的指向当前作用域所在的对象，如果当前作用域的 this 不确定，此箭头函数也不确定

## 作为纯函数调用(包括回调函数)

纯函数调用，属于全局性调用，因此 this 就代表全局对象

```js
var a = 1
function say() {
	console.log(this.a)
}
say() //1
```

## 作为对象方法的调用

作为某个对象的方法调用，这是 this 指向调用这个方法的对象，遵循就近原则

```js
var obj = {
	a: 1,
	say() {
		console.log(this.a)
	}
}
obj.say() //1
```

常用的比如： 常规对象、原型链、getter、setter

```js
var obj = {
	b: 12
}
Object.defineProperty(obj, 'a', {
	get() {
		return this.b
	}
})

var newObj = Object.setPrototypeOf({ b: 21 }, obj)
newObj.a //21
```

## 作为构造函数调用

作为构造函数时，this 指向新的实例

```js
function Parent() {
	this.a = 1
}

var parent = new Parent()
parent.a //1
```

## 作为 DOM 事件监听调用

### 针对 addEventListener

```js
document.body.addEventListener('click', function() {
	console.log(this) // 指向body节点对象
})
```

### 针对内联事件

内联事件中的 this 指向分两种情况：

1. 当代码被内联处理函数调用时，它的 this 指向监听器所在的 DOM 元素
1. 当代码被包括在函数内部执行时，其 this 指向等同于匿名函数直接调用的情况，即在非严格模式指向全局对象 window， 在严格模式指向 undefined

```html
<button onclick="console.log(this)">点击我</button>
<button onclick="(function() {console.log(this)})()">点击我</button>
<button onclick="(function( {'use strict;console.log(this)'}))()">
	点击我
</button>
```

这三个按钮以此点击

```js
<button onclick="console.log(this)">点击我</button>

window 对象

undefined
```

## apply、call、bind 调用

这三个函数的第一个参数就是改变调用这个函数的对象，因此这个函数的 this 指向第一个参数

## 作为箭头函数调用

由于箭头函数不绑定 this， 它会捕获其所在（即定义的位置）上下文的 this 值， 作为自己的 this 值，

-   所以 call() / apply() / bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响。
-   考虑到 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略。（可以忽略是否在严格模式下的影响）
-   如果当前作用域的 this 不确定，此箭头函数也不确定

```js
var obj = {
	a: 12,
	b: function() {
		;(() => {
			console.log(this.a)
		})()
	}
}
obj.b() //12

a = 22
obj.b.call() //22
```

---

参考

[https://www.cnblogs.com/dongcanliang/p/7054176.html](https://www.cnblogs.com/dongcanliang/p/7054176.html)
[http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

---

<ClientOnly>
  <article-info weather="qing" mood="shoushang">2019年7月04日 0:28</article-info>
</ClientOnly>
