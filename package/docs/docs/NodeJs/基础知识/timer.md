# timer 定时器

1. timer 模块暴露了一个全局的 api， 用于预定在将来某个时间段调用的函数。因为定时器函数是全局变量，所以不需要调用 require('timer')来使用 api
2. Node.js 中的定时器函数实现了于 web 浏览器提供的定时器 API 类似的 API,但是使用了不同的内部实现(基于 Node.js [https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/](事件循环)构建)
