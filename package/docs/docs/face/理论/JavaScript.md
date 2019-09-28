## 闭包

## 伪类和伪元素的区别

伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。下面分别对伪类和伪元素进行解释：

伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。

伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

### 区别

伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树外的元素。因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。

CSS3规范中的要求使用双冒号(::)表示伪元素，以此来区分伪元素和伪类，比如::before和::after等伪元素使用双冒号(::)，:hover和:active等伪类使用单冒号(:)。除了一些低于IE8版本的浏览器外，大部分浏览器都支持伪元素的双冒号(::)表示方法。


## 作用域链

了解作用域之前我们要知道一下几个概念：
函数的生命周期
变量和函数的声明
Activetion Object(AO)、 Variable Object(VO)

函数的生命周期：

创建： JS 解析引擎进行预解析，会将函数声明提前，同时将该函数放到全局作用域中或当前函数的上一级函数的局部作用域中。

执行： JS 引擎会将当前函数的局部变量的内部函数进行声明提前，然后再执行业务代码，当函数执行完退出时，释放该函数的执行上下文，并注销该函数的局部变量。

变量和函数的声明： 如果变量名和函数名声明时相同，函数优先声明。

Activetion Object(AO)、 Variable Object(VO)

-   AO: Activetion Object(活动对象)
-   VO：Variable Object(变量对象)

VO 对应的是函数创建阶段，JS 解析引擎进行预编译时，所有的变量和函数的声明，统称为 Variable Object。该变量与执行上下文相关，知道自己的数据存储在哪里，并且知道如何访问。VO 是一个与执行上下文相关的特殊对象，它存储着在上下文声明的以下内容：

-   变量(var,变量声明)
-   函数声明(FunctionDeclaration, 缩写为 FD)
-   函数的形参

AO对应的是函数执行阶段，当函数被调用执行时，会建立一个函数上下文，该执行上下文包含了函数所需的所有变量，该变量共同组成了一个新的对象就是Activetion Object。该对象包含了： 

- 函数的所有局部变量
- 函数的所有命名参数
- 函数的参数集合
- 函数的this指向

作用域链： 
当代码在一个环境中创建时，会创建变量对象的一个作用域链（scope chain）来保证对执行环境有权访问的变量和函数。作用域第一个对象始终是当前执行代码所在环境的变量对象（VO）。如果是函数执行阶段，那么将其activation object（AO）作为作用域链第一个对象，第二个对象是上级函数的执行上下文AO，下一个对象依次类推

在《JavaScript深入之变量对象》中讲到，当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## 避免触发回流和重绘

### 浏览器渲染过程

<img :src="$withBase('/images/face/JavaScript/01')" alt="foo">

- 浏览器使用流式布局模型 (Flow Based Layout)
- 浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree
- 有了RenderTree就能知道所有节点的样式，计算节点在页面上的大小和位置，把节点绘制到页面上
- 由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，通常需要多次计算且要花费3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一

浏览器渲染过程如下：

- 解析HTML，生成DOM树
- 解析CSS，生成CSSOM树
- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
- Layout(回流)：根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
- Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display：将像素发送给GPU，展示在页面上。（这一步其实还有很多内容，比如会在GPU将多个合成层合并为同一个层，并展示在页面中。而css3硬件加速的原理则是新建合成层，这里我们不展开，之后有机会会写一篇博客）

### 何时触发回流和重绘

#### 何时发生回流：

- 添加或删除可见的DOM元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
- 页面一开始渲染的时候（这肯定避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

#### 何时发生重绘（回流一定会触发重绘）：

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。现代浏览器会对频繁的回流或重绘操作进行优化，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。你访问以下属性或方法时，浏览器会立刻清空队列：

- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- width、height
- getComputedStyle()
- getBoundingClientRect()

以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，**最好避免使用上面列出的属性，他们都会刷新渲染队列。**如果要使用它们，最好将值缓存起来。


### 如何避免触发回流和重绘
CSS：

- 避免使用table布局。
- 尽可能在DOM树的最末端改变class。
- 避免设置多层内联样式。
- 将动画效果应用到position属性为absolute或fixed的元素上
- 避免使用CSS表达式（例如：calc()）
- CSS3硬件加速（GPU加速）

JavaScript：

- 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性
- 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中
- 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流



## CPU、进程、线程之间的关系

