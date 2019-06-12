## Tapable

webpack 本质上是一个事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable，Tapable 有点类似 nodejs 的 events 库，核心原理也是以来于发布订阅模式

```js
const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require('tapable')
```
