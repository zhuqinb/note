修改生成和开发模式

```js
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --mode development"
}
```

`production`和`development`区别
是否进行了代码的压缩

## 区分环境变量

```js
// TODO: 没有测试
module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		})
	]
}

// package.json
"scripts": {
    "build": "cross-env NODE_ENV=production webpack --mode development"
}
```
