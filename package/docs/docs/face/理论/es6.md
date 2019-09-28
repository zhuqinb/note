# es6 总结

## 模块化

es6 之前,社区对于模块化解决方式主要是 CommonJS 和 AMD,而 es6 在语言层面实现了模块化功能,完全可以取代 CommonJS 和 AMD 规范,成为浏览器和服务器通用的模块解决方案

### es6 模块还有以下好处.

1. 不在需要 UMD 模块化格式
2. 将来浏览器新的 api 就能用模块格式提供,不必做成全局或 `navigator` 对象
3. 不在需要对象作为命名空间(比如 Math 对象)

CommonJS 和 AMD 只能在运行时确定这些东西

### es6 模块化特点

1. 静态导入(只加载需要导入的模块,其他的不加载),或者称为 编译时加载
2. 单利模式
3. 变量提升
4. 自动严格模式
5. export 与对应的值是动态绑定,可以取到模块内部实时的值
6. 不要放到块级作用域下(会提示错误),也不要使用表达式
7. 导出的值是只读的;但是导出的对象还是引用类型,所以还是可以修改,但是不建议这么做
8. 模块整体加载(`*`)指定的对象,不能修改这个对象

### export 与 import 复合写法

```js
export { foo, bar } from 'my_module'
```

### import() 提案

如果 import 命令取代 require 方法,就会形成一个障碍,因为 require 是运行时加载,import 不能取代 require 的动态加载功能,所以加入了 `import(moduleUrl)`

import 返回一个 promise, 并且值可以进行解构

1. import()可以用在任何地方,不仅仅是模块,非模块脚本也是可以,是运行时执行.
2. import()函数与所加载的模块没有静态连接关系,这点也是与 import 语法不相同.
3. import()类似 Node 的 require 方法,区别主要是前者是异步加载,后者是同步加载.

### 模块在浏览器中的加载

默认情况下,浏览器是同步加载 js 脚本,即渲染引擎遇到 script 标签就会停下来,等到执行完脚本,再继续向下渲染.如果是外部脚本,还必须加入脚本下载的时间

如果脚本体积很大,容易造成不好的体验

`defer` 和 `async` 区别: 前者页面渲染完在执行;后者下载完就执行

浏览器加载 es6 模块

```html
<script type="module" src="./foo.js"></script>
```

加载 es6 模块会默认打开 defer 属性;也可以手动将 async 属性打开

### commonJS 模块化特点

1. 动态导入
2. 值缓存, 不存在动态更新
3. 模块输出的是一个值的拷贝
4. 模块是运行时加载

### require 重复引入问题

模块化被加载一次之后,就会在缓存中维持一个副本,如果遇到重复加载的模块会直接提取缓存中的副本,也就是说在任何时候每个模块都只在缓存中有一个实例.

但是这种缓存是经过文件路径定位的;即使两个完全相同的文件,但是位于不同的路径,会在缓存中维持两份

### require 加载模块时是同步的

node 在 require 的时候回自动缓存已经加载的模块,再加上都是本地文件,产生的 io 开销几乎可以忽略

### exports 与 module.exports 区别

在一个 node 执行一个文件时，会给这个文件内生成一个 exports 和 module 对象， 而 module 又有一个 exports 属性。他们之间的关系如下图，都指向一块{}内存区域。

```js
exports = module.exports = {}
```

用一张图表示其关系就是

<img :src="$withBase('/images/face/es6-01.webp')" alt="foo">

### 代码说明

```js
// koala.js
let a = '程序员成长指北'
console.log(module.exports, exports) // {} {}
exports.a = '程序员成长指南'
exports = '指向其他内存区'

// test.js
const a = require('/koala')
console.log(a) // {a: '程序员成长指南'}
```

看上面代码的打印结果，应该能得到这样的结论：

require 导出的是内容 module.exports 指向的内存块内容,并不是 exports 的.简而言之，区分他们之间的区别就是 exports 只是 module.exports 的引用，辅助后者添加内容用的。用内存指向的方式更好理解。

### 常见写法:

```js
exports = module.exports = somethings

// 等价于
module.exports = somethings
exports = module.exports
```

原理很简单，即 module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports 即可。

[参考](https://juejin.im/post/5d5639c7e51d453b5c1218b4?utm_source=gold_browser_extension)
