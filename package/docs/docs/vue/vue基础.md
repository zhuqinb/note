# vue基础

## 实例
当一个Vue实例被创建时，只有实例被创建时data中存在的属性加入到Vue的响应式系统中。当这些属性的值发生改变时，视图将会产生‘响应’，即匹配更新为新的值
```js
let data = {a: 1}
let vm = new Vue({
	el: 'container',
	data
})
vm.a = 2
data.a //2

//但是实例创建完后面的属性不会加入到响应式
vm.b = 22
data.b // undefined

//使用Object.freeze()
Object.freeze(data)
vm.a = 3
data.a // 2
```

当使用Object.freeze(),这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。

### 不要在选项属性或回调上使用箭头函数
例如：
```js
create: () => {}
vm.$warth('a', newValue => this.myMethod())
```

## 模板语法
Vue.js使用了基于HTML的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。


#### 文本
一次性插值，当数据改变时，插值处的内容不会更新
```vue
<span v-once>这个值将不会改变{{msg}}</span>
```
#### 原始HTML
```vue
<p v-html="rawHtml"></p>
<script>
export default = {
	data: {
		return{
			rawHtml: '<span>this should be red</span>'	
		}
	}
}
</script>
```
这样会忽略解析属性值中的数据绑定，不能使用v-html来复合局部模板

:::warning
你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。
:::
#### js表达式
:::warning
模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如Math和Date。不应该在模板表达式中视图访问用户定义的全局变量
:::

#### 动态参数 2.6.0
```vue 
<!-- 转换为v-bind:[attributename] -->
<a v-bind:[attributeName]='url'>...</a>
```
这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用

**约束**
异常情况下为null，这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
:::warning
动态参数表达式有一些语法约束，因为某些字符，例如空格和引号，放在 HTML 特性名里是无效的。同样，在 DOM 中使用模板时你需要回避大写键名。
:::

```vue
<!-- 这会触发一个编译警告 代码是无效的 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

## 计算属性 方法 侦听属性

计算属性：是基于他们的响应式依赖进行缓存的，只有相关响应式发生改变时他们才会重新求值;计算属性中依赖的响应式属性只要一个发生改变，就会触发重新计算

使用方法: 每次触发重新渲染时，调用方法将总会再次执行函数。

侦听属性: 相比计算属性每次只能侦听一个属性的变化;当需要在数据变化时执行异步或开销较大的操作时，使用侦听器是很适合的

```js
// 计算属性和侦听属性
...
// 计算属性
{
	data: {
		return {
			firstName: 'hello',
			lastName: 'world'
		}
	},
	computed: {
		fullName() {
			return this.firstName + '' + this.lastName
		}
	}
}
// 侦听属性
{
	data: {
		return {
			firstName: 'hello',
			lastName: 'world',
			fullName: 'hello world'
		}
	},
	watch: {
		firstName(val) {
			this.fullName = val + '' + this.lastName
		},
		lastName(val) {
			this.fullName = this.firstName + '' + val
		}
	}
}
...
```

### 计算属性的setter
```js
computed: {
	fullName: {
		// getter
		get() {
			return this.firstName + ' ' + this.lastName
		},
		// setter
		set(newValue) {
			let names = newValue.split(' ')
			this.firstName = names[0]
			this.lastName = names[name.length-1]
		}
	}
}
```
计算属性默认只有getter

作用： 当给fullName赋新值的时候，setter就会被调用，这时firstName，lastName也会相应地被更新

## Class与Style绑定

绑定HTML Class

### 对象语法
```html
<!-- 第一种 -->
<div :class="{active: isActive, 'text-danger': hasError}"> </div>

<!-- 第二种 -->
<div :class="classObject"></div>
```
```js
...
data: {
	classObject: {active: true, text-danger: true}
}
// 或者
computed: {
	classObject() {
		return {
			active: this.isActive
		}
	}
}
```

### 数组语法
```html
<div :class="[activeClass, errorClass]"></div>
```

```js
data: {
	activeClass: 'active',
	errorClass: 'text-danger'
}
```
需要切换class,可以使用三元表达式
```html
<div :class=[isActive ? activeClass: '']></div>
<!-- 或者 -->
<div :class="[{active: isActive}]"></div>
```

### 用在组件上
```js
Vue.component('my-component', {
	template: '<p class="foo bar"></p>'
})
```
```html
<my-component class="baz boo" :class="{active: true}"></my-component>
```
渲染结果
```html
<p class="foo bar baz boo active"></p>
```

绑定内联样式

同样可以使用对象和计算属性和数组语法
支持自动加前缀
```html
<div :style="{color: active}"></div>
```

### 多重值 2.3.0+
可以根据浏览器的支持自动选择
```html
<div :style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}"></div>
```

## 条件渲染

### v-if v-else v-else-if
```html
<div v-if="Math.random() > 0.5">result1</div>
<div v-else-if="Math.random() < 0.5">result2</div>
<div v-else>result3</div>

<!-- 也可以在template元素上进行渲染分组 -->
<template v-if="ok">template1</template>
<template v-else>template2</template>
```

v-else和v-else-if必须紧跟在v-if或者v-else-if的后面，否则它将不会被识别。

### 用key管理可服用的元素
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这样做的好处可以使Vue变得非常快，另外如果使用相同的元素，在切换时，不会替换用户输入的内容

如果每次切换时，元素都需要重新切换，加上key就可以了

```html
<template v-if="qq">
	<label>qq</label>
	<input type="text" key='qq' />
</template>
<template v-else-if="weixin">
	<label>weixin</label>
	<input type="text" key="weixin" />