-   进程是 cpu 资源分配的最小单位（是能拥有资源和独立运行的最小单位）
-   线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）
-   不同进程之间也可以通信，不过代价较大
-   单线程与多线程，都是指在一个进程内的单和多

对于浏览器

-   浏览器是多进程的
-   每一个 Tab 页，就是一个独立的进程

## 浏览器包含了哪些进程

-   主进程

    -   协调控制其他子进程（创建、销毁）
    -   浏览器界面显示，用户交互，前进、后退、收藏
    -   将渲染进程得到的内存中的 Bitmap，绘制到用户界面上
    -   处理不可见操作，网络请求，文件访问等

-   第三方插件进程

    -   每种类型的插件对应一个进程，仅当使用该插件时才创建

-   GPU 进程

    -   用于 3D 绘制等

-   渲染进程，就是我们说的浏览器内核

    -   负责页面渲染，脚本执行，事件处理等
    -   每个 tab 页一个渲染进程

对于前端操作最重要的是渲染进程,也就是浏览器内核

## 浏览器内核（渲染进程）

对于渲染进程来说，它是多线程的

-   GUI 渲染线程

    -   负责渲染页面，布局和绘制
    -   页面需要重绘和回流时，该线程就会执行
    -   与 js 引擎线程互斥，防止渲染结果不可预期

*   JS 引擎线程

    -   负责处理解析和执行 javascript 脚本程序
    -   只有一个 JS 引擎线程（单线程）
    -   与 GUI 渲染线程互斥，防止渲染结果不可预期

-   事件触发线程

    -   用来控制事件循环（鼠标点击、setTimeout、ajax 等）
    -   当事件满足触发条件时，将事件放入到 JS 引擎所在的执行队列中

*   定时触发器线程

    -   setInterval 与 setTimeout 所在的线程
    -   定时任务并不是由 JS 引擎计时的，是由定时触发线程来计时的
    -   计时完毕后，通知事件触发线程

异步 http 请求线程

    - 浏览器有一个单独的线程用于处理AJAX请求
    - 当请求完成时，若有回调函数，通知事件触发线程

## event loop

### 回答一：

首先，js 是单线程的，主要的任务是处理用户的交互，而用户的交互无非就是响应 DOM 的增删改，使用事件队列的形式，一次事件循环只处理一个事件响应，使得脚本执行相对连续，所以有了事件队列，用来储存待执行的事件，那么事件队列的事件从哪里被 push 进来的呢。那就是另外一个线程叫事件触发线程做的事情了，他的作用主要是在定时触发器线程、异步 HTTP 请求线程满足特定条件下的回调函数 push 到事件队列中，等待 js 引擎空闲的时候去执行，当然 js 引擎执行过程中有优先级之分，首先 js 引擎在一次事件循环中，会先执行 js 线程的主任务，然后会去查找是否有微任务 microtask（promise），如果有那就优先执行微任务，如果没有，在去查找宏任务 macrotask（setTimeout、setInterval）进行执行。

### 回答二：
事件触发线程管理的任务队列是如何产生的呢？事实上这些任务就是从JS引擎线程本身产生的，主线程在运行时会产生执行栈，栈中的代码调用某些异步API时会在任务队列中添加事件，栈中的代码执行完毕后，就会读取任务队列中的事件，去执行事件对应的回调函数，如此循环往复，形成事件循环机制。JS中有两种任务类型：微任务（microtask）和宏任务（macrotask），在ES6中，microtask称为 jobs，macrotask称为 task：

- 宏任务： script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering
- 微任务：process.nextTick（Nodejs） 、Promise 、Object.observe 、MutationObserver

Node.js中Event Loop和浏览器中Event Loop有什么区别

```js
   ┌───────────────────────┐
┌─>│        timers         │<————— 执行 setTimeout()、setInterval() 的回调
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     pending callbacks │<————— 执行由上一个 Tick 延迟下来的 I/O 回调（待完善，可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     idle, prepare     │<————— 内部调用（可忽略）
│  └──────────┬────────────┘     
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|             |                   ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │ - (执行几乎所有的回调，除了 close callbacks、timers、setImmediate)
│  │         poll          │<─────┤  connections, │ 
│  └──────────┬────────────┘      │   data, etc.  │ 
│             |                   |               | 
|             |                   └───────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|  ┌──────────┴────────────┐      
│  │        check          │<————— setImmediate() 的回调将会在这个阶段执行
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
└──┤    close callbacks    │<————— socket.on('close', ...)
   └───────────────────────┘
```
Node.js中宏任务分成了几种类型，并且放在了不同的task queue里。不同的task queue在执行顺序上也有区别，微任务放在了每个task queue的末尾：

