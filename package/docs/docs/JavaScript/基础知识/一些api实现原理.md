# 一些api实现原理

## 实现call函数

```js
/**
 * [mycall description] 将要改变this只想的方向挂到目标this上执行并返回
 * @param  {object} context 执行函数时需要改变的this值
 * @return {any}         目标函数的返回值
 */
Function.prototype.mycall = function(context) {
	if(typeof this !== 'function'){
		throw new TypeError('not function')
	}
	context = context || window
	context.fn = this
	let arg = [...arguments].slice(1)
	let result = context.fn(...arg)
	delete context.fn
	return result
}
```

## 实现apply函数
```js
/**
 * [mycall description] 将要改变this只想的方向挂到目标this上执行并返回
 * @param  {object} context 执行函数时需要改变的this值
 * @return {any}         目标函数的返回值
 */
Function.prototype.myapply = function(context) {
	if(typeof this !== 'function'){
		throw new TypeError('not function')
	}
	context = context || window
	context.fn = this
	let result
	lf(arguments[1]){
		result = context.fn(...arguments[1])
	}else{
		result = context.fn()
	}
	delete context.fn
	return result
}
```

## 实现一个bind函数
```js
Function.prototype.mybind = function(context) {
	context = context || window
	let _this = this
	let args = [...arguments].slice(1)
	return function F() {
		if(this instanceof F) {
			return new _this(...args)
		}
		return _this.apply(context, args)
	}
}
```

## instanceof的原理
```js
/**
 * 就是判断对象的隐式原型是否等于类的显示原型
 * @param  {object} left  需要判断的类型
 * @param  {class}  right 类
 * @return {boolean}
 */
function instanceof(left, right){
	let leftP = left.__proto__
	let rightO = right.prototype

	while(true) {
		if(leftP === null){
			return false
		}
		if(leftP === rightO){
			return true
		}
		leftP = leftP.__proto__
	}
}
```

## Object.create的基本实现原理
```js
/**
 * 模拟Object.create实现
 * @param  {object} obj 原型对象
 * @return {object}     具有目标原型的对象
 */
Object.myCreate(obj){
	function F(){}
	F.prototype = obj
	return new F()
}
```

## new本质
```js
function myNew(fun){
	let obj = {
		__proto__: fun.prototype
	}

	fun.apply(obj, [].slice.call(arguments, 1))
	return obj
}

// 或者
function myNew(fun){
	let obj = Object.create(fun)
	fun.call(obj, [].slice.call(arguments, 1))
	return obj
}
```

## 基本的深拷贝
```js
function deepCopy(obj){
	let copy = {}
	for(let i in obj){
		if(typeof obj[i] === 'object' && obj[i] !== null){
			copy[i] = obj instanceof Array ? [] : {}
			deepCopy(copy[i])
		}else {
			copy[i] = obj[i]
		}
	}
	return copy
}
```