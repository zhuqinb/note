### 学习 node 第一天

##### 概念

node 基于事件驱动、非阻塞 I/O 的 web 服务器
使用谷歌浏览器 v8 引擎

chrome

HTML JavaScript
WebKit V8
中间层
网卡 硬盘 显卡 ....

Node

JavaScript
v8
中间层
网卡 硬盘 ...

浏览器除了 v8 作为 js 引擎外，还有 webkit 提供布局引擎。
html5 发展过程中定义了更多更丰富的 API
在实现上，浏览器提供了越来越多的功能暴露给 js 和 html 标签，这个愿景美好，但对于前端浏览器的发展现状而言，html5 标准统一的过程是相对缓慢的，js 作为一门图灵完备的语言，长久以来却在浏览器的沙盒中运行，它的能力取决于浏览器中间层提供的支持有多少

除了 HTML、WebKit 和显卡这些 UI 相关技术外，node 的结构与 chrome 十分相似。他们都是基于时间驱动的异步架构，浏览器通过时间驱动服务界面的交互，Node 通过时间驱动来服务 I/O

在 Node 中， js 可以随心所欲的访问本地文件，可以搭建 webScoket 服务器端，可以链接数据库，可以和 Web Workers 一样玩转转多进程。

Node 的特点
作为后端 js 的运作平台，node 保留了那些 js
中那些熟悉的接口，没有改写语言本身的任何特征，依旧基于作用域和原型链，区别在于它将前端中广泛运用的思想迁移到了服务端

单线程
Node 保持了 js 在浏览器中单线程的特点，而且在 Node 中，js 与其余线程无法共享任何状态的。单线程的最大好处是不用想多线程编程那样处处在意状态的同步问题，这里没有死锁的存在，也没有线程上下文交换所带来的性能上的开销。

弱点：

-   无法利用多核 CPU
-   错误会引起整个应用退出，应用的健壮性值得考验
-   大量计算占用 CPU 导致无法继续调用异步 I/O

像浏览器中 js 与 ui 共用一个线程一样，js 长时间执行会导致 ui 的渲染和响应中断。在 Node 中，长时间的 cpu 占用也会导致后续的异步 i/o 发不出调用，已完成异步 i/o 的回调函数也会得不到及时执行

最早解决这种大计算量问题的方案是 google 公司开发的 Gears，他启用一个完全独立的进程，将需要计算的程序发送给进程，在结果得出后，通过事件将结果传递回来。这种模型将计算量分发到其他进程上，以此来降低运算造成堵塞的几率，后来，Html5 定制了 web workers 的标准， google 放弃了 gears，全力支持 web workers， web workers 能够创建工作线程来进行计算，以解决 js 大计算阻塞 ui 渲染的问题，工作线程为了不阻塞主线程，通过消息传递的方式来传递运算结果，这也使得工作线程不能访问到主线程的 UI
Node 采用了与 web workers 相同的思路来解决单线程中大计算量的问题：child_process. 子进程的出现，意味着 Node 可以从容地应对单线程的健壮性和无法利用多核 cpu 方面的问题，通过将计算分发到各个子进程，可以将大量计算分解掉，然后在通过进程之间的事件消息来传递结果，这可以很好第保持应用模型的简单和低依赖，通过 Master-Worker 的管理方式，也可以很好地管理各个工作进程，已达到更高的健壮性

    在Node的推广过程中，无数次有人问起Node的应用场景是̣什么。如果将所有的脚本语言拿到一处来批判，那么从单线程的角度来说，Node处理I/O的能力是值得称赞的。通常,

Node 擅长 I/O 密集型的应用场景是本上是没人反对的。Node 面向网络且擅长并行 I/O，能够有效组织起更多的硬件资源，从而提供更多好的服务。
I/O 密集的优势主要在于 Node 利用事件循环的处理能力，而不是启动每一个线程为每一个请求服务，资源占用极少

#### 是否不擅长 cpu 密集型业务

实际上， v8 的执行效率是十分高的，但以执行效率来做批判，v8 的执行效率是不用质疑的
主要面临的挑战是: 由于 js 单线程的原因，如果长时间运行的计算，叫会导致 cpu 事件内不能释放，是的后续的 io 无法发起
解决方式，适当调整和分解大型运行任务为多个小人物，使得运行能够适时释放，不阻塞 io 调用的发起，这样角可以同时享受并行异步 io 的好处，又能充分利用 cpu

关于 cpu 密集型应用，node 的异步 io 已经解决了在单线程上 cpu 和 io 之间阻塞无法重叠利用的问题，io 阻塞造成的性能浪费远比 cpu 的影响小，对于长时间运行的计算，如果它的耗时超过普通阻塞 io 的耗时，那么应用场景就需要宠幸评估，因为这类计算比阻塞 io 还影响效率，甚至说就是一个纯计算的场景，根本没有 io，此类应用场景或许应当采用多线程的方式进行计算，node 虽然没有提供多线程用于计算支持，但还是有以下两个方式充分利用 cpu

-   node 可以通过编写 c/c++扩展的方式更高效地利用 cpu，将一些 v8 不能做到性能极致的地方可以通过 c/c++来实现，
-   如果单线程的 node 不能满足需求，甚至用了 c/c++扩展后还觉得不够，那么通过子进程的方式将一部分 Node 进程当做常驻服务进行用于计算，然后利用进程间的消息来传递结果，将计算与 io 分离，这样还能充分利用多 cpu

分布式应用

阿里巴巴的数据平台对 node 的分布式应用算是一个典型的例子，分布式应用意味之对可伸缩性的要求非常高。数据平台通常要在一个数据库集群中寻找需要的数据。阿里巴巴开发了中间层 NodeFox、ITier,将数据库集群做了一个划分和映射，查询调用依旧是针对单张表进行 sql 查询，中间层分解查询 sql，并行地去多台数据库中获取数据库并合并。NodeFox 能实现对多台 Mysql 数据库的查询，如同查询一台 Mysql 一样，而 ITier 更强大,查询多个数据库如果查询单个数据库一样，这里的多个数据库是指不同的数据库，如 Mysql 或其他数据库
这个案例其实意识高效利用并行 io 的例子，node 高效利用并行 io 的过程，也是高效使用数据库的过程，对于 node，这个行为只是以此普通的 io，对于数据库而言，确实以此复杂的计算，所以也是进而充分压榨硬件的过程
