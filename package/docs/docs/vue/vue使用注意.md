### 1.不要试图修改 props 里面的值，因为是 vue 是单向数据流

### vue 里面使用 `el-dialog` 进行双向控制显影（父子组件）

```html
<!--自组件-->
<template>
	<el-dialog title="弹窗" :visible.sync="showDialog" :before-close="cancel">
		<el-form-item>
			<el-button type="primary" @click="cancel()">确 定</el-button>
			<el-button @click="cancel()">取消</el-button>
		</el-form-item>
	</el-dialog>
</template>
<script>
	export default {
		props: {
			showDialog: {
				require: true,
				defalut: false,
				type: Boolean
			}
		},
		methods: {
			cancel() {
				this.$emit('update:showDialog', false)
			}
		}
	}
</script>
```

```html
<template>
	<my-dialog :showDialog.sync="showDialog"></my-dialog>
</template>

<script>
	import MyDialog from 'my-dialog'
	export default {
		components: { MyDialog },
		data() {
			return {
				showDialog: false
			}
		}
	}
</script>
```

## vue 模块懒加载(按需加载)

```js
Vue.component('AsyncCmp', () => import('./AsyncCmp'))
```

```js
new Vue({
	components: {
		AsyncCmp: () => import('./AsyncCmp')
	}
})
```

```js
components: {
	UiAlert: () => import('keen-ui').then(({ UiAlert }) => UiAlert)
}
```

路由懒加载

Vue 路由器内置支持延迟加载。它就像使用该 import 功能导入组件一样简单。

```js
const Login = () => import('./login')

new VueRouter({
	routes: [{ path: '/login', component: Login }]
})
```

懒加载 Vuex 模块

Vuex 有一种 registerModule 方法可以让我们动态创建 Vuex 模块。如果我们考虑到该 import 函数返回 ES 模块作为有效负载的承诺，我们可以使用它来延迟加载模块：

```js
const store = new Vuex.store()

import('./store/login').then(loginModule => {
	store.registerModule('login', loginModule)
})
```
