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
