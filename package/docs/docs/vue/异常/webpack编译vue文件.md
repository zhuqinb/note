# webpack 编译 vue 出现的问题

## 问题一

```txt
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

### 原因

`vue` 有两种形式的代码 `compiler`（模板）模式和 `runtime` 模式（运行时），`vue` 模块的 `package.json` 的 `main` 字段默认为 `runtime` 模式， 指向了`dist/vue.runtime.common.js`位置。

这是 `vue` 升级到 2.0 之后就有的特点。

而我的 `main.js` 文件中，初始化 `vue` 却是这么写的，这种形式为 `compiler` 模式的，所以就会出现上面的错误信息

```js
new Vue({
	el: '#app',
	router: router,
	store: store,
	templte: '<App/>',
	components: { App }
})
```

### 解决方式

#### 第一种

修改 main.js

```js
new Vue({
	router: router,
	store: store,
	render: h => h(App)
}).$mount('#app')
```

#### 第二种

`webpack` 增加别名

```js
resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js' // 内部为正则表达式
    }
}
```

当运行 `import Vue from 'vue'`,会被解析为`import Vue from 'vue/dist/vue.esm.js'`, 直接指定文件的位置,覆盖`Vue`默认的`package.json`里面的`main`字段

#### 第三种

```js
import Vue from 'vue/dist/vue.esm.js'
```

### 参考

[https://blog.csdn.net/wxl1555/article/details/83187647](https://blog.csdn.net/wxl1555/article/details/83187647)

<ClientOnly>
  <article-info weather="qing" mood="nanguo">2019年8月19日 16:06</article-info>
</ClientOnly>
