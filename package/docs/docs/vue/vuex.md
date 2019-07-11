# vuex 的学习

## vuex 理解

### 是什么？

`Vuex` 是一个专为 `Vue.js` 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。`Vuex` 也集成到 `Vue` 的官方调试工具 `devtools extension`，提供了诸如零配置的 `time-travel` 调试、状态快照导入导出等高级调试功能。

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。

### 解决了什么问题

在没有使用 `vuex` 的情况下：

1. 多个视图依赖于同一状态。

    传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力

1. 来自不同视图的行为需要变更同一状态。

    我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

### 什么时候需要 `vuex`

`vuex` 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要我们短期和长期效益进行权衡

使用与中大型单页应用。对于简单应用，使用 `store` 模式就可以满足需要

### 与全局变量的区别

1. `Vuex` 的状态存储是响应式的。当 Vue 组件从 `store` 中读取状态的时候，若 `store` 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

1. 你不能直接改变 `store` 中的状态。改变 `store` 中的状态的唯一途径就是显式地提交 `(commit) mutation`。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

## 一个简单的例子

```js
// 如果在模块化构建系统中，请确保在开头调用了Vue.use(vuex)
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})
```

现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：

```js
store.commit('increment')
console.log(store.state.count) // 1
```

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。

::: warning
请不要直接改变 store.state.count,是因为 vue 可以更明确地追踪到状态的变化。可以有机会记录每次状态的改变。甚至可以实现如时间穿梭般的调试体验。
:::

<ClientOnly>
  <article-info weather="duoyun" mood="fadai">2019年7月11日 18:43:22</article-info>
</ClientOnly>