- setTimeout/setInterval 属于 timers 类型；
- setImmediate 属于 check 类型；
- socket 的 close 事件属于 close callbacks 类型；
- 其他 MacroTask 都属于 poll 类型。
- process.nextTick 本质上属于 MicroTask，但是它先于所有其他 MicroTask 执行；
- 所有 MicroTask 的执行时机在不同类型的 MacroTask 切换后。
- idle/prepare 仅供内部调用，我们可以忽略。
- pending callbacks 不太常见，我们也可以忽略。

## webpack 优化

[插件列表](https://link.juejin.im/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000016816813)

### 构建优化

1、减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime。

2、并行编译 happypack、thread-loader、uglifyjsWebpackPlugin 开启并行

3、缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin 开启缓存、babel-loader 开启缓存

4、预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin

### 性能优化

1、减少编译体积 Tree-shaking、Scope Hositing。

2、hash 缓存 webpack-md5-plugin

3、拆包 splitChunksPlugin、import()、require.ensure

## es6 class 和 es5 类区别

## 从输入 URL 到看到页面发生的全过程，越详细越好。

1. 首先浏览器主进程接管，开了一个下载线程。
2. 然后进行 HTTP 请求（DNS 查询、IP 寻址等等），中间会有三次捂手，等待响应，开始下载响应报文。
3. 将下载完的内容转交给 Renderer 进程管理。
4. Renderer 进程开始解析 css rule tree 和 dom tree，这两个过程是并行的，所以一般我会把 link 标签放在页面顶部。
5. 解析绘制过程中，当浏览器遇到 link 标签或者 script、img 等标签，浏览器会去下载这些内容，遇到时候缓存的使用缓存，不适用缓存的重新下载资源。
6. css rule tree 和 dom tree 生成完了之后，开始合成 render tree，这个时候浏览器会进行 layout，开始计算每一个节点的位置，然后进行绘制。
7. 绘制结束后，关闭 TCP 连接，过程有四次挥手。

## CSS 和 JS 的位置会影响页面效率，为什么?

css 在加载过程中不会影响到 DOM 树的生成，但是会影响到 Render 树的生成，进而影响到 layout，所以一般来说，style 的 link 标签需要尽量放在 head 里面，因为在解析 DOM 树的时候是自上而下的，而 css 样式又是通过异步加载的，这样的话，解析 DOM 树下的 body 节点和加载 css 样式能尽可能的并行，加快 Render 树的生成的速度。

js 脚本应该放在底部，原因在于 js 线程与 GUI 渲染线程是互斥的关系，如果 js 放在首部，当下载执行 js 的时候，会影响渲染行程绘制页面，js 的作用主要是处理交互，而交互必须得先让页面呈现才能进行，所以为了保证用户体验，尽量让页面先绘制出来。

## 继承

## 浏览器的缓存机制

缓存分为强缓存和协商缓存。强缓存不过服务器，协商缓存需要过服务器，协商缓存返回的状态码是 304。两类缓存机制可以同时存在，强缓存的优先级高于协商缓存。当执行强缓存时，如若缓存命中，则直接使用缓存数据库中的数据，不再进行缓存协商。

### 强缓存

Expires(HTTP1.0)：Exprires 的值为服务端返回的数据到期时间。当再次请求时的请求时间小于返回的此时间，则直接使用缓存数据。但由于服务端时间和客户端时间可能有误差，这也将导致缓存命中的误差。另一方面，Expires 是 HTTP1.0 的产物，故现在大多数使用 Cache-Control 替代。

缺点：使用的是绝对时间，如果服务端和客户端的时间产生偏差，那么会导致命中缓存产生偏差。

Pragma(HTTP1.0)：HTTP1.0 时的遗留字段，当值为"no-cache"时强制验证缓存，Pragma 禁用缓存，如果又给 Expires 定义一个还未到期的时间，那么 Pragma 字段的优先级会更高。服务端响应添加'Pragma': 'no-cache'，浏览器表现行为和刷新(F5)类似。

Cache-Control(HTTP1.1)：有很多属性，不同的属性代表的意义也不同：

-   private：客户端可以缓存
-   public：客户端和代理服务器都可以缓存
-   max-age=t：缓存内容将在 t 秒后失效
-   no-cache：需要使用协商缓存来验证缓存数据
-   no-store：所有内容都不会缓存

请注意 no-cache 指令很多人误以为是不缓存，这是不准确的，no-cache 的意思是可以缓存，但每次用应该去想服务器验证缓存是否可用。no-store 才是不缓存内容。当在首部字段 Cache-Control 有指定 max-age 指令时，比起首部字段 Expires，会优先处理 max-age 指令。命中强缓存的表现形式：Firefox 浏览器表现为一个灰色的 200 状态码。Chrome 浏览器状态码表现为 200 (from disk cache)或是 200 OK (from memory cache)。

### 协商缓存

协商缓存需要进行对比判断是否可以使用缓存。浏览器第一次请求数据时，服务器会将缓存标识与数据一起响应给客户端，客户端将它们备份至缓存中。再次请求时，客户端会将缓存中的标识发送给服务器，服务器根据此标识判断。若未失效，返回 304 状态码，浏览器拿到此状态码就可以直接使用缓存数据了。

Last-Modified：服务器在响应请求时，会告诉浏览器资源的最后修改时间。

if-Modified-Since：浏览器再次请求服务器的时候，请求头会包含此字段，后面跟着在缓存中获得的最后修改时间。服务端收到此请求头发现有 if-Modified-Since，则与被请求资源的最后修改时间进行对比，如果一致则返回 304 和响应报文头，浏览器只需要从缓存中获取信息即可。

-   如果真的被修改：那么开始传输响应一个整体，服务器返回：200 OK
-   如果没有被修改：那么只需传输响应 header，服务器返回：304 Not Modified

if-Unmodified-Since: 从某个时间点算起, 是否文件没有被修改，使用的是相对时间，不需要关心客户端和服务端的时间偏差。

-   如果没有被修改：则开始`继续'传送文件，服务器返回: 200 OK
-   如果文件被修改：则不传输，服务器返回: 412 Precondition failed (预处理错误)

这两个的区别是一个是修改了才下载一个是没修改才下载。如果在服务器上，一个资源被修改了，但其实际内容根本没发生改变，会因为 Last-Modified 时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。为了解决这个问题，HTTP1.1 推出了 Etag。

Etag：服务器响应请求时，通过此字段告诉浏览器当前资源在服务器生成的唯一标识（生成规则由服务器决定）

If-Match：条件请求，携带上一次请求中资源的 ETag，服务器根据这个字段判断文件是否有新的修改

If-None-Match： 再次请求服务器时，浏览器的请求报文头部会包含此字段，后面的值为在缓存中获取的标识。服务器接收到次报文后发现 If-None-Match 则与被请求资源的唯一标识进行对比。

-   不同，说明资源被改动过，则响应整个资源内容，返回状态码 200。
-   相同，说明资源无心修改，则响应 header，浏览器直接从缓存中获取数据信息。返回状态码 304.

但是实际应用中由于 Etag 的计算是使用算法来得出的，而算法会占用服务端计算的资源，所有服务端的资源都是宝贵的，所以就很少使用 Etag 了。

-   浏览器地址栏中写入 URL，回车浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿（最快）
-   F5 就是告诉浏览器，别偷懒，好歹去服务器看看这个文件是否有过期了。于是浏览器就胆胆襟襟的发送一个请求带上 If-Modify-since
-   Ctrl+F5 告诉浏览器，你先把你缓存中的这个文件给我删了，然后再去服务器请求个完整的资源文件下来。于是客户端就完成了强行更新的操作

### 缓存场景

对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略

-   对于某些不需要缓存的资源，可以使用 Cache-control: no-store ，表示该资源不需要缓存
-   对于频繁变动的资源，可以使用 Cache-Control: no-cache 并配合 ETag 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新
-   对于代码文件来说，通常使用 Cache-Control: max-age=31536000 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件

### 浏览器缓存机制有两种，一种为强缓存，一种为协商缓存。

对于强缓存，浏览器在第一次请求的时候，会直接下载资源，然后缓存在本地，第二次请求的时候，直接使用缓存。

对于协商缓存，第一次请求缓存且保存缓存标识与时间，重复请求向服务器发送缓存标识和最后缓存时间，服务端进行校验，如果失效则使用缓存。

### 强缓存方案

Exprires：服务端的响应头，第一次请求的时候，告诉客户端，该资源什么时候会过期。Exprires 的缺陷是必须保证服务端时间和客户端时间严格同步。

Cache-control：max-age，表示该资源多少时间后过期，解决了客户端和服务端时间必须同步的问题，

### 协商缓存方案

If-None-Match/ETag：缓存标识，对比缓存时使用它来标识一个缓存，第一次请求的时候，服务端会返回该标识给客户端，客户端在第二次请求的时候会带上该标识与服务端进行对比并返回 If-None-Match 标识是否表示匹配。

Last-modified/If-Modified-Since：第一次请求的时候服务端返回 Last-modified 表明请求的资源上次的修改时间，第二次请求的时候客户端带上请求头 If-Modified-Since，表示资源上次的修改时间，服务端拿到这两个字段进行对比。

## ETag 是这个字符串是怎么生成的？

通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号

## svg 和 canvas 各自的优缺点

### 共同点：都是有效的图形工具，对于数据较小的情况下，都很又高的性能，它们都使用 JavaScript 和 HTML；它们都遵守万维网联合会 (W3C) 标准。

### svg 优点：

矢量图，不依赖于像素，无限放大后不会失真。

以 dom 的形式表示，事件绑定由浏览器直接分发到节点上。

### svg 缺点：

dom 形式，涉及到动画时候需要更新 dom，性能较低。

### canvas 优点：

定制型更强，可以绘制绘制自己想要的东西。
非 dom 结构形式，用 JavaScript 进行绘制，涉及到动画性能较高。

### canvas 缺点：

事件分发由 canvas 处理，绘制的内容的事件需要自己做处理。
依赖于像素，无法高效保真，画布较大时候性能较低。

## 性能优化

浏览器解析->查询缓存->dns 查询->建立链接->服务器处理请求->服务器发送响应->客户端收到页面->解析 HTML->构建渲染树->开始显示内容(白屏时间)->首屏内容加载完成(首屏时间)->用户可交互(DOMContentLoaded)->加载完成(load)

时间监控 performanceTiming,可以获取到很多页面加载相关的数据。 比较常用的有

```js
DNS 解析时间： domainLookupEnd - domainLookupStart
TCP 建立连接时间： connectEnd - connectStart
白屏时间： responseStart - navigationStart
dom 渲染完成时间： domContentLoadedEventEnd - navigationStart
页面 onload 时间： loadEventEnd - navigationStart
```

如果不使用该 API，可以以服务器渲染返回的时间，或是 SPA 路由跳转离开的时间为起点，domContentLoaded，load 等事件为结束点进行记录。或是直接上 google analytics。方法很多，就不细说了。

### 服务器优化要点

后端部分可以对缓存，dns 查询时间，链接时间，处理请求时间，响应时间等进行优化。
缓存就不细说了。
dns 查询时间可以使用 httpdns 或是 dns 预加载，域名收敛等手段优化。我还写了篇介绍 DNS 和 CDN 的文章

建立连接的重点是长连接和链接复用，keep-alive，long-polling，http-straming，websocket 或是自己写过别的协议，更好的是直接上 http2。为了优化链接的环节，前端这里还需要对资源使用 cdn，雪碧图，代码合并等手段。

服务器处理请求这里可以优化的点也不少，值得注意的就是移动端访问 PC 端页面需要跳转到移动端页面时，要再服务器端使用 302 跳转，不要在前端进行跳转。还有就是启用 hsts，要求浏览器在之后的访问使用 https，减少无谓的 http 跳转 https，同时还可以防止 ssl 剥离攻击，提升安全性。

服务器发送响应环节，可以使用 Transfer-Encoding=chunked，多次返回响应，具体操作查询 bigpipe。还有就是减小 cookie 的体积等等。

### 前端部分优化要点

前端部分可以对白屏时间，首屏事件，可交换时间，加载完成时间进行优化。

### 能说说首屏加载优化有哪些方案么

-   Vue-Router 路由懒加载（利用 Webpack 的代码切割）
-   使用 CDN 加速，将通用的库从 vendor 进行抽离
-   Nginx 的 gzip 压缩
-   Vue 异步组件
-   服务端渲染 SSR
-   如果使用了一些 UI 库，采用按需加载
-   Webpack 开启 gzip 压缩
-   如果首屏为登录页，可以做成多入口
-   Service Worker 缓存文件处理
-   使用 link 标签的 rel 属性设置 prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch 通常用于加速下一次导航）、preload（preload 将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）

## 关于跨域

### 跨域行为

-   同源策略限制、安全性考虑
-   协议、IP 和端口不一致都是跨域行为

### JSONP

Web 前端事先定义一个用于获取跨域响应数据的回调函数，并通过没有同源策略限制的 script 标签发起一个请求（将回调函数的名称放到这个请求的 query 参数里），然后服务端返回这个回调函数的执行，并将需要响应的数据放到回调函数的参数里，前端的 script 标签请求到这个执行的回调函数后会立马执行，于是就拿到了执行的响应数据。

缺点： JSONP 只能发起 GET 请求

### JSONP 安全性问题

#### CSRF 攻击

前端构造一个恶意页面，请求 `JSONP` 接口，收集服务端的敏感信息。如果 `JSONP` 接口还涉及一些敏感操作或信息（比如登录、删除等操作），那就更不安全了。
解决方法：验证 `JSONP` 的调用来源（`Referer`），服务端判断 `Referer` 是否是白名单，或者部署随机 `Token` 来防御。

#### XSS 漏洞

不严谨的 `content-type` 导致的 `XSS` 漏洞，想象一下 `JSONP` 就是你请求 `http://youdomain.com?callback=douniwan`, 然后返回 `douniwan({ data })`，那假如请求 `http://youdomain.com?callback=<script>alert(1)</script>` 不就返回 `<script>alert(1)</script>({ data })`了吗，如果没有严格定义好 `Content-Type（ Content-Type: application/json ）`，再加上没有过滤 `callback` 参数，直接当 `html` 解析了，就是一个赤裸裸的 `XSS` 了。
解决方法：严格定义`Content-Type: application/json`，然后严格过滤 `callback` 后的参数并且限制长度（进行字符转义，例如`<`换成`&lt`，`>`换成`&gt`）等，这样返回的脚本内容会变成文本格式，脚本将不会执行。

#### 服务器被黑，返回一串恶意执行的代码

可以将执行的代码转发到服务端进行校验 JSONP 内容校验，再返回校验结果。

#### CORS（跨域资款共享）

##### 什么是 CORS

CORS（跨域资源共享 Cross-origin resource sharing）允许浏览器向跨域服务器发出 XMLHttpRequest 请求，从而克服跨域问题，它需要浏览器和服务器的同时支持。

-   浏览器端会自动向请求头添加 origin 字段，表明当前请求来源。
-   服务器端需要设置响应头的 Access-Control-Allow-Methods，Access-Control-Allow-Headers，Access-Control-Allow-Origin 等字段，指定允许的方法，头部，源等信息。
-   请求分为简单请求和非简单请求，非简单请求会先进行一次 OPTION 方法进行预检，看是否允许当前跨域请求。

##### 简单请求

请求方法是以下三种方法之一：

-   HEAD
-   GET
-   POST

HTTP 的请求头信息不超出以下几种字段：

-   Accept
-   Accept-Language
-   Content-Language
-   Last-Event-ID
-   Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain

后端的响应头信息：

-   Access-Control-Allow-Origin：该字段是必须的。它的值要么是请求时 Origin 字段的值，要么是一个\*，表示接受任意域名的请求。
-   Access-Control-Allow-Credentials：该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。
-   Access-Control-Expose-Headers：该字段可选。CORS 请求时，XMLHttpRequest 对象的 getResponseHeader()方法只能拿到 6 个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在 Access-Control-Expose-Headers 里面指定。

##### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json。非简单请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求（preflight）。

-   Access-Control-Request-Method：该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是 PUT。

-   Access-Control-Request-Headers：该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是 X-Custom-Header。

如果浏览器否定了"预检"请求，会返回一个正常的 HTTP 回应，但是没有任何 CORS 相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被 XMLHttpRequest 对象的 onerror 回调函数捕获。

#### JSONP 和 CORS 的对比

-   JSONP 只支持 GET 请求，CORS 支持所有类型的 HTTP 请求
-   JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据

#### 其他跨域解决方案

-   Nginx 反向代理
-   postMessage
-   document.domain
