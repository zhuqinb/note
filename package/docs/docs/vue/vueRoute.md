# vue-router 使用

## 使用步骤

```js
// main.js

// 1. 安装
// npm i vue-router -S

// 2. 引入
import VueRouter from 'vue-router'

// 3. 安装插件
Vue.use(VueRouter)

// 4. 创建路由
let router = new VueRouter({
	routers: [
		{
			path: '/home',
			component: Home
		}
	]
})

// 5. 将路由对象传递给Vue实例
new Vue({
	el: '#app',
	router,
	render: c => c(App)
})

// 6.在app.vue中留一个路由渲染的节点

// app.vue

<template>
    <router-view></router-view>
</template>
```
