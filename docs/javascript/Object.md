## Object.values()

ES8 引入了 Object.values()方法，以数组的形式输出所有对象的值，省去我们手动迭代取出每个对象属性的值，示例代码如下：

```js
const obj = {
	book: 'Learning ES2017 (ES8)',
	author: '前端达人',
	publisher: '前端达人',
	useful: true
}
console.log(Object.values(obj))

// ouput: ['Learning ES2017 (ES8)', '前端达人', '前端达人', true]
```

## Object.entries()

Object.entries()可用于将对象转换为键/值对的数组形式。 即一个二维数组，数组的每个元素是一个包含键和值的数组。 示例代码如下：

```js
const obj = {
	book: 'Learning ES2017 (ES8)',
	author: '前端达人',
	publisher: '前端达人',
	useful: true
}
console.log(Object.entries(obj))

// ouput:
// [
//     ['book', 'Learning ES2017 (ES8)'],
//     ['author', '前端达人'],
//     ['publisher', '前端达人'],
//     ['useful', true]
// ]
```

## `__proto__`

proto：是一个对象拥有的内置属性，是 JS 内部使用寻找原型链的属性。可以理解为它是一个指针，用于指向创建它的函数对象的原型对象 prototype（即构造函数的 prototype）。prototype（原型对象）：是函数（Function）的一个属性（每个函数都有一个 prototype），这个对象包含了此函数的所有实例共享的属性和方法，即：原型对象。`__proto__`属性在 ES5 中没有标准化，但由于它的受欢迎程度，它在以后的版本中被标准化了。
我们可以使用 Object.getPrototypeOf()方法返回指定对象的原型（内部[[Prototype]]属性的值，可以使用 Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。

```js
//In ES5
var x = { prop1: 12 }
var y = Object.create(x, { prop2: { value: 13 } })
console.log(y.prop1) //Output "12"
console.log(y.prop2) //Output "13"
console.log(x) // Output: {prop1: 12}
console.log(y) // Output: {prop2: 13}
console.log(y.__proto__) // Output: {prop1: 12}

//In ES6 onwards
let a = { prop1: 12, __proto__: { prop2: 13 } }
console.log(a.prop1) //Output "12"
console.log(a.prop2) //Output "13"
console.log(a) // Output: {prop1: 12}
console.log(a.__proto__) // Output: {prop2: 13}
```

在 ES5 示例中，对象 y 继承对象 x，x 的属性相对于 y 来说是隐藏的，我们可以使用`__proto__`来查找继承自 x 的属性 prop1。ES6 及其后，你可以直接将值添加到对象的原型链中。

## Object.setPrototypeOf()

Object.setPrototypeOf 方法可以为现有对象设置原型，返回一个新对象。Object.setPrototypeOf 方法接受两个参数，第一个是现有对象，第二个是原型对象。Object.setPrototypeOf() 是给对象设置原型，是为了 obj.proto = .... 这种写法更优雅，有更好的兼容性。如下段代码所示：

```js
let x = { x: 12 }
let y = { y: 13 }
Object.setPrototypeOf(y, x)
console.log(y.x) //Output "12"
console.log(y.y) //Output "13”
console.log(y) //Output "{ y: 13 }"
console.log(y.__proto__) //Output "{ x: 12 }"
```

## Object.is()

Object.is()方法用于确定两个值是否相等。它类似于===运算符，但 Object.is()方法有一些特殊情况和使用“===”的结果是不一致的，差异如下：

```js
console.log(Object.is(0, -0)) //false
console.log(0 === -0) //true
console.log(Object.is(NaN, 0 / 0)) //true
console.log(NaN === 0 / 0) //false
console.log(Object.is(NaN, NaN)) //true
console.log(NaN === NaN) //false
```

## Object.assign()

Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象。如下段代码所示：

```js
let x = { x: 12 }
let y = { y: 13, __proto__: x }
let z = {
	z: 14,
	get b() {
		return 2
	},
	q: {}
}
Object.defineProperty(z, 'z', { enumerable: false })
let m = {}
Object.assign(m, y, z)
console.log(m.y) //13
console.log(m.z) //undefined
console.log(m.b) //2
console.log(m.x) //undefined
console.log(m.q == z.q) //true
```

从上述代码输出，我们可以得出 Object.assign()方法的一些特征：

-   该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。
-   它只是将源的属性值分配给目标的新属性或现有属性。
-   它不会复制来源的[[prototype]]属性。
-   JavaScript 属性名称可以是字符串或 symbol。Object.assign()这两种都支持。
-   Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
-   如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将覆盖早先的属性。
-   为了将属性定义（包括其可枚举性）复制到原型，应使用 Object.getOwnPropertyDescriptor()和 Object.defineProperty() 。
-   Object.assign 不会跳过那些值为[null]或[undefined]的源对象。

## Object.getOwnPropertyDescriptors()

在 ES8 中 JS 引入 Object.getOwnPropertyDescriptors()方法将返回给定对象的所有属性描述

```js
const details = {
	get food1() {
		return 'tasty'
	},
	get food2() {
		return 'bad'
	}
}
console.log(Object.getOwnPropertyDescriptors(details))
/**  输出
{ food1:
   { get: [Function: get food1],
     set: undefined,
     enumerable: true,
     configurable: true },
  food2:
   { get: [Function: get food2],
     set: undefined,
     enumerable: true,
     configurable: true } }
*/
```

这个方法还会用在对象的克隆上，示例代码如下：

```js
const x = { foo: 1, __proto__: { bar: 2 } }
const y = Object.create(Object.getPrototypeOf(x), Object.getOwnPropertyDescriptors(x))
console.log(y.__proto__) // { bar: 2 }
```