</template>
```
但是此时的label元素仍会高效服用，因为没有添加key属性

### v-show

v-show只是简单的切换css属性display,并且不支持template和v-else

### v-if和v-show比较
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

### v-if与v-for一起使用

:::danger
一起使用时，v-for具有比v-if更高的优先级，但是不推荐同时使用v-if和v-for
:::

## 列表循环

### v-for循环

vue 里面v-for循环可以用在数组和对象上,在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。

你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法
```html
<!-- 当数据是数组时，v-for支持两个参数(元素, 索引) -->
<ul>
	<li v-for="(item, index) in items" :key="index">{{item.message}}</li>
</ul>

<!-- 当数据是对象时，v-for支持三个参数(值,键,索引) -->
<ul>
	<li v-for="(value, key, index) in items" :key="index">{{item.message}}</li>
</ul>
```

### 维护状态
当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 track-by="$index"。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性

建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 Vue 识别节点的一个通用机制，key 并不仅与 v-for 特别关联。后面我们将在指南中看到，它还具有其它用途。

:::danger
不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
:::

### 数组更新检测

#### 变异方法
Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：push, pop, shift, unshift, splice, sort, reverse

#### 替换数组
数组的方法执行时，不会该改变原数组，而返回一个新数组

```js
example.items = example.items.filter(item => item.message.match(/Foo/))
```
你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

#### 注意事项
由于 JavaScript 的限制，Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
2. 当你修改数组的长度时，例如：vm.items.length = newLength

```js
let vm = new Vue({
	data: {
		items: ['a', 'b', 'c']
	}
})
vm.items[1] = 'x' // 不是响应式的
vm.items.length = 2 //不是响应式的
```

解决方式

第一类问题
```js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// 或者 Vue的实例方法，该方法是全局方法Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

第二类问题
```js
vm.items.splice(newLength)
```

#### 对象变更检测注意事项
还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：

```js
let vm = new Vue({
	data: {
		a: 1
	}
})
// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 不是响应式的
```

对于已经创建的实例，Vue不允许动态添加根级别的响应式属性。但是，可以使用Vue.set(object, propertyName, value)方法向嵌套对象添加响应式属性。例如

```js
let vm = new Vue({
	data: {
		userProfile: {
			name: 'Anika'
		}
	}
})

Vue.set(vm.userProfile, 'age', 28)

// 或者 vm.$set实例方法，它只是全局Vue.set的别名
vm.$set(vm.userProfile, 'age', 28)
```
有时你可能需要为已有对象赋值多个新属性，比如使用 Object.assign() 或 `_.extend()`。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性:
```js
// 不要这样做
Object.assign(vm.userProfile, {
	age: 27,
	favoriteColor: 'Vue Green'
})
// 应该这样做
vm.userProfile = Object.assign({}, vm.userProfile, {
	age: 27,
	favoriteColor: 'Vue Green'
})
```

#### 显示过滤、排序后的结果

有时需要对一个数组进行过滤或排序后渲染，而不修改实际数据，可以使用一个计算属性或方法，来返回过滤或排序号的数组

```html
<li v-for="n in evenNumbers">{{ n }}</li>
```

```js
data: {
	numbers: [1,2,3,4,5,6]
},
computed: {
	evenNumbers() {
		return this.numbers.filter(number => number % 2 === 0)
	}
}
```
或者

```html
<li v-for="n in even(numbers)">{{ n }}</li>
```

```js
method: {
	even(number) {...}
}
```

#### 用在template
类似v-if, v-for也可以用在`<template>`

#### 注意点
因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容，所以这里的 is="todo-item" 属性。这样做实现的效果与 `<todo-item>`相同，但是可以避开一些潜在的浏览器解析错误。这种做法在使用 DOM 模板时是十分必要的

```html
<ul>
	<li is='todo-item'></li>
</ul>
<!-- 想当于 -->
<ul>
	<todo-item />
</ul>
```


## 事件

```html
<!-- 事件的三种写法 -->
<button @click="counter++">Add 1</button>
<button @click="add">Add 1</button>
<button @click="add()">Add 1</button>
```

### 事件修饰符

- .stop 阻止事件传播
- .prevent 阻止默认行为(preventDefault())
- .capture 事件捕获
- .self
- .once
- .passive 2.3.0
- .once 2.1.4 可被定义在组件事件上(与上面不同)

```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop='doThis'></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

:::danger
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
:::

#### passive 
Vue对addEventListener中[passive](./../JavaScript/DOM/addEventListener)选项提供了.passive修饰符

```html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```
这个 .passive 修饰符尤其能够提升移动端的性能。

:::danger
不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
:::

### 按键修饰符

```html
<input v-on:keyup.enter="submit">
<!-- 直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。 -->
<!-- 在 $event.key 等于 PageDown 时被调用 -->
<input v-on:keyup.page-down="onPageDown">
<!-- 也可以直接使用keyCode -->
<input v-on:keyup.13="submit">
```

为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：
- .enter
- .tab
- .delete (捕获“删除”和“退格”键)
- .esc
- .space
- .up
- .down
- .left
- .right

:::warning
有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，这些内置的别名应该是首选。
:::

可以通过全局配置自定义按键修饰符别名:
```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
````

系统修饰符
- .ctrl
- .alt
- .shift
- .meta

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

:::danger
请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。
:::

#### .exact 修饰符 2.5.0

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

#### 鼠标按钮修饰符

- .left
- .right
- .middle

#### 为什么在 HTML 中监听事件?
你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：

扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。

因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。

当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。







<ClientOnly>
  <article-info weather="qing" mood="kaixin1">2019年8月02日 10:55</article-info>
</ClientOnly>
